let cup = {
    storeName: "Target",
    cost: 18,
    brandName: "Tiana Company",
    color: "Purple",

    break: function() {
        console.log("Oh no, I broke")
    }
}

//This will return the keys in an array 
const keys = Object.keys(cup);
console.log(keys)

