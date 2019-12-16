let cup = {
    storeName: "Target",
    cost: 18,
    brandName: "Tiana Company",
    color: "Purple",

    break: function() {
        console.log("Oh no, I broke")
    }
}

//Checks for existence of key in object 
if ('color' in cup){
    console.log("Yes")
}else{
    console.log("No")
}


// Simple enumeration
for (let key in cup) {
    console.log(key, cup[key])
}

// //Enumeration with if statement, find if key is a function
// for (let key in cup) {
//     if(typeof cup[key] === 'function')
//         console.log(key, cup[key])
// }



//This will return the keys in an array 
const keys = Object.keys(cup);
console.log(keys)

