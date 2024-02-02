import{S as m,i as c,a as f}from"./assets/vendor-eeed083b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const g="https://pixabay.com/api/",b="42030111-51447223cbabab8b20d1b63f9";let n=1,M="";const d=15,e={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".loader-more"),btnUp:document.querySelector(".up-btn"),loadMore:document.querySelector(".load-more")};e.loader.style.display="none";e.loaderMore.style.display="none";e.loadMore.style.display="none";e.btnUp.style.display="none";e.form.addEventListener("submit",v);e.loadMore.addEventListener("click",w);const y=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function v(l){l.preventDefault();const o=l.currentTarget,a=o.elements.search.value.trim();if(n=1,e.list.innerHTML="",e.loader.style.display="block",e.loadMore.style.display="none",e.loaderMore.style.display="none",!a){c.error({title:"Error",message:"Please enter something in the search"}),e.loader.style.display="none";return}try{const s=await p(a,n),r=s.hits;if(!r.length){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=Math.ceil(s.totalHits/d);n===t&&(e.loaderMore.style.display="none"),e.loadMore.style.display="block",e.list.insertAdjacentHTML("beforeend",u(r)),y.refresh()}catch(s){c.error({title:"Error",message:`${s}`})}finally{o.reset(),e.loader.style.display="none"}}async function w(){let l="";n+=1,e.loaderMore.style.display="block",e.loadMore.style.display="none";const o=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const s=(await p(M,n)).hits;e.list.insertAdjacentHTML("beforeend",u(s))}catch(a){console.log(a)}finally{window.scrollBy({top:o().height*2,left:0,behavior:"smooth"}),y.refresh();const a=Math.ceil(l.totalHits/d);n===a&&(c.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),e.loadMore.style.display="none",e.loaderMore.style.display="none"),e.loaderMore.style.display="none",e.loadMore.style.display="block"}}async function p(l,o){try{return(await f.get(`${g}/`,{params:{key:b,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:o}})).data}catch{c.error({title:"Error",message:"Something happend. Try later"})}}function u(l){return l.map(({webformatURL:o,largeImageURL:a,tags:s,likes:r,views:t,comments:i,downloads:h})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-img"
              src="${o}"
              alt="${s}"

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
              <p class="numbers">${i}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${h}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
