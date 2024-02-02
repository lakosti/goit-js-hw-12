import{S as f,i,a as g}from"./assets/vendor-eeed083b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const b="https://pixabay.com/api/",M="42030111-51447223cbabab8b20d1b63f9";let d=1,c="";const y=15,e={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".loader-more"),btnUp:document.querySelector(".up-btn"),loadMore:document.querySelector(".load-more")};e.loader.style.display="none";e.loaderMore.style.display="none";e.loadMore.style.display="none";e.btnUp.style.display="none";e.form.addEventListener("submit",v);e.loadMore.addEventListener("click",w);const p=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function v(s){s.preventDefault();const a=s.currentTarget;if(c=a.elements.search.value.trim(),d=1,e.list.innerHTML="",e.loader.style.display="block",e.loadMore.style.display="none",e.loaderMore.style.display="none",!c){i.error({title:"Error",message:"Please enter something in the search"}),e.loader.style.display="none";return}try{const t=await u(c,d),l=t.hits;if(!l.length){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=Math.ceil(t.totalHits/y);t.totalHits===r?(e.loaderMore.style.display="none",e.loadMore.style.display="none"):e.loadMore.style.display="block",e.list.insertAdjacentHTML("beforeend",h(l)),p.refresh()}catch(t){i.error({title:"Error",message:`${t}`})}finally{a.reset(),e.loader.style.display="none"}}async function w(){let s="";d+=1,e.loaderMore.style.display="block",e.loadMore.style.display="none";const a=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const l=(await u(c,d)).hits;e.list.insertAdjacentHTML("beforeend",h(l))}catch(t){console.log(t)}finally{window.scrollBy({top:a().height*2,left:0,behavior:"smooth"}),p.refresh();const t=Math.ceil(s.totalHits/y);s.totalHits===t&&(i.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."}),e.loadMore.style.display="none",e.loaderMore.style.display="none"),e.loaderMore.style.display="none",e.loadMore.style.display="block"}}async function u(s,a){try{return(await g.get(`${b}/`,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:a}})).data}catch{i.error({title:"Error",message:"Something happend. Try later"})}}function h(s){return s.map(({webformatURL:a,largeImageURL:t,tags:l,likes:r,views:o,comments:n,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-img"
              src="${a}"
              alt="${l}"

            />
          </a>
          <div class="wrapper">
            <div class="wrap">
              <h2 class="header">Likes</h2>
              <p class="numbers">${r}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Views</h2>
              <p class="numbers">${o}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${n}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${m}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
