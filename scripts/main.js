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

    console.log(bookmark);

    // //local storage test
    // localStorage.setItem('test', 'Hello World');
    // console.log(localStorage.getItem('test'));
    // localStorage.removeItem('test');

    // console.log(localStorage.getItem('test'));

    //test if bookmarks is null
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