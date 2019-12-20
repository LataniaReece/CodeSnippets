// random number between 1 and 100. 10 turns to guess. Tell you if you got it right, too high or too low. 
//guess and submit 

let guessEl = document.getElementById("guess");
let submitEl = document.getElementById("submit");
let counterNumEl = document.getElementById("counter_number");
let resultsEl = document.getElementById("results")
submitEl.addEventListener("click", getGuess);

//Setting the random number between 1 and 100
let random_number = Math.floor(Math.random() *100) + 1;
console.log(random_number);


counter = 10
//Function when the person submits something
function getGuess(e){
    e.preventDefault()   
 
    //capture the guess value
    let guess_value = guessEl.value;

    //Check if guess value equals the random number
    let output = "";    
    if(random_number == guess_value){
        output +=  `
                    <div class = "alert alert-primary">
                        <h3>Results: YOU WIN! THE NUMBER WAS ${guess_value}</h3>
                    </div>  
                    `; 
        resultsEl.innerHTML = output;
    }else if (random_number < guess_value){
        output +=  `
        <div class = "alert alert-primary">
            <h3>Results: WRONG, ${guess_value} IS TOO HIGH!</h3>
        </div>  
        `; 
        resultsEl.innerHTML = output;
    }else {
        output +=  `
        <div class = "alert alert-primary">
            <h3>Results: WRONG, ${guess_value} IS TOO LOW!</h3>
        </div>  
        `; 
        resultsEl.innerHTML = output;
    }

    //Should also add something if ti isn't a number,and if thye weren;t in the range that you suggested. 
    //Counter 
    current_count = counterNumEl.innerHTML;
    counterNumEl.innerHTML = current_count - 1
    
    //If they hit the submit button when it's 1 they have no more tries left
    if(current_count == 1){
        console.log("You lost")
    }
    
}