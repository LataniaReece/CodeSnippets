let nameInput = document.getElementById("personName")
let submitBtn = document.getElementById("submitBtn")


submitBtn.addEventListener("click", displayName)

let displayName = function(e) {
    e.preventDefault();
    console.log(nameInput.value)
}