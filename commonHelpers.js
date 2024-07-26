import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(s){return s.map(({webformatURL:o,largeImageURL:i,tags:t,likes:e,views:r,comments:a,downloads:c})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${t}"
            />
          </a>
          <div class="gallery-info">
            <p class="info-item">
              <b>Likes</b> <span>${e}</span>
            </p>
            <p class="info-item">
              <b>Views</b> <span>${r}</span>
            </p>
            <p class="info-item">
              <b>Comments</b> <span>${a}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b> <span>${c}</span>
            </p>
          </div>

        </li>`).join("")}const p=document.querySelector(".gallery"),n=document.querySelector(".loader"),d=new u(".gallery li a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(s){const o=s.currentTarget.elements.search_query.value.trim().toLowerCase();if(!o)return;n.classList.remove("hidden");const i=new URLSearchParams({key:"45116727-e543bef81ffe857c5144581e6",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});setTimeout(()=>{fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.hits.length<1?f.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",position:"topRight",messageSize:16,messageColor:"#fff",messageLineHeight:"150%",image:"../img/eroor.svg",imageWidth:24,timeout:4e3}):(p.insertAdjacentHTML("beforeend",m(t.hits)),d.refresh())}).catch(t=>console.log(t)).finally(()=>{n.classList.add("hidden")})},1e3)}const l=document.querySelector(".form"),h=document.querySelector(".gallery");l.addEventListener("submit",s=>{s.preventDefault(),g(s),l.reset(),h.innerHTML=""});
//# sourceMappingURL=commonHelpers.js.map
