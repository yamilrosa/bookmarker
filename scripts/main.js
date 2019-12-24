//list for for submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);


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
            <h5>${item.name}</h5>
        </div>
        `;
    })

}

