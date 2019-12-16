function checkAge(animal) {
    switch (animal){
        case "dog":
            console.log("Woof Woff")
            break;
        case "cat":
            console.log("Meow")
            break;
        case "bird":
            console.log("Tweet Tweet")
            break;
        default:
            console.log("Please choose dog, cat or bird")
            break;
    }
}

function chooseOne(num) {
    switch (num){
        case 1:
            console.log("I am number 1")
            break;
        case 2:
            console.log("I am number 2")
            break;
        case 3:
            console.log("I am number 3")
            break;
        default:
            console.log("I am neither 1, 2 or 3")
            break;
    }
}

chooseOne()
checkAge("bird")
chooseOne(6)
checkAge("hello")