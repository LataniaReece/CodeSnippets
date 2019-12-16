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


    //Abstration, hiding the implementation from user:
    let privateObject = {
        private1: 1,
        private2: 2
    };

    let privateFunction = function(word) {
         return `${word}, I am a private function`
    }

    //Note that you are using .this again
    this.usePrivateFunction = function() {
        privateFunction("Hello")
    };

    //Note that all of the following is needed to gain access to the private object
    this.getPrivateObject = function() {
        return (privateObject);
    };

    Object.defineProperty(this, "privateObject", {
        get: function() {
            return privateObject
        },
        set: function(value){
            if(!value.private1 || !value.private2)
                throw new Error("Please enter valid values for private1 and private2.");

            privateObject = value
        }
    })


};

//Make sure to put new in front of the class or else "this" will refer to the global object 
// person1 = new Person("Tania", 26, "RA")
// person2 = new Person("Aiden", 28, "Lawyer")

// console.log(person1.getInfo())
// console.log(person2.getInfo())
// console.log(person1.ageUp())

// Getting the private object
// console.log(person1.getPrivateObject())

//Changing the values of the private object 
// person1.privateObject = 3 - Note that this will not work, will throw the error
// person1.privateObject = {
//     private1: 3,
//     private2: 4
// };
// console.log(person1.getPrivateObject())