//Generate random word, then let the user decide if they want to search that or not. If they do then you search. Add another button 


// javascript
let btn = document.getElementById("generateWordBtn");

btn.addEventListener("click", getWord)

let randomWord = '';
let url = 'sample.json';
let get = function(url) {
    return new Promise(function(resolve, reject){
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText))
            }
        };
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

function getWord(){
    get('sample.json')
    .then(function(response) {
        data = JSON.parse(response)[0]
        words = Object.keys(data)
        randomWord = words[Math.floor(Math.random()*words.length)]
        let endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${randomWord}`;
    return(endpoint)
    })
    .then(function(endpoint){
        get(endpoint)
        .then(function(response){
            wikiData = JSON.parse(response)
            results = wikiData.query.search
            displayResults(results)            
        })
    })
    .catch(err => {
        console.log("Error", err)
    })

}


let displayResults = function(results) {

  //Displaying the word 
  const wordEl = document.createElement("p");
  wordEl.id = "randomWord"
  wordEl.innerHTML = randomWord
  btn.insertAdjacentHTML("afterend", wordEl.outerHTML)

  //Displaying the results: 
   let searchResults = document.createElement('div');
   searchResults.innerHTML += results.map(result => {
     const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
       return `<div class="resultItem">
         <h3 class="resultItem-title">
           <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
         </h3>
         <span class="resultItem-snippet">${result.snippet}</span><br>
         <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
       </div>`
   }).join("");

   document.body.appendChild(searchResults)
}
