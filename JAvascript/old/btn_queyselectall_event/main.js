var buttons = document.querySelectorAll('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

buttons.forEach(function (button) {
    button.onclick = bgChange;
});

//Another option for looping throu: 

// var buttons = document.querySelectorAll('button');

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].onclick = bgChange;
// }