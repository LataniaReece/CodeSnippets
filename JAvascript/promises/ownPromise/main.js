let btn = document.getElementById("generateWordBtn")
btn.addEventListener("click", getWord)

let randomWord = '';
//convert this function to a proise object and send to sim 
function getWord() {
  fetch("wordsapi_sample.json")
.then(res => res.json())
.then(data => {
  let wordsNumbers = Object.keys(data)
  let randomWords = wordsNumbers.filter(item => isNaN(item))
  randomWord = randomWords[Math.floor(Math.random()*randomWords.length)]
  let endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${randomWord}`;
  return fetch(endpoint)
})
.then(res => res.json())
.then(data => {
  results = data.query.search;
  displayResults(results)
})
.catch(err => console.log(err))
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
