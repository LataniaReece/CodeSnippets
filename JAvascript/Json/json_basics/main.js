/// do something with json in the dom. SAve as codesnippet ie Dom and Json (name, age, job). No trailing commas in the json object


let jsonText = `{ "jsonPeople" : [
{ "firstName":"John" ,
 "lastName":"Doe", 
"age": 26,
"job": "doctor"}, 
{ "firstName":"Anna" , 
"lastName":"Smith",
"age": 30, 
"job":"lawyer" }, 
{ "firstName":"Peter" ,
 "lastName":"Jones",
"age": 35,
"job":"firefighter"},
{ "firstName":"Thomas" ,
 "lastName":"Freddy",
"age": 21,
"job":"firefighter"} ,
{ "firstName":"Melissa" ,
 "lastName":"Jones",
"age": 22,
"job":"Teacher"} ,
{ "firstName":"Omari" ,
 "lastName":"Thomas",
"age": 40,
"job":"Construction Worker"}]}`; 

let people = JSON.parse(jsonText)
console.log(typeof people)
let peopleEl = document.getElementById("people")

// author_quotes_list.map(function(quote){

     
//     output += `
//             <div class="card">
//             <div class="card-body">
//               ${quote}
//             </div>
//             </div>          
//               `;
//     quoteEl.innerHTML = output;}

// <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">fristname last name</h5>
//     <h6 class="card-subtitle mb-2 text-muted">age</h6>
//     <p class="card-text">this is {firtname} {lastname} and s/he works at {job}</p>
//   </div>
// </div>

//Remember to get the person out of th eobject, it is an object with an array in it. Get the array out the object

let output = "";
people.jsonPeople.map(person => {
    console.log(person)
    output += `
        <div class = "card" style = "width: 18rem;">
            <div class = "card-body">
                <h5 class = "card-title">${person.firstName}</h5>
            </div>
        </div>`;
    peopleEl.innerHTML = output
} )

