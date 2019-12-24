
//save Bookmark
function saveBookmark(e) {
    //prevent form from submitting
    e.preventDefault();
    
    //get form values
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;

    const bookmark = {
        name: siteName,
        url: siteUrl
    }

    

    // //local storage test
    // localStorage.setItem('test', 'Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');

    // console.log(localStorage.getItem('test'));

    //test if bookmarks is null, them set to local storage
    if(localStorage.getItem('bookmarks') === null) {
        //init array
        const bookmarks = [];
        bookmarks.push(bookmark);

        //set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        //get bookmarks from localStorage
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        //add current bookmark to array
        bookmarks.push(bookmark);

        //re-set back to localstorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        }
    
}

//add event listener to form
document.getElementById('myForm').addEventListener('submit', saveBookmark);


//fetch bookmarks
function fetchBookmarks() {

    //get bookmarks from localstorage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    console.log(bookmarks)

    //get output id
    const bookmarksResults = document.getElementById('bookmarksResults');

    //build output
    bookmarksResults.innerHTML = "";

    //loop through bookmarks array
    bookmarks.map( item => {

        //add to dom
        bookmarksResults.innerHTML += `
        <div class="border border-secondary mb-3 p-3" >
        
            <h5>${item.name}
                <a class="btn btn-secondary target="_blank" href=${item.url}>Visit</a>
                <a class="btn btn-danger text-white" id="delete" name=${item.name} >Delete</a>
            </h5>
            

        </div>
        `;
    })

}


//add delete functionality


//grab list div
const bookmarksResultsDiv = document.getElementById('bookmarksResults');



//add delete bookmark on dom function
function deleteBookmark(e) {

    //check if delete button was clicked
    if(e.target.id === 'delete') {
        deleteBookmarkOnLocalStorage(e)
        e.target.parentNode.parentNode.remove();
        
    }


}


//delete bookmark in local storage function
function deleteBookmarkOnLocalStorage(e) {
    //get array from local storage
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //filter through array and update array
    const updatedBookmarks = bookmarks.filter( item => {
        return e.target.name !== item.name
    })

    //set back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks)); 
}



//add event listener
bookmarksResultsDiv.addEventListener('click', deleteBookmark)

