
//Coupling Event Listeners - Event Listener calls a function that contains an event listener

document.getElementById('button1').addEventListener("click", displayMessage)

    // This is another way to call the onclick function 
        // var btn = document.querySelector('button')
        // btn.onclick = displayMessage;

     // This won't work with the parenthesis because it will call the function without the event happening. 
        // btn.onclick = displayMessage();  

function displayMessage() {
    var html = document.querySelector('html');

    var panel = document.createElement('div');
    panel.setAttribute('class', 'msgBox');
    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = 'This is a message box';
    panel.appendChild(msg);

    var closeBtn = document.createElement('button');
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
        panel.parentNode.removeChild(panel);
    }
}

//Running two functions with two eventlisteners,
//Without the addeventlistener, this will not work, the second function will override the first without addeventlistener

var btn = document.getElementById('button2');

function functionA() {
    var html = document.querySelector('html');
    var panel = document.createElement('div');

    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = 'Function 1';
    panel.appendChild(msg);
}

function functionB() {
    var html = document.querySelector('html');
    var panel = document.createElement('div');

    html.appendChild(panel);

    var msg = document.createElement('p');
    msg.textContent = 'Function 2';
    panel.appendChild(msg);
}


btn.addEventListener("click", functionA);
btn.addEventListener("click", functionB);

// Note that the following does not work because Function 2 overrids function 1, usign an addeventlistener is the only way to see both: 

// btn.onclick = functionA;
// btn.onclick = functionB;


