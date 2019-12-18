// https://freshman.tech/wikipedia-javascript/

// I can click a button to see a random Wikipedia entry.
// This is from HTML, the button brings you to a searcht hat wiki has tat will bring you to a random Wiki page. No js was needed to do this
// <button>
//     <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener" class="icon randomIcon">
//         <img src="https://image.ibb.co/fR5OX5/random.png" alt="Shuffle Icon">
//     </a>
// </button>

// I can search for Wikipedia articles in a search box and view the resulting Wikipedia entries.
// Grab the search query when the user submits the form.

//function to catch fetch errors: 
function handleErrors(response) {
<<<<<<< HEAD
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  
  let form = document.getElementById("searchForm")
  form.addEventListener("submit", handleSubmit)
  
  function handleSubmit(e) {
      e.preventDefault()
      let input = document.getElementById('searchForm-input').value;
      let searchQuery = input.trim();
      fetchResults(searchQuery)
  }
  
  // Send this query to Wikipedia.
  
  // let results = ''
  function fetchResults(searchQuery) {
      let endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
      
      fetch(endpoint)
          .then(handleErrors)
          .then(res => res.json())
          .then(data => {
             results = data.query.search;
             displayResults(results)
          })
      .catch((error) => console.log(`An error has occured: ${error}`))
  
  }
  // Display the results on the page.
  function displayResults(results) {
      const searchResults = document.querySelector('.searchResults');
      searchResults.innerHTML = '';
      results.map(result => {
        const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
        searchResults.insertAdjacentHTML('beforeend',
          `<div class="resultItem">
            <h3 class="resultItem-title">
              <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
            </h3>
            <span class="resultItem-snippet">${result.snippet}</span><br>
            <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
          </div>`
        );
      });
  }
=======
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

let form = document.getElementById("searchForm")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let input = document.getElementById('searchForm-input').value;
    let searchQuery = input.trim();
    fetchResults(searchQuery)
}

// Send this query to Wikipedia.

// let results = ''
function fetchResults(searchQuery) {
    let endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    
    fetch(endpoint)
        .then(handleErrors)
        .then(res => res.json())
        .then(data => {
           results = data.query.search;
           displayResults(results)
        })
    .catch((error) => console.log(`An error has occured: ${error}`))

}
// Display the results on the page.
function displayResults(results) {
    const searchResults = document.querySelector('.searchResults');
    searchResults.innerHTML = '';
    results.map(result => {
      const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
      searchResults.insertAdjacentHTML('beforeend',
        `<div class="resultItem">
          <h3 class="resultItem-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <span class="resultItem-snippet">${result.snippet}</span><br>
          <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
        </div>`
      );
    });
}
>>>>>>> 947a8e913a55c8b8461a9c30e6bf4255c80758fe
