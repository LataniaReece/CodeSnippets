const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let searchName = input.value.toLowerCase(); //don't have to apply an event listener to the input, just call it in the buton functon 
    input.value = ''; // resets the search bar to have nothing in it 
    input.focus(); //After clearing the search bar this focuses back on the search bar. IF this was "blur" it would unselect the search bar
    for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        console.log(splitContact) // Figure out what his syas 
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else {
            para.textContent = 'Contact not found.';
        }
    }
});


