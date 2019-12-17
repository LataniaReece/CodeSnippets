// Array.isArray() checks if something is an array 
// Join, tostring - both the smae except join you can specify the separator
// Delete fruits[0], although this may leave holes so use pop or shift instead 

//This is one way to check if an object is an array, typeof does not work because arrays are considering objects in js
let myArray = ["apple", "banana", "mango", "cherry"]
let myObj = {
    name: "Tania",
    age: 65,
}

// console.log(Array.isArray(myArray))
// console.log(Array.isArray(myObj))

// //array to string (note that join can have any separator, to string is commas. Join is commas with default)
// console.log(myArray.join(" * ")) 
// console.log(myArray.join(" and ")) 
// console.log(myArray.toString("*")) 

//push, pull, shift, unshift 

console.log(myArray.push("hello"))
console.log(myArray)

console.log(myArray)


const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
