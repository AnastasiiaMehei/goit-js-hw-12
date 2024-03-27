import{a as f,i as c,S as p}from"./assets/vendor-95dc692e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function m(o){const t="https://pixabay.com/api/",n=new URLSearchParams({key:"42924833-4b721b8caf67a58fd43475ecb",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(t,{params:n})).data}async function d(o){l.ulEl.innerHTML="",console.log(o);const t=o.hits;t.length==0&&c.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}),l.ulEl.insertAdjacentHTML("beforeend",g(t));const n={captionsData:"alt",captionDelay:250};let i=new p(".gallery a",n);i.on("show.simplelightbox",function(){}),i.refresh()}function g(o){return o.map(({webformatURL:t,largeImageURL:n,tags:i,likes:e,views:r,comments:s,downloads:u})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${n}">
        <img       
          class="gallery-image"
          src="${t}"
          alt="${i}"
        />
        <ul class="img-description"><li class><h3>Likes</h3><p>${e}</p><li/>
        <li><h3>Views</h3><p>${r}</p><li/>
        <li><h3>Comments</h3><p>${s}</p><li/>  
        <li><h3>Downloads</h3><p>${u}</p><li/></ul>
      </a>
    </li>
     
  `).join("")}const l={formEl:document.querySelector("form"),formCont:document.querySelector("form-container"),inputEl:document.querySelector("input.form-control"),ulEl:document.querySelector("ul.gallery")};let a="";l.inputEl.addEventListener("input",o=>{o.preventDefault(),a=l.inputEl.value.trim(),l.ulEl.innerHTML=""});const h=document.querySelector(".btn");h.addEventListener("click",o=>{o.preventDefault(),a&&(l.ulEl.innerHTML='<div class="loader"></div>',m(a).then(t=>d(t)).catch(t=>{console.log(t),c.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})}))});
//# sourceMappingURL=commonHelpers.js.map
