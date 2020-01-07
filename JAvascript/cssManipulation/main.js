
// const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

// getStyle(document.querySelector('p'), 'font-size'); // '16px'


const getStyle = function(el, ruleName){
    return getComputedStyle(el)[ruleName]
}

console.log(getStyle(document.querySelector('p'), 'color'));
console.log(getStyle(document.querySelector('p'), 'font-size'));