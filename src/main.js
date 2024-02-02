import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42030111-51447223cbabab8b20d1b63f9';
let currentPage = 1;
let searchWord = '';
const perPage = 15;

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
  loaderMore: document.querySelector('.loader-more'),
  btnUp: document.querySelector('.up-btn'),
  loadMore: document.querySelector('.load-more'),
};

refs.loader.style.display = 'none';
refs.loaderMore.style.display = 'none';
refs.loadMore.style.display = 'none';
refs.btnUp.style.display = 'none';

refs.form.addEventListener('submit', handleSearch);
refs.loadMore.addEventListener('click', handleLoad);

const simplelightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function handleSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const searchWord = form.elements.search.value.trim();

  currentPage = 1;
  refs.list.innerHTML = '';
  refs.loader.style.display = 'block';
  refs.loadMore.style.display = 'none';
  refs.loaderMore.style.display = 'none';

  if (!searchWord) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter something in the search',
    });
    refs.loader.style.display = 'none';
    return;
  }
  searchPhotoByName(searchWord, currentPage)
    .then(data => {
      const arr = data.hits;
      if (!arr.length) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      const totalPages = Math.ceil(data.totalHits / perPage);

      if (currentPage === totalPages) {
        refs.loaderMore.style.display = 'none';
        refs.loadMore.style.display = 'block';
      } else {
        refs.loadMore.style.display = 'block';
      }

      refs.list.insertAdjacentHTML('beforeend', createMarkup(arr));
      simplelightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: `${err}`,
      });
    })
    .finally(() => {
      form.reset();
      refs.loader.style.display = 'none';
    });
}

function handleLoad() {
  currentPage += 1;

  refs.loaderMore.style.display = 'block';
  refs.loadMore.style.display = 'none';

  searchPhotoByName(searchWord, currentPage)
    .then(data => {
      const arr = data.hits;
      refs.list.insertAdjacentHTML('beforeend', createMarkup(arr));
      simplelightbox.refresh();

      const totalPages = Math.ceil(data.totalHits / perPage);

      if (currentPage === totalPages) {
        iziToast.info({
          title: 'Caution',
          message: `We're sorry, but you've reached the end of search results.`,
        });
        refs.loadMore.style.display = 'none';
        refs.loaderMore.style.display = 'none';
      }
      refs.loaderMore.style.display = 'none';
      refs.loadMore.style.display = 'block';

      return;
    })
    .catch(err => console.log(err));
}

function searchPhotoByName(searchWord) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    page: 1,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-img"
              src="${webformatURL}"
              alt="${tags}"

            />
          </a>
          <div class="wrapper">
            <div class="wrap">
              <h2 class="header">Likes</h2>
              <p class="numbers">${likes}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Views</h2>
              <p class="numbers">${views}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${comments}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');
}
