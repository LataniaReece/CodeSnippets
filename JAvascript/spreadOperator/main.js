//Spreading arguments into a function 

const temperatures = [72, 73, 321, 43, 54]
console.log(Math.min(temperatures)) //This will not work as expected, it is treating the whole array as one value 

console.log(Math.min(...temperatures))


//Spreading an array of words into one long string?

const arr = ["apple", "banana", "cherry"]
console.log(arr)
console.log(...arr)


//Spreading a string

console.log(..."Spread")


//Combining two arrays with spread operator 
const arr1 = ["One", "Two", "Three"]
const arr2 = ["Four", "Five"]
console.log([...arr1, ...arr2])
console.log([...arr2, ...arr1]) //The order matters 

//Copying an array, not reference copy, actual copy 

const oldArr = ["One", "Two", "Three"]
const newArr = [...oldArr] //This creates a copy of the old array to the array not a reference to the same object ie newArr = oldArr


//Combining objects with spread operator 

const dog = {
    hasTail: true,
    legs: 4
}

const fish = {
    canSwim: true
}

const hybrid = {
    name: "hybridAnimal",
    ...dog,
    ...fish
}

console.log(hybrid)

