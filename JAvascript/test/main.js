//Figure out if you can have triple pairs in omaha, if so add another if condition. THen push to the final and add all things tha tare not pairs to the final Hand made Ten push that to the hand made. 

// let tempHandMade = ["pair", "pair", "trips"]
let tempHandMade = ["trips"]
let finalHandMade = []

if (tempHandMade.filter(hand => hand == "pair").length === 3){
    finalHandMade.push("Three Pair")
    finalHandMade.push()
}else if (tempHandMade.filter(hand => hand == "pair").length == 2) {
    tempHandMade.push("No Two Pair")
}else {
    tempHandMade.push("No conditions met")
}
console.log(tempHandMade)

// // Find what an empty filter returns: 

// let arr = ["apple", "banana", "cherries", "banana"]

// console.log(arr.removeItem("apple"))