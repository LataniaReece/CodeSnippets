const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ', ';
}

para.textContent = info;

//remember that javascript is zero based, thsi reads through the entire list because it starts at 0 (the first cat) and then it continues to 4 (the last cat)