// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak

let alertBox = document.getElementById("alertBox")
let displaySearch = document.getElementById("displaySearch")
let buttonEl = document.getElementById("btn_search")
buttonEl.addEventListener("click", getBook)

window.addEventListener("load", function() {
    alertBox.style.visibility = "hidden"
    displaySearch.style.visibility = "hidden"
})

function handleErrors(response){
    if (!response.ok){
        throw Error(response.statusText);
    }
    return response;
}
function getBook(e) {
    e.preventDefault()
    let title_search = document.getElementById("query_title").value.trim();
    let author_search = document.getElementById("query_author").value.trim();

    if(title_search == "" && author_search == ""){
        alertBox.style.visibility = "visible";
    }else if (title_search == ""){
        alertBox.style.visibility = "hidden"
        displaySearch.style.visibility = "visible";
        query_url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author_search}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        displaySearch.innerHTML = `Searching for ${author_search}...`
        
    }else if (author_search == ""){
        alertBox.style.display = "hidden";
        displaySearch.style.visibility = "visible";
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${title_search}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        displaySearch.innerHTML = `Searching for ${title_search}...`
    }else{
        alertBox.style.display = "hidden";
        displaySearch.style.visibility = "visible";
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${title_search}+inauthor:${author_search}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        displaySearch.innerHTML = `Searching for ${title_search} by ${author_search}...`


    }

    
   fetch(query_url)
   .then(handleErrors)
   .then(res => res.json())
   .then(data => {
    // console.log(data.items[0].volumeInfo)
    results = data.items;
    results.map(result => {
        //This is where you would call on the class functoin to create the book object -Sim doesn't seem to use class though so see if you can just create the object and push to a list 
    })
   })

}