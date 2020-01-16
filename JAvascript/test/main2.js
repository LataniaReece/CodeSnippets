myCards = [
    {"suit":"clubs","value":4},
    {"suit":"clubs","value":5},
    {"suit":"clubs","value":6},
{"suit":"diams","value":10},
{"suit":"diams","value":6}]


let returnGap = function(x,y){
    //this is where we need to find and use a switch case to set x or y and set the value there then do the 
    if(x == 'A'){ x = 14;}
    if(x == 'K'){ x = 13;}
    if(x == 'Q'){ x = 12;}
    if(x == 'J'){ x = 11;}
    if(x == 'T'){ x = 10;}
    if(y == 'A'){ x = 14;}
    if(y == 'K'){ x = 13;}
    if(y == 'Q'){ x = 12;}
    if(y == 'J'){ x = 11;}
    if(y == 'T'){ x = 10;}
    if(x > y){
            return x - y
            }else {
            return y - x
            }
    };

    //This is how you determine the gap of the cards :
// console.log(returnGap(myCards[0].value, myCards[3].value))

//Determine if you have an adequate gap between your own cards, 
// then check each card's connection with the board
//Then check the board's connection with each other?


// let checkforStraight = function(cards){
//     boardArray=[];
//     for(var i=0 ; i < 5; i++) { 
//            value=cards[i].value;
//            boardArray.push(value);
//            }
//     sortBoard=boardArray.sort((a, b) => b - a);
//     console.log(sortBoard)
// }

// test  = checkforStraight(myCards)
// console.log(test)

//I think theres a way to reduce this so you can get the return gap for each

function pairwise(list) {

    var pairs = new Array((list.length * (list.length - 1)) / 2),
        pos = 0;

    for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
            pairs[pos++] = [list[i], list[j]];
        }
    }
    return pairs;
}

//Get pairwise comparison
cardValues = myCards.map(card => card.value)
cardPairs = pairwise(cardValues)

//find gap between each pairwise comparison
cardPairs.map(cardPair => {
    console.log(returnGap(cardPair[0], cardPair[1]))
})


//OKay this works but you need to figure out a way to make sure that you are aware of which cards are speicifically causing which gap. not sure how to do this yet





// let straightDraw = function(cards){
    
//     //Gap between players cards :
//     let playerHoldingsGap = returnGap(cards[0].value, cards[1].value);
//     if(playerHoldingsGap < 4 ){
//         console.log(playerHoldingsGap)
//         console.log("Good gap")
//     }else {
//         console.log(playerHoldingsGap)
//         console.log("bad gap")

//     }

// };

// straightDraw(myCards)
