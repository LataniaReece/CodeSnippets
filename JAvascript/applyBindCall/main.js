console.log("Hello")
const personDomElement = {
    p1: {
      firstName: "Tania",
      lastName: "Reece",
      displayName: function(){
        console.log(`${this.firstName}`)
      }
    },
    p2: {
      firstName: "Aiden",
      lastName: "Adams"
    }
  }
  
  p1 = document.getElementById("p1")
  
  p1.addEventListener("mouseenter", function(e) {
    let personKey = e.relatedTarget.firstElementChild.id
    person = personDomElement[personKey]
    console.log(person)
    
  })
  
  
  // let displayFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
  
  
  
  // p1.addEventListener("mouseenter", displayInfo);
  // p1.addEventListener("mouseleave", removeInfo);
  
  // function displayInfo(){
  //   this.getElementsByTagName("p")[0].style.color = "#8080ff";  
  //   let newNode = document.createElement('p');
  //   newNode.className = "card-text person-info"
  //   newNode.textContent = `Hello my name is ${this.firstName} ${this.lastName}`
  //   this.appendChild(newNode);
  // }
  
  // function removeInfo(){
  // this.removeChild(this.childNodes[this.childNodes.length-1]);    
  // }