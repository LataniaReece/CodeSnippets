// Game Choice 
let gameChoice = ""
if (localStorage.getItem("gameChoice") === null) {
    gameChoice = "texas holdem"
    document.getElementById("game-choice").value = "texas holdem";
}else {
    gameChoice = localStorage.getItem("gameChoice")
    document.getElementById("game-choice").value = gameChoice;
}

console.log(gameChoice)
let changeGameChoice = function(e){
    localStorage.setItem("gameChoice", e.target.value);
    location.reload();
}
document.getElementById("game-choice").addEventListener("change", changeGameChoice)

// Players
let playersEl = document.getElementById("poker-players")
let players = [

     {
        playerNum: 1,
        name: "Fox", 
        amountLeft: 3.46,
        cards:{
            displayType: "show",
            card1:{
                name: "card-1",
                suit: "&#9829;",
                value: 1
            },
            card2:{
                name: "card-2",
                suit: "&#9829;",
                value: 2
            },
            card3:{
                name: "card-3",
                suit: "&#9829;",
                value: 1
            },
            card4:{
                name: "card-4",
                suit: "&#9829;",
                value: 2
            },
        },
        dealer: "D"
    },

{
    playerNum: 2,
        name: "Monkey", 
        amountLeft: 11.18,
        cards:"",
        dealer: "D"
    
    },
    {
        playerNum: 3,
        name: "Rowdy-Robert", 
        amountLeft: 10.00,
        cards:{
            displayType: "hide",
            card1:{                
                name: "card-1",
                suit: "&#9829;",
                value: 1
            },
            card2:{
                name: "card-2",
                suit: "&#9829;",
                value: 2
            },
            card3:{
                name: "card-3",
                suit: "&#9829;",
                value: 1
            },
            card4:{
                name: "card-4",
                suit: "&#9829;",
                value: 2
            },
        },
        dealer: "D"
    },
//      {
//         playerNum: 4,
//         name: "Ellie-Bellie", 
//         amountLeft: 6.00,
//         cards:{
//             card1:{
//                 name: "card-1",
//                 suit: "&#9829;",
//                 value: 1
//             },
//             card2:{
//                 name: "card-2",
//                 suit: "&#9829;",
//                 value: 2
//             },
//         },
//         dealer: "D"
    
//     },
//      {
//         playerNum: 5,
//         name: "fly_birdie", 
//         amountLeft: 15.00,
//         cards:"",
//         dealer: "D"
    
//     },
//     {
//         playerNum: 7,
//         name: "Marie-Lou", 
//         amountLeft: 1.24,
//         cards: "",
//         dealer: "D"
    
//     },
//      {
//          playerNum: 8,
//         name: "Albert459", 
//         amountLeft: 5.00,
//         cards:"",
//         dealer: "D"
    
//     },
//     {
//         playerNum: 9,
//         name: "Vincent202", 
//         amountLeft: 2.88,
//         cards:{
//             card1:{
//                 name: "card-1",
//                 suit: "&#9829;",
//                 value: 1
//             },
//             card2:{
//                 name: "card-2",
//                 suit: "&#9829;",
//                 value: 2
//             },
//         },
//         dealer: "D"
    
//     },
]

//Displaying player cards function 
let displayCards = function(player, query){

    if(gameChoice == "texas holdem"){
        if(query == null){
            // console.log("null query")
          return ""
        }else if(query == ""){
            // console.log("blank query")
          return  `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
          <li id="player-${player.playerNum}-card-1" class="card">
          </li>
          <li id="player-${player.playerNum}-card-2" class="card">
          </li>
        </ul>`        
        } else {
            // console.log("full query")
            let thisPlayerEl = document.getElementById(`player-${player.playerNum}-container`)
            // console.log(thisPlayerEl)
            document.querySelector(".player-container").style.gridTemplateAreas = 
            `
            'cards cards dealer'
            'info info info'
            'chips chips chips chips chips
            `
            let output = `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
            <li id="player-${player.playerNum}-card-1" class="card">
                <p id="board-card-2-value">${player.cards.card1.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card1.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card1.suit}</span>
            </li>
            <li id="player-${player.playerNum}-card-2" class="card">
                <p id="board-card-2-value">${player.cards.card2.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card2.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card2.suit}</span>
            </li>
            </ul>`  
            thisPlayerEl.insertAdjacentHTML("afterbegin", output);

            document.getElementById(`player-${player.playerNum}-card-1`).style.backgroundColor = "rgb(176, 175, 177)";
            document.getElementById(`player-${player.playerNum}-card-2`).style.backgroundColor = "rgb(176, 175, 177)";
        }
    }else {
        if(query == null){
            // console.log("null query")
          return ""
        }else if(query == ""){
            // console.log("blank query")
          return  `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
          <li id="player-${player.playerNum}-card-1" class="card">
          </li>
          <li id="player-${player.playerNum}-card-2" class="card">
          </li>
        </ul>`        
        } else {
            // console.log("full query")
            let thisPlayerEl = document.getElementById(`player-${player.playerNum}-container`)
            // console.log(thisPlayerEl)
            document.querySelector(".player-container").style.gridTemplateAreas = 
            `
            'cards cards dealer'
            'info info info'
            'chips chips chips chips chips
            `
            // console.log(querySelecto)
            let output = `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
            <li id="player-${player.playerNum}-card-1" class="card">
                <p id="board-card-2-value">${player.cards.card1.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card1.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card1.suit}</span>
            </li>
            <li id="player-${player.playerNum}-card-2" class="card">
                <p id="board-card-2-value">${player.cards.card2.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card2.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card2.suit}</span>
            </li>
            <li id="player-${player.playerNum}-card-3" class="card">
                <p id="board-card-2-value">${player.cards.card3.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card3.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card3.suit}</span>
            </li>
            <li id="player-${player.playerNum}-card-4" class="card">
                <p id="board-card-2-value">${player.cards.card4.value}</p>
                <span id="board-card-2-suit_1">${player.cards.card4.suit}</span> 
                <span id="board-card-2-suit_2">${player.cards.card4.suit}</span>
            </li>
            </ul>`  
            thisPlayerEl.insertAdjacentHTML("afterbegin", output);

            if(player.cards.displayType == "hide"){
                document.getElementById(`player-${player.playerNum}-card-1`).style.backgroundColor = "rgb(176, 175, 177)";
                document.getElementById(`player-${player.playerNum}-card-1`).innerText = ""
                document.getElementById(`player-${player.playerNum}-card-2`).style.backgroundColor = "rgb(176, 175, 177)";
                document.getElementById(`player-${player.playerNum}-card-2`).innerText = ""
                document.getElementById(`player-${player.playerNum}-card-3`).style.backgroundColor = "rgb(176, 175, 177)";
                document.getElementById(`player-${player.playerNum}-card-3`).innerText = ""
                document.getElementById(`player-${player.playerNum}-card-4`).style.backgroundColor = "rgb(176, 175, 177)";
                document.getElementById(`player-${player.playerNum}-card-4`).innerText = ""

        }

    }

    
        
    }

   
  }

  
//Mapping the player into the html, uses the display function
players.map(player => {

    //Create the player container first
    let output = `
    <!--player template repeat container--> 
            <li id="player-${player.playerNum}-container" class = "player-container">
                <div class = "dealer-button chips">
                    <p>${player.dealer}</p>
                </div>
                <!--${player.name} Dollar Amount-->
                <div id="player-${player.playerNum}-dollar-amount" class = "player-info">
                    <h3>${player.name}</h3>
                    <p>$${player.amountLeft}</p>
                </div>
                <!--${player.name} Chip Container-->
                <ul id="player-${player.playerNum}-chip-container" class="player-chip-container">
                    <li class="big-blind">
                        <div class="chips"></div>
                        <div class="chips"></div>
                        <div class="chips"></div>
                        <div class="chips"></div>
                    </li>     
                    <li class="small-blind">
                        <div class="chips"></div>
                        <div class="chips"></div>
                    </li>
                </ul>
            </li>`;     

    playersEl.insertAdjacentHTML("beforeend", output);
    // Append the cards to the container
    displayCards(player, player.cards)
})


