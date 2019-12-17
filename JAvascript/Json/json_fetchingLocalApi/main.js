/// do something with json in the dom. SAve as codesnippet ie Dom and Json (name, age, job). No trailing commas in the json object

document.getElementById("getPeople").addEventListener("click", getPeople)
peopleEl = document.getElementById("people")

//Fetching json from another file 
let output = "<h2> People: </h2>"
function getPeople(){
    fetch("people.json")
    .then(res => res.json())
    .then(data => {
        data.jsonPeople.map(person => {
            console.log(person.firstName)
            output += `
                    <ul class = "list-group mb-3">
                        <li class = "list-group-item"> First Name: ${person.firstName}</li>
                        <li class = "list-group-item"> Last Name: ${person.lastName}</li>
                        <li class = "list-group-item"> Age: ${person.age}</li>
                        <li class = "list-group-item"> Job: ${person.job}</li>
                    </ul>
                    `; 
            peopleEl.innerHTML = output;
        })
    })

}
   

