import{a as f,i as u,S as E}from"./assets/vendor-95dc692e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();async function g(e){const o="https://pixabay.com/api/",a=new URLSearchParams({key:"42924833-4b721b8caf67a58fd43475ecb",per_page:y,page:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(o,{params:a})).data}async function m(e){console.log(e);const o=e.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"}),l.ulEl.insertAdjacentHTML("beforeend",b(o));const a={captionsData:"alt",captionDelay:250};let s=new E(".gallery a",a);s.on("show.simplelightbox",function(){}),s.refresh()}function b(e){return e.map(({webformatURL:o,largeImageURL:a,tags:s,likes:t,views:r,comments:i,downloads:h})=>`
      <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img       
          class="gallery-image"
          src="${o}"
          alt="${s}"
        />
        <ul class="img-description"><li class><h3>Likes</h3><p>${t}</p><li/>
        <li><h3>Views</h3><p>${r}</p><li/>
        <li><h3>Comments</h3><p>${i}</p><li/>  
        <li><h3>Downloads</h3><p>${h}</p><li/></ul>
      </a>
    </li>   
  `).join("")}const l={formEl:document.querySelector("form"),inputEl:document.querySelector("input.form-control"),ulEl:document.querySelector("ul.gallery")},n=document.getElementById("load-button"),p=document.getElementById("loader");let d=1,y=15,c="";l.inputEl.addEventListener("input",e=>{e.preventDefault(),c=l.inputEl.value.trim(),l.ulEl.innerHTML=""});const v=document.querySelector(".btn");v.addEventListener("click",async()=>{l.ulEl.innerHTML="",loader.className="loader",d=1,y=15;try{if(c){n.className="",l.ulEl.innerHTML='<div class="loader"></div>';const e=await g(c);m(e),loader.className="loader visually-hidden",d+=1}}catch{n.className="visually-hidden",u.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})}});n.addEventListener("click",async()=>{loader.className="loader";try{if(c){const e=await g(c),o=e.totalHits;if(m(e),document.querySelectorAll(".gallery-item").length>=o)return n.className="visually-hidden",p.className="visually-hidden",u.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});m(e),p.className="loader visually-hidden";const s=n.getBoundingClientRect();scrollBy(s.x,s.y),d+=1}}catch{u.error({title:"Error",backgroundColor:"red",position:"topRight",message:"Please Sorry, there are no images matching your search query. Please try again! again!"})}});
//# sourceMappingURL=commonHelpers.js.map
