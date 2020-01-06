//create an object
class Person{
    constructor(name, age, eyeColor){
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;

    };

    move(){
        console.log("I am moving");
    }

    speak() {
        console.log("I am speaking");
    };
};

person1 = new Person("Tommy", 20, "brown");
console.log(person1.eyeColor);
person1.move();