
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";




import { loadPhoto , loadMore} from './js/pixabay-api'

import { renderPhoto, clearList } from './js/render-functions'

const btnMore = document.querySelector('.btnMore')
const inputSearch = document.querySelector('.inputSearch');
const btnSearch = document.querySelector('.btnSearch');
const loadingText = document.querySelector('.loading-text');


let lightbox;
btnMore.hidden = true;

btnSearch.addEventListener('click', getInfo);
btnMore.addEventListener('click' , clickForMore)

async function getInfo() {
    
    const searchStr = inputSearch.value;
    console.log(searchStr);
    clearInput();
    clearList();

    showLoad();
    try {
        const response = await loadPhoto(searchStr);
        
        hideLoad();
            
        if (response.data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return
        }
        btnMore.hidden = false;
        renderPhoto(response.data);
        lightbox= new SimpleLightbox('.list a', {
            captionDelay: 250,
            captionData: 'alt',
            nav: true,


        })
        setTimeout(scrollDown, 1000);
    }catch(error){
            console.log('error', error);
        }
}
 /////////////////////////////////////////////////////////////

async function  clickForMore() {

    showLoad();
    try {
        btnMore.hidden = true;
        const response = await loadMore();
        
        hideLoad();
            
        if (response.data.hits.length === 0) {
            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
            
            return
        }
        btnMore.hidden = false;
        renderPhoto(response.data);
        lightbox= new SimpleLightbox('.list a', {
            captionDelay: 250,
            captionData: 'alt',
            nav: true,


        })
        setTimeout(scrollDown, 1000)



        
    }catch(error){
            console.log('error', error);
        }
}

 /////////////////////////////////////////////////////////////


function showLoad() {
    loadingText.innerHTML = 'Loading images, please wait...';
}

function hideLoad() {
    loadingText.innerHTML = '';
}


function clearInput() {
    inputSearch.value = '';

}


function scrollDown() {
    const card = document.querySelector('.card');
    const rect = card.getBoundingClientRect();
    

    const interval = setInterval(() => {
  const scrollHeight = document.documentElement.scrollHeight;  
  const scrollTop = document.documentElement.scrollTop;  
  const clientHeight = document.documentElement.clientHeight;  

  if (scrollTop + clientHeight >= scrollHeight) {
      clearInterval(interval);
  } else {
      window.scrollBy({
          top: rect.height * 2,
          behavior: 'smooth'
      }); 
  }
}, 1000);
}













