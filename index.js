import{S as f,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",p="47094803-b94033d9110faf4ab5c097a20";function h(i){const s=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function y(i){return i.map(({webformatURL:s,largeImageURL:r,tags:n,likes:e,views:t,comments:o,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${n}"
              width="360"
            />
          </a>
          <div class="gallery-info">
            <div class="gallery-info-item">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Views</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${o}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}const u=document.querySelector(".search-form"),g=document.querySelector(".search-input"),c=document.querySelector(".gallery"),a=document.querySelector(".loader");a.style.display="none";u.addEventListener("submit",L);const v=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function L(i){i.preventDefault(),c.innerHTML="",a.style.display="block";const s=g.value.trim();if(!s){a.style.display="none",l.error({maxWidth:432,position:"topRight",title:"Error",message:"Please enter a search query!"});return}h(s).then(r=>{if(a.style.display="none",!r.hits.length){l.error({maxWidth:432,position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML=y(r.hits),v.refresh(),u.reset()}).catch(r=>{a.style.display="none",console.log(r)})}
//# sourceMappingURL=index.js.map
