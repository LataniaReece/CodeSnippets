// credit for ideas: https://medium.com/better-programming/127-helpful-javascript-snippets-you-can-learn-in-30-seconds-or-less-part-1-of-6-bc2bc890dfe5
let myArray = ["apple", "banana", "mango", "cherry"]
// array to Html List 

// const arraytoHtmlList = function(arr, listID) {
//     let el = document.getElementById(listID);
//     el.innerHTML += arr.map(item => `<li>${item}</li>`).join("");
// }


// // arraytoHtmlList(myArray, "arrayList")


// // Bifurcate By

// const bifurcateBy = (arr, fn) =>
//   arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
  
// let newArray = bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); //give me all the words that start with "b"
// console.log(newArray)


// //Pick random value from array 

// console.log(myArray[Math.floor(Math.random()*myArray.length)])

//difference between two arrays 
const difference = function(arr1, arr2){
  const setArr2 = new Set(arr2)
  return arr1.filter(x => !setArr2.has(x));
};

console.log(difference([1,2,3], [1,2,4]))


//pairwise comparison: 

function pairwise(list) {

  var pairs = new Array((list.length * (list.length - 1)) / 2),
      pos = 0;

  for (var i = 0; i < list.length; i++) {
      for (var j = i + 1; j < list.length; j++) {
          pairs[pos++] = [list[i], list[j]];
      }
  }
  return pairs;
}
