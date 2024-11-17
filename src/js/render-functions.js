const list = document.querySelector('.list');

export function renderPhoto(data) {
    list.insertAdjacentHTML('beforeend', createMarkup(data.hits));

}

export function clearList() {
    list.innerHTML = '';
}

 function createMarkup(arr) {
    return arr.map(({ previewURL, tags , likes , views, downloads, comments, largeImageURL}) => 
        `<li class = "card">
            <a href="${largeImageURL}"><img src = "${previewURL}" alt = "${tags}" width = "300px"></a>      
             <div class = "bottomLine">

                <div class = "col">
                    <div class = "name">Likes</div>
                    <div class = "value">${likes}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Views</div>
                    <div class = "value">${views}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Comments</div>
                    <div class = "value">${comments}</div>
                </div>

                 <div class = "col">
                    <div class = "name">Downloads</div>
                    <div class = "value">${downloads}</div>
                </div>

            </div>
        </li>`
    ).join('')
 }


 