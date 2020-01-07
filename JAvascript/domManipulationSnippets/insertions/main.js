//INSERTIONS 

// // source https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib

// //Another way of doing this, less browser support or nah?
// // elementBefore.insertAdjacentHTML('afterEnd', elementAfter.outerHTML)
//   // 'beforebegin': Before the element itself.
//   // 'afterbegin': Just inside the element, before its first child.
//   // 'beforeend': Just inside the element, after its last child.
//   // 'afterend': After the element itself.
//   //look at resulting html to see the difference!

//   // will lose properties of the element such as events because outerHTML converts the element to a string. We need it because insertAdjacentHTML adds content from strings rather than elements.
// let elementBefore = document.getElementById('Neighborhood')
// elementBefore.insertAdjacentHTML('afterbegin', NewElement.outerHTML)


//check whether parent element contains the child

// const elementContains = (parent, child) => parent !== child && parent.contains(child);

// console.log(elementContains(document.querySelector('head'), document.querySelector('title')))// true
// console.log(elementContains(document.querySelector('body'), document.querySelector('body'))); // false

// GETTING VALUES 

const hasClass = function(el, className){
  return el.classList.contains(className)
}

console.log(hasClass(document.querySelector('p.special'), "notSpecial"))
console.log(hasClass(document.querySelector('p.special'), "dsa"))


//Hide all elements of a specific type 
const hide = function(...el){
  [...el].map(e =>{
    console.log(e.style)
    e.style.display = "none"
  })
}

// const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

hide(document.querySelectorAll('p')); // Hides all <p> elements on the page





