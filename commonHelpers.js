import{a as f,i as u,S as E}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(e){const o="https://pixabay.com/api/",s=new URLSearchParams({key:"42924833-4b721b8caf67a58fd43475ecb",per_page:h,page:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(o,{params:s})).data}async function m(e){console.log(e);const o=e.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}),i.ulEl.insertAdjacentHTML("beforeend",b(o));const s={captionsData:"alt",captionDelay:250};let a=new E(".gallery a",s);a.on("show.simplelightbox",function(){}),a.refresh()}function b(e){return e.map(({webformatURL:o,largeImageURL:s,tags:a,likes:t,views:r,comments:l,downloads:y})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img       
          class="gallery-image"
          width="1280"
          height="152"
          src="${o}"
          alt="${a}"
        />
        <ul class="img-description"><li class><h3>Likes</h3><p>${t}</p><li/>
        <li><h3>Views</h3><p>${r}</p><li/>
        <li><h3>Comments</h3><p>${l}</p><li/>  
        <li><h3>Downloads</h3><p>${y}</p><li/></ul>
      </a>
    </li>   
  `).join("")}const i={formEl:document.querySelector("form"),inputEl:document.querySelector("input.form-control"),ulEl:document.querySelector("ul.gallery")},n=document.getElementById("load-button"),g=document.getElementById("loader");let d=1,h=15,c="";i.inputEl.addEventListener("input",e=>{e.preventDefault(),c=i.inputEl.value.trim(),i.ulEl.innerHTML="",g.className="loader visually-hidden",loadButtonButton.className="loader visually-hidden"});const v=document.querySelector(".btn");v.addEventListener("click",async()=>{i.ulEl.innerHTML="",loader.className="loader",d=1,h=15;try{if(c){n.className="";const e=await p(c);m(e),loader.className="loader visually-hidden",d+=1}}catch{n.className="visually-hidden",u.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})}});n.addEventListener("click",async()=>{loader.className="loader";try{if(c){const e=await p(c),o=e.totalHits;if(m(e),document.querySelectorAll(".gallery-item").length>=o)return n.className="visually-hidden",g.className="visually-hidden",u.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});m(e),g.className="loader visually-hidden";const a=n.getBoundingClientRect();scrollBy(a.x,a.y),d+=1}}catch{u.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})}});
//# sourceMappingURL=commonHelpers.js.map
