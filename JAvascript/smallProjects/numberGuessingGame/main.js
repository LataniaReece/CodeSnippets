// random number between 1 and 100. 10 turns to guess. Tell you if you got it right, too high or too low. 
//guess and submit 

let guessEl = document.getElementById("guess");
let submitEl = document.getElementById("submit");
let counterNumEl = document.getElementById("counter_number");
let resultsEl = document.getElementById("results")
submitEl.addEventListener("click", getGuess);

//Setting the random number between 1 and 100
let random_number = Math.floor(Math.random() *100) + 1;
console.log(typeof random_number);
console.log(random_number)


counter = 10
let guess_array = [];
console.log(guess_array)
//Function when the person submits something
function getGuess(e){
    e.preventDefault()   
 
    //capture the guess value
    let guess_value = Number(guessEl.value);
    

    //Check if guess value equals the random number
    let output = ""; 
    let isCountChange = "";
    if(guess_value == "" || isNaN(guess_value)){
        output += `<div class = "mx-auto" style="width: 400px;">
        <div class = "alert alert-warning">PLEASE ENTER A NUMBER</div>
        </div>
        `;
        isCountChange = false;
    }else if(guess_array.includes(guess_value)){
        console.log(guess_array)
        output += `<div class = "mx-auto" style="width: 400px;">
        <div class = "alert alert-warning">YOU GUESSED ${guess_value} ALREADY, PLEASE TRY ANOTHER NUMBER</div>
        </div>
        `;
        isCountChange = false;
    }else if(random_number == guess_value){
        output +=  `
                    <div class = "mx-auto" style="width: 400px;">
                        <div class = "alert alert-success">
                            <h3>Results: YOU WIN! THE NUMBER WAS ${guess_value}</h3>
                        </div> 
                    </div> 
                    `; 
        isCountChange = true;
    }else if (random_number < guess_value){
        output +=  `
        <div class = "mx-auto" style="width: 400px;">
            <div class = "alert alert-info">
                <h3>Results: WRONG, ${guess_value} IS TOO HIGH!</h3>
            </div>  
        </div>
        `; 
        isCountChange = true;
    }else {
        output +=  `
        <div class = "mx-auto" style="width: 400px;">
            <div class = "alert alert-info">
                <h3>Results: WRONG, ${guess_value} IS TOO LOW!</h3>
            </div>  
        </div>
        `; 
        isCountChange = true;
    }
    resultsEl.innerHTML = output;
    //Should also add something if ti isn't a number,and if thye weren;t in the range that you suggested. 
    //Counter
    if(!isCountChange){
        return;
    }else{
        current_count = counterNumEl.innerHTML;
        counterNumEl.innerHTML = current_count - 1
    }
   
    
    //If they hit the submit button when it's 1 they have no more tries left
    if(current_count == 1){
        console.log("You lost")
    }
    guess_array.push(guess_value)
    console.log(guess_array)

    
}


//Figure out a way to have a last guess, put that into a variable and then have the new guess compare to the last guess and if it is the same then it says, you guessed that number already. Try again. I can make an array that captures all the guesses?