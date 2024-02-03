import{S as f,i as n,a as g}from"./assets/vendor-eeed083b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const b="https://pixabay.com/api/",M="42030111-51447223cbabab8b20d1b63f9";let c=1,d="";const y=15,e={form:document.querySelector(".form"),list:document.querySelector(".gallery-list"),loader:document.querySelector(".loader"),loaderMore:document.querySelector(".loader-more"),btnUp:document.querySelector(".up-btn"),loadMore:document.querySelector(".load-more")};e.loader.style.display="none";e.loaderMore.style.display="none";e.loadMore.style.display="none";e.btnUp.style.display="none";e.form.addEventListener("submit",v);e.loadMore.addEventListener("click",w);const u=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});async function v(l){l.preventDefault();const t=l.currentTarget;if(d=t.elements.search.value.trim(),c=1,e.list.innerHTML="",e.loader.style.display="block",e.loadMore.style.display="none",e.loaderMore.style.display="none",!d){n.error({title:"Error",message:"Please enter something in the search"}),e.loader.style.display="none";return}try{const o=await p(d,c),a=o.hits;if(!a.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=Math.ceil(o.totalHits/y);o.totalHits===r?(e.loaderMore.style.display="none",e.loadMore.style.display="none"):e.loadMore.style.display="block",a.length<y&&(e.loadMore.style.display="none",n.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."})),e.list.insertAdjacentHTML("beforeend",h(a)),u.refresh()}catch(o){n.error({title:"Error",message:`${o}`})}finally{t.reset(),e.loader.style.display="none"}}async function w(){c+=1,e.loaderMore.style.display="block",e.loadMore.style.display="none";const l=()=>document.querySelector(".gallery-item").getBoundingClientRect();try{const t=await p(d,c),o=t.hits;if(o.length===0)n.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."});else{e.list.insertAdjacentHTML("beforeend",h(o)),u.refresh();const a=Math.ceil(t.totalHits/y);c>=a?(n.info({title:"Warning",message:"We're sorry, but you've reached the end of search results."}),e.loadMore.style.display="none"):e.loadMore.style.display="block"}}catch(t){n.error({title:"Error",message:`${t}`})}finally{window.scrollBy({top:l().height*2,left:0,behavior:"smooth"}),e.loaderMore.style.display="none"}}async function p(l,t){try{return(await g.get(`${b}/`,{params:{key:M,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:t}})).data}catch{n.error({title:"Error",message:"Something happend. Try later"})}}function h(l){return l.map(({webformatURL:t,largeImageURL:o,tags:a,likes:r,views:s,comments:i,downloads:m})=>`<li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img
              class="gallery-img"
              src="${t}"
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
