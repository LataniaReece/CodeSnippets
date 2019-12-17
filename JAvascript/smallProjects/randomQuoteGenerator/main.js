let quoteButton = document.getElementById("getQuotes").addEventListener("click", getQuotes);
let quoteEl = document.getElementById("quotes");

let output = '';
function getQuotes () {
    fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    .then(res => res.json())
    .then(data => {
        output += `
            <ul class="list-group mb-4">
                <li class="list-group-item">${data.message}</li>
            </ul>
        `
        quoteEl.innerHTML = output
        // })
    })
}