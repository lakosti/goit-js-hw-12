import{S as d,i}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const u="https://pixabay.com/api/",h="42030111-51447223cbabab8b20d1b63f9",n={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader")};n.form.addEventListener("submit",f);n.loader.style.display="none";const m=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function f(o){o.preventDefault();const t=o.currentTarget,s=t.elements.search.value;if(n.loader.style.display="block",n.list.innerHTML="",!s){i.error({title:"Error",message:"Please enter something in the search"}),n.loader.style.display="none";return}p(s).then(a=>{const e=a.hits;if(!e.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}n.list.innerHTML=y(e),m.refresh()}).catch(a=>{i.error({title:"Error",message:`${a}`})}).finally(()=>{t.reset(),n.loader.style.display="none"})}function p(o){const t=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${u}?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function y(o){return o.map(({webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:l,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-img"
              src="${t}"
              alt="${a}"

            />
          </a>
          <div class="wrapper">
            <div class="wrap">
              <h2 class="header">Likes</h2>
              <p class="numbers">${e}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Views</h2>
              <p class="numbers">${r}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${l}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${c}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
