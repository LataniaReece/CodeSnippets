//Determine the final date
let endDate = new Date("Jan 18, 2020 12:00:00").getTime();


let timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    //If there is time left over
    if (t >= 0) {
    
        //t is currently in UTC format, have to transform it to days, hours, mins and secs
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);      
    
    
        // insert the result into the document
      document.getElementById("timer-days").innerHTML = `<span class = "number">${days}</span> <span class='label'>Day(s)</span>`;
      document.getElementById("timer-hours").innerHTML = `<span class = "number">${hours}</span> <span class='label'>Hour(s)</span>`;
      document.getElementById("timer-mins").innerHTML = `<span class = "number">${mins}</span> <span class='label'>Min(s)</span>`;
      document.getElementById("timer-secs").innerHTML = `<span class = "number">${secs}</span> <span class='label'>Sec(s)</span>`;

    
      //If there is no time left over
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);
//This function will run every second
