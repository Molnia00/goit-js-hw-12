import axios from "axios";





const KeyMine = '47125427-ad9e927b7d4f8d8b2ea4266bf';

let currentQuery; 
let currentPage;




//

export async function loadPhoto(query) {
    console.log('queryUser', query);
     currentQuery = query;
     currentPage = 1;
   return getPhotos()
}

function getPhotos() {
     const promPixbay = axios.get('https://pixabay.com/api/',
        {
            params:
            {
        key: KeyMine,
        q: currentQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: 15,
    }});
    return promPixbay
}

export async function loadMore(){
    currentPage++;
    return getPhotos();
}


//if (!response.ok) {
//     throw new Error(response.statusText);
 //  }
  // return response.json()




































































































