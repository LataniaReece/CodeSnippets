function Person(name, age, jobTitle) {
    this.name = name;
    this.age = age;
    this.jobTitle = jobTitle;


    this.getInfo = function() {
        return `${this.name} is ${this.age} years old and is a/an ${this.jobTitle}`
    }; 

    this.ageUp = function() {
        this.age = this.age + 1;
        return `${this.name} is now ${this.age} years old.`; 
    };


};

//Make sure to put new in front of the class or else "this" will refer to the global object 
person1 = new Person("Tania", 26, "RA")
person2 = new Person("Aiden", 28, "Lawyer")

console.log(person1.getInfo())
console.log(person2.getInfo())
console.log(person1.ageUp())
