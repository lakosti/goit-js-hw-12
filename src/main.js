import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42030111-51447223cbabab8b20d1b63f9';

const refs = {
  form: document.querySelector('.form'),
  list: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleSearch);
refs.loader.style.display = 'none';

const simplelightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

function handleSearch(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const searchWord = form.elements.search.value;

  refs.loader.style.display = 'block';
  refs.list.innerHTML = '';

  if (!searchWord) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter something in the search',
    });
    refs.loader.style.display = 'none';
    return;
  }
  searchPhotoByName(searchWord)
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

      refs.list.innerHTML = createMarkup(arr);
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

function searchPhotoByName(searchWord) {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
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
