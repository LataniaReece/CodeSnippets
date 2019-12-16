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