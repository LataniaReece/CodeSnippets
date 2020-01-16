myCards = [
    {"suit":"clubs","value":4},
    {"suit":"clubs","value":5},
    {"suit":"clubs","value":6},
{"suit":"diams","value":10},
{"suit":"diams","value":6}]




let suitCounts = {};
let playerContinue = false;

//Create a count of suits
myCards.reduce((acc, card) =>{
    return acc + `${card.suit},`
}, [])
.split(",")
.filter(t => {
    return t !== ""
})
.forEach(function(x) { suitCounts[x] = (suitCounts[x] || 0)+1; })

//Loop through counts and see which equal 3 or greater if
for(let [suit, suitCount] of Object.entries(suitCounts)){
    if (suitCount > 2){
        playerContinue = true;
        //check to see if player has that suit 
        if (myCards[0].suit == suit && myCards[1].suit == suit){
            console.log(`Continue. Player has a ${suitCount} ${suit} flush draw with both cards connecting with the board`)
        }else if (myCards[0].suit == suit || myCards[1].suit == suit){
            console.log(`Continue. Player has a ${suitCount} ${suit} flush draw with one card connecting with the board`)
        }
    }
}

//Tell player not to continue if no flush draw
if (playerContinue == false){
    console.log("No flush draw do not continue")
}