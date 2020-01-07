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
  console.log(endpoint)
  return fetch(endpoint)
})
.then(res => res.json())
.then(data => {
  results = data.query.search;
  displayResults(results)
})
.catch(err => console.log(err))
}

let functionCallCount = 0
let displayResults = function(results) {

  //if this is the first time that the function is ran 
  if(functionCallCount == 0){
    console.log(functionCallCount)
     //Displaying the word 
  let mainEl = document.getElementById("mainContent")
  const wordEl = document.createElement("p");
  wordEl.id = "randomWord"
  wordEl.innerHTML = randomWord
  btn.insertAdjacentHTML("afterEnd", wordEl.outerHTML)

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

  //  document.body.appendChild(searchResults)
  mainEl.insertAdjacentHTML("beforeEnd", searchResults.outerHTML)
  functionCallCount ++;

  }else if (functionCallCount > 0){
    console.log(functionCallCount)
     //IF this is the second time that the function is ran

  //Keep creating a new p element
  const wordEl = document.createElement("p");
  wordEl.id = "randomWord"
  wordEl.innerHTML = randomWord
  btn.insertAdjacentHTML("afterend", wordEl.outerHTML)

  //insert after the new p element that was created, should now be the first p element in the page? or just insert after word el?

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

 //  document.body.appendChild(searchResults)
 wordEl.insertAdjacentHTML("afterEnd", searchResults.outerHTML) //Figure out how to insert this where you want it to be

}

  }
  


  
