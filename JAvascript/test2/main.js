let demoEl = document.getElementById("demo")

players = [
    {
        name: "Tania",
        age: 21,
        cards: {
            card1: {
                suit: "diam",
                value: 2
            }
        }
    },
    {
        name: "Aiden",
        age: 20,
        cards: {
            card1: {
                suit: "",
                value: 2
            }
        }
    },
    {
        name: "Jess",
        age: 21,
        cards: {
            card1: {
                suit: "hearts",
                value: 2
            }
        }
    },
    {
        name: "Tom",
        age: 21,
        cards: {
            card1: {
                suit: null,
                value: null
            }
        }
    },

]

let playerContainer = "";
let displayCards = function(query){
  if(query != null){
    return `<p>${query}</p>`
  }else if(query == ""){
    return `<p></p>`       
  } else {
    return ""
  }
}

players.map(player => {
    playerContainer +=`
    <li>
        <p>${player.name}</p>
        <p>${player.age}</p>
        ${displayCards(player.cards.card1.suit)}
        ${displayCards(player.cards.card1.value)}
    </li>
`})

demoEl.innerHTML = playerContainer

//It shows null in the output, figure out if there is a way to just remove that part of the element?

