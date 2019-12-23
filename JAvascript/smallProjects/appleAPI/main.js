var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = "https://itunes.apple.com/search?term=Doja+Cat"
fetch("http://www.omdbapi.com/?t=Matrix&apikey=ccc649c9")
.then(res => res.json())
.then(data => console.log(data))