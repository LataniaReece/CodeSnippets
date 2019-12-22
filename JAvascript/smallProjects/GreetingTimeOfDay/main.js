let changeNameEl = document.getElementById("changeName")
let getNameEl = document.getElementById("getName")
let dateResultEl = document.getElementById("dateResult")
window.onload = dateDisplay;

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function dateDisplay(){
    let body = document.getElementsByTagName("body")[0]

    //Get Current Time and Date 
    today = new Date()
    let current_time = today.toLocaleTimeString('en-US')
    let current_date = `${days[today.getDay()]}, ${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`
    militaryHour = today.getHours()

    //Change based on time of day
    if(militaryHour < 12){
       body.style.background = "url(https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed"
       dateGreeting = `
            <p class = "greeting">Good Morning</p>
            <p class = "time">${current_time}</p>
            <p class = "date">${current_date}</p>
        `
    }else if(militaryHour >= 12 && militaryHour < 16){
        console.log("Good Afternoon")
        body.style.background = "url(https://images.pexels.com/photos/666839/pexels-photo-666839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed"
        dateGreeting = `
            <p class = "greeting">Good Afternoon</p>
            <p class = "time">${current_time}</p>
            <p class = "date">${current_date}</p>
        `
    }else if(militaryHour >= 16 && militaryHour < 22){
        body.style.background = "url(https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed"
        dateGreeting = `
            <p class = "greeting">Good Evening</p>
            <p class = "time">${current_time}</p>
            <p class = "date">${current_date}</p>
        `
    }else{
        body.style.background = "url(https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center fixed"
        dateGreeting = `
            <p class = "greeting" >Good Night</p>
            <p class = "time">${current_time}</p>
            <p class = "date">${current_date}</p>
        `
    };
    dateResultEl.innerHTML = dateGreeting
}