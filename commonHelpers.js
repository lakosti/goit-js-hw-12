import{S as m,i}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();const f="https://pixabay.com/api/",g="42030111-51447223cbabab8b20d1b63f9";let c=1,b="";const d=15,e={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".loader-more"),btnUp:document.querySelector(".up-btn"),loadMore:document.querySelector(".load-more")};e.loader.style.display="none";e.loaderMore.style.display="none";e.loadMore.style.display="none";e.btnUp.style.display="none";e.form.addEventListener("submit",M);e.loadMore.addEventListener("click",v);const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function M(o){o.preventDefault();const s=o.currentTarget,l=s.elements.search.value.trim();if(c=1,e.list.innerHTML="",e.loader.style.display="block",e.loadMore.style.display="none",e.loaderMore.style.display="none",!l){i.error({title:"Error",message:"Please enter something in the search"}),e.loader.style.display="none";return}u(l).then(a=>{const r=a.hits;if(!r.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=Math.ceil(a.totalHits/d);c===t&&(e.loaderMore.style.display="none"),e.loadMore.style.display="block",e.list.insertAdjacentHTML("beforeend",p(r)),y.refresh()}).catch(a=>{i.error({title:"Error",message:`${a}`})}).finally(()=>{s.reset(),e.loader.style.display="none"})}function v(){c+=1,e.loaderMore.style.display="block",e.loadMore.style.display="none",u(b).then(o=>{const s=o.hits;e.list.insertAdjacentHTML("beforeend",p(s)),y.refresh();const l=Math.ceil(o.totalHits/d);c===l&&(i.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),e.loadMore.style.display="none",e.loaderMore.style.display="none"),e.loaderMore.style.display="none",e.loadMore.style.display="block"}).catch(o=>console.log(o))}function u(o){const s=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:1});return fetch(`${f}?${s}`).then(l=>{if(!l.ok)throw new Error(l.statusText);return l.json()})}function p(o){return o.map(({webformatURL:s,largeImageURL:l,tags:a,likes:r,views:t,comments:n,downloads:h})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-img"
              src="${s}"
              alt="${a}"

            />
          </a>
          <div class="wrapper">
            <div class="wrap">
              <h2 class="header">Likes</h2>
              <p class="numbers">${r}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Views</h2>
              <p class="numbers">${t}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${n}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${h}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
