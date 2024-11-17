import{a as w,i as l,S as d}from"./assets/vendor-BzajH6aU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const M="47125427-ad9e927b7d4f8d8b2ea4266bf";let u,a;async function P(t){return console.log("queryUser",t),u=t,a=1,h()}function h(){return w.get("https://pixabay.com/api/",{params:{key:M,q:u,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:15}})}async function T(){return a++,h()}const m=document.querySelector(".list");function f(t){m.insertAdjacentHTML("beforeend",x(t.hits))}function q(){m.innerHTML=""}function x(t){return t.map(({previewURL:r,tags:i,likes:n,views:e,downloads:o,comments:c,largeImageURL:S})=>`<li class = "card">
            <a href="${S}"><img src = "${r}" alt = "${i}" width = "300px"></a>      
             <div class = "bottomLine">

                <div class = "col">
                    <div class = "name">Likes</div>
                    <div class = "value">${n}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Views</div>
                    <div class = "value">${e}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Comments</div>
                    <div class = "value">${c}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Downloads</div>
                    <div class = "value">${o}</div>
                </div>

            </div>
        </li>`).join("")}const s=document.querySelector(".btnMore"),p=document.querySelector(".inputSearch"),H=document.querySelector(".btnSearch"),v=document.querySelector(".loading-text");let g;s.hidden=!0;H.addEventListener("click",E);s.addEventListener("click",$);async function E(){const t=p.value;console.log(t),D(),q(),y();try{const r=await P(t);if(b(),r.data.hits.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}s.hidden=!1,f(r.data),g=new d(".list a",{captionDelay:250,captionData:"alt",nav:!0}),setTimeout(L,1e3)}catch(r){console.log("error",r)}}async function $(){y();try{s.hidden=!0;const t=await T();if(b(),t.data.hits.length===0){l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}s.hidden=!1,f(t.data),g=new d(".list a",{captionDelay:250,captionData:"alt",nav:!0}),setTimeout(L,1e3)}catch(t){console.log("error",t)}}function y(){v.innerHTML="Loading images, please wait..."}function b(){v.innerHTML=""}function D(){p.value=""}function L(){const r=document.querySelector(".card").getBoundingClientRect(),i=setInterval(()=>{const n=document.documentElement.scrollHeight,e=document.documentElement.scrollTop,o=document.documentElement.clientHeight;e+o>=n?clearInterval(i):window.scrollBy({top:r.height*2,behavior:"smooth"})},1e3)}
//# sourceMappingURL=index.js.map
