// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak

let alertBox = document.getElementById("alertBox")
let buttonEl = document.getElementById("btn_search")
let titleSearchEl = document.getElementById("query_title")
let authorSearchEl = document.getElementById("query_author")
let resultsEl = document.getElementById("results")
buttonEl.addEventListener("click", getBook)

//on load, alert is hidden
window.addEventListener("load", function() {
    alertBox.style.visibility = "hidden"
})

//function to handle errors with fetch
function handleErrors(response){
    if (!response.ok){
        throw Error(response.statusText);
    }
    return response;
}
var alertClassList = '';
var removeAlertType = ''

//function to get search, when submit button is pressed
function getBook(e) {
    e.preventDefault()
 
  //search based on values in search boxes
    let titleSearch = titleSearchEl.value.trim();
    let authorSearch = authorSearchEl.value.trim();

    if(titleSearch == "" && authorSearch == ""){
        alertBox.style.visibility = "visible";
        alertBox.classList.add("alert-danger");
        alertBox.innerHTML = "Please fill in at least one of the search boxes."
        removeAlertType = "alert-danger"

    }else if (titleSearch == ""){
        alertBox.style.visibility = "visible"
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Results for ${authorSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        removeAlertType = "alert-primary"
    }else if (authorSearch == ""){
        alertBox.style.visibility = "visible"
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Results for ${titleSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        removeAlertType = "alert-primary"
    }else{
        alertBox.style.visibility = "visible";
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Results for ${authorSearch} by ${titleSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${titleSearch}+inauthor:${authorSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        removeAlertType = "alert-primary"
    }
  let output = '';
  //Fetch based on search     
   fetch(query_url)
   .then(handleErrors)
   .then(res => res.json())
   .then(data => {
    results = data.items;
    results.map(result => {
      // console.log(result.volumeInfo)
      book = result.volumeInfo
      output += `
            <div class="card mx-auto mb-4" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                <img src="${book.imageLinks.thumbnail}" class="card-img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${book.authors}</h6>
                    <p class="card-text">${book.description}</p>
                    // <a href="${book.infoLink}" class="btn btn-primary" target = "_blank>Find book here</a>
                    </div>
                  </div>
                </div>
            </div>
                    `;
      
      
    })
    console.log(output)
    resultsEl.innerHTML = output;
   })

}

//function to remove alert from search when user is typing and also, remove alert type
titleSearchEl.addEventListener("keyup", removeAlert)
authorSearchEl.addEventListener("keyup", removeAlert)
function removeAlert() {
  if (!removeAlertType){
    console.log("No current alert present")
  }else{
    alertBox.style.visibility = "hidden"
    alertBox.classList.remove(removeAlertType)
  } 
}
