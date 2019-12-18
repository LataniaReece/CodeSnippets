// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak

let alertBox = document.getElementById("alertBox")
let buttonEl = document.getElementById("btn_search")
let titleSearchEl = document.getElementById("query_title")
let authorSearchEl = document.getElementById("query_author")
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
        // alertClassList = [alertBox.classList].join()
        removeAlertType = "alert-danger"
        // console.log(`Old classlist = ${alertBox.classList}`)

    }else if (titleSearch == ""){
        alertBox.style.visibility = "visible"
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Searching for ${authorSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${authorSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        // alertClassList = [alertBox.classList].join()
        removeAlertType = "alert-primary"
        // console.log(`Old classlist = ${alertBox.classList}`)
    }else if (authorSearch == ""){
        alertBox.style.visibility = "visible"
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Searching for ${titleSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        // alertClassList = [alertBox.classList].join()
        removeAlertType = "alert-primary"
    }else{
        alertBox.style.visibility = "visible";
        alertBox.classList.add("alert-primary");
        alertBox.innerHTML = `Searching for ${authorSearch} by ${titleSearch} ...`
        query_url = `https://www.googleapis.com/books/v1/volumes?q=${titleSearch}+inauthor:${authorSearch}&key=AIzaSyDGe-7MUReZbEGjPtu1Jp_uO_vB-R5Mzak`
        // alertClassList = [alertBox.classList].join()
        removeAlertType = "alert-primary"
    }
 
  //Fetch based on search     
   fetch(query_url)
   .then(handleErrors)
   .then(res => res.json())
   .then(data => {
    // console.log(data.items[0].volumeInfo)
    results = data.items;
    results.map(result => {
      console.log(result)
        //This is where you would call on the class functoin to create the book object -Sim doesn't seem to use class though so see if you can just create the object and push to a list 
    })
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
    // console.log(removeAlertType)
    alertBox.classList.remove(removeAlertType)
    // console.log(`New classlist = ${alertBox.classList}`)
  } 
  
  // const alertClass = [alertBox.classList].join()
  // console.log(`before function class: ${alertClass}`)
  // alertType = alertClass.match(/(?=alert-)([a-zA-Z'-]+)/g)
  // console.log(`Current alert type: ${alertType}`)
  // if (alertType == ""){
  //   console.log("No Alert Type")
  // }else{
  //   alertBox.classList.remove(alertType[0])
  //   console.log(`after function class: ${alertBox.classList}`)
  // }
}
