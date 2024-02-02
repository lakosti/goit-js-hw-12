import{S as f,i as n,a as g}from"./assets/vendor-eeed083b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const b="https://pixabay.com/api/",M="42030111-51447223cbabab8b20d1b63f9";let c=1,d="";const y=15,e={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".loader-more"),btnUp:document.querySelector(".up-btn"),loadMore:document.querySelector(".load-more")};e.loader.style.display="none";e.loaderMore.style.display="none";e.loadMore.style.display="none";e.btnUp.style.display="none";e.form.addEventListener("submit",v);e.loadMore.addEventListener("click",w);const p=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function v(a){a.preventDefault();const t=a.currentTarget;if(d=t.elements.search.value.trim(),c=1,e.list.innerHTML="",e.loader.style.display="block",e.loadMore.style.display="none",e.loaderMore.style.display="none",!d){n.error({title:"Error",message:"Please enter something in the search"}),e.loader.style.display="none";return}try{const o=await u(d,c),l=o.hits;if(!l.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=Math.ceil(o.totalHits/y);o.totalHits===r?(e.loaderMore.style.display="none",e.loadMore.style.display="none"):e.loadMore.style.display="block",e.list.insertAdjacentHTML("beforeend",h(l)),p.refresh()}catch(o){n.error({title:"Error",message:`${o}`})}finally{t.reset(),e.loader.style.display="none"}}async function w(){c+=1,e.loaderMore.style.display="block",e.loadMore.style.display="none";const a=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const t=await u(d,c),o=t.hits;if(o.length===0)n.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."});else{e.list.insertAdjacentHTML("beforeend",h(o)),p.refresh();const l=Math.ceil(t.totalHits/y);c>=l?(n.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."}),e.loadMore.style.display="none"):e.loadMore.style.display="block"}}catch(t){console.log(t)}finally{window.scrollBy({top:a().height*2,left:0,behavior:"smooth"}),e.loaderMore.style.display="none"}}async function u(a,t){try{return(await g.get(`${b}/`,{params:{key:M,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:t}})).data}catch{n.error({title:"Error",message:"Something happend. Try later"})}}function h(a){return a.map(({webformatURL:t,largeImageURL:o,tags:l,likes:r,views:s,comments:i,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-img"
              src="${t}"
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
              <p class="numbers">${s}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Comments</h2>
              <p class="numbers">${i}</p>
            </div>
            <div class="wrap">
              <h2 class="header">Downloads</h2>
              <p class="numbers">${m}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
