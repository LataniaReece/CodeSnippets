var endDate = new Date("Jan 18, 2020 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
        
      
        // console.log(("0"+hours).slice(-2), hours)
      
    
        document.getElementById("timer-days").innerHTML = `<span class = "number">${days}</span> <span class='label'>Day(s)</span>`;
      
      document.getElementById("timer-hours").innerHTML = `<span class = "number">${hours}</span> <span class='label'>Hour(s)</span>`;
      
      document.getElementById("timer-mins").innerHTML = `<span class = "number">${mins}</span> <span class='label'>Min(s)</span>`;
      
      document.getElementById("timer-secs").innerHTML = `<span class = "number">${secs}</span> <span class='label'>Sec(s)</span>`;
      
//         document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) +
//         "<span class='label'>HR(S)</span>";
    
//         document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) +
//         "<span class='label'>MIN(S)</span>";
    
//         document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) +
//         "<span class='label'>SEC(S)</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "The countdown is over!";
    
    }
    
}, 1000);
