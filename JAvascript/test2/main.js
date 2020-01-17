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
                suit: "diam",
                value: 2
            }
        }
    },
    {
        name: "Jess",
        age: 21,
        cards: {
            card1: {
                suit: "diam",
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

players.map(player => {
    playerContainer +=`
    <li>
        <p>${player.name}</p>
        <p>${player.age}</p>
        <p>${player.cards.card1.suit}</p>
        <p>${displayEl(player.cards.card1.value)}</p>
    </li>

`})

demoEl.innerHTML = playerContainer

//It shows null in the output, figure out if there is a way to just remove that part of the element?

//Maybe there's some way to make it have a display:none if the value is null?
function displayEl(query){
    if(query == null){
        this.style.display = "none";
    }
}
