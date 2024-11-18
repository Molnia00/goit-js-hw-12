import{a as S,i as c,S as u}from"./assets/vendor-BzajH6aU.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const P="47125427-ad9e927b7d4f8d8b2ea4266bf";let f,l;const h=15;async function M(e){return console.log("queryUser",e),f=e,l=1,m()}function m(){return S.get("https://pixabay.com/api/",{params:{key:P,q:f,image_type:"photo",orientation:"horizontal",safesearch:"true",page:l,per_page:h}})}async function q(){return l++,m()}function g(e){return e-h*l>0}const p=document.querySelector(".list");function y(e){p.insertAdjacentHTML("beforeend",x(e.hits))}function D(){p.innerHTML=""}function x(e){return e.map(({previewURL:i,tags:n,likes:r,views:t,downloads:o,comments:s,largeImageURL:w})=>`<li class = "card">
            <a href="${w}"><img src = "${i}" alt = "${n}" width = "300px"></a>      
             <div class = "bottomLine">

                <div class = "col">
                    <div class = "name">Likes</div>
                    <div class = "value">${r}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Views</div>
                    <div class = "value">${t}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Comments</div>
                    <div class = "value">${s}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Downloads</div>
                    <div class = "value">${o}</div>
                </div>

            </div>
        </li>`).join("")}const a=document.querySelector(".btnMore"),T=document.querySelector(".inputSearch");document.querySelector(".btnSearch");const v=document.querySelector(".loading-text"),$=document.querySelector(".search-form");let b;a.hidden=!0;$.addEventListener("submit",H);a.addEventListener("click",O);async function H(e){a.hidden=!0,e.preventDefault();const n=new FormData(e.target).get("inputSearch").trim();if(!n){c.warning({title:"Caution",message:"You forgot to write search. Please try again!",position:"topRight"});return}console.log(n),E(),D(),L();try{const r=await M(n);if(d(),r.data.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(r.data.totalHits)&&(a.hidden=!1),y(r.data),b=new u(".list a",{captionDelay:250,captionData:"alt",nav:!0})}catch(r){d(),console.log("error",r),c.error({title:"Error",message:"Something go wrong. Please try again!",position:"topRight"})}}async function O(){L();try{a.hidden=!0;const e=await q();if(d(),e.data.hits.length===0){a.hidden=!1,c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g(e.data.totalHits)&&(a.hidden=!1),y(e.data),b=new u(".list a",{captionDelay:250,captionData:"alt",nav:!0}),setTimeout(R,1e3)}catch(e){console.log("error",e)}}function L(){v.innerHTML="Loading images, please wait..."}function d(){v.innerHTML=""}function E(){T.value=""}function R(){const i=document.querySelector(".card").getBoundingClientRect();window.scrollBy({top:i.height*2+24,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
