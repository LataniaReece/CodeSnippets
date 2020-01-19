let playersEl = document.getElementById("poker-players")
let players = [

     {
        playerNum: 1,
        name: "Fox", 
        amountLeft: 3.46,
        cards:{
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
        },
        dealer: "D"
    },

{
    playerNum: 2,
        name: "Monkey", 
        amountLeft: 11.18,
        cards:{
            card1:{
                name: "card-1",
                suit: "&diams;",
                value: 1
            },
            card2:{
                name: "card-2",
                suit: "&#9829;",
                value: 3
            },
        },
        dealer: "D"
    
    },
    {
        playerNum: 3,
        name: "Rowdy-Robert", 
        amountLeft: 10.00,
        cards:"",
        dealer: "D"
    
    },
     {
        playerNum: 4,
        name: "Ellie-Bellie", 
        amountLeft: 6.00,
        cards:{
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
        },
        dealer: "D"
    
    },
     {
        playerNum: 5,
        name: "fly_birdie", 
        amountLeft: 15.00,
        cards:"",
        dealer: "D"
    
    },
    {
        playerNum: 7,
        name: "Marie-Lou", 
        amountLeft: 1.24,
        cards: "",
        dealer: "D"
    
    },
     {
         playerNum: 8,
        name: "Albert459", 
        amountLeft: 5.00,
        cards:"",
        dealer: "D"
    
    },
    {
        playerNum: 9,
        name: "Vincent202", 
        amountLeft: 2.88,
        cards:{
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
        },
        dealer: "D"
    
    },
]

// players.map(player => console.log(player.cards.card1))


let playerContainer = "";
players.map(player => {

    let displayCards = function(query){
        if(query == null){
            console.log("null query")
          return ""
        }else if(query == ""){
            console.log("blank query")
          return  `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
          <li id="player-${player.playerNum}-card-1" class="card">
          </li>
          <li id="player-${player.playerNum}-card-2" class="card">
          </li>
        </ul>`        
        } else {
            console.log("full query")
          return `<ul id="player-${player.playerNum}-cards-container" class="player-cards-container">
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
        }
      }


    playerContainer += `
    <!--player template repeat container-->
              <li id="player-${player.playerNum}-container" label="repeat-region">
                <!--${player.name} Dollar Amount-->
                <ul id="player-${player.playerNum}-dollar-amount">
                  <h3>${player.name}</h3>
                  <p>$${player.amountLeft}</p>
                </ul>
                <!--${player.name} Chip Container-->
                <ul id="player-${player.playerNum}-chip-container" class="player-chip-container">
                             
                
                    <li class="villian-big-blind">
                        <div class="chips"></div>
                        <div class="chips"></div>
                        <div class="chips"></div>
                        <div class="chips"></div>
                    </li>     
                    <li class="villian-small-blind">
                        <div class="chips"></div>
                        <div class="chips"></div>
                    </li>

                    <li class="villian-dealer-button">
                        <div class="chips">
                        <p>${player.dealer}</p>
                        </div>
                    </li>   
                
                </ul>
                ${displayCards(player.cards)}
                ${displayCards(player.cards)}
            </li>`            
})



console.log(playerContainer)
playersEl.innerHTML += playerContainer

// let playerContainer =`
// <!--player template repeat container->
//           <li id="player-7-marie-lou-container" label="repeat-region">
//             <!--Marie Lou Dollar Amount-->
//             <ul id="marie-lou-dollar-amount">
//               <h3>Marie-Lou</h3>
//               <p>$1.24</p>
//             </ul>
//             <!--Marie Lou Chip Container-->
//             <ul id="player-7-marie-lou-chip-container" class="player-chip-container">
//               <li class="villian-dealer-button">
//                 <div class="chips">
//                   <p>D</p>
//                 </div>
//               </li>
//               <li class="villian-big-blind">
//                 <div class="chips"></div>
//                 <div class="chips"></div>
//                 <div class="chips"></div>
//                 <div class="chips"></div>li>
//               <li class="villian-small-blind">
//                 <div class="chips"></div>
//                 <div class="chips"></div>
//               </li>
//             </ul>
//             <!--Marie Lou Cards Container-->
//             <ul id="player-7-marie-lou-cards-container" class="player-cards-container">
//               <li id="player-7-marie-lou-card-1" class="card">
//               </li>
//               <li id="player-7-marie-lou-card-2" class="card">
//                 <li id="player-7-marie-lou-card-1" class="card">
//                 </li>
//                 <li id="player-7-marie-lou-card-2" class="card">
//                 </li>
//             </ul>
//             </li>`