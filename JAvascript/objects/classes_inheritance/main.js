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

    ageUp() {
        this.age = this.age + 1;
    }
};


class Adult extends Person {
    constructor(name, age, eyeColor, job){
        super(name, age, eyeColor);
        this.job = job;
    };

    move() {
        console.log("I am walking");
    };

    speak() {
        console.log("I am talking");
    };
};


class Baby extends Person {
    constructor(name, age, eyeColor){
        super(name, age, eyeColor);
    };

    move() {
        console.log("I am crawling");
    };

    speak() {
        console.log("Wah Wah");
    };
};

adult = new Adult("Tommy", 21, "Brown", "RA")
baby = new Baby("Abigail", 0.5, "Blue")

console.log(adult.job)
adult.move()
adult.speak()
adult.ageUp()
console.log(adult.age)
console.log(baby.name)
baby.move()
baby.speak()