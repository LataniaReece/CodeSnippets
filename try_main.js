document.getElementById("btn").addEventListener("click", myFunction)

function myFunction() {
  console.log("click")
  var message, x;
  message = document.getElementById("p01");
  message.innerHTML = "";
  x = document.getElementById("demo").value;
  try { 
    if(x == "")  throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    
    if (x < 5) {
      throw "too low"
    } else if (x > 10) {
      throw "too high"
    } else {
      throw "good"
    };
  }
  catch(err) {
    message.innerHTML = "Input is " + err;
  }
}


// Clears the input box, finally is ran regardless of try catch results 
// document.getElementById("btn").addEventListener("click", myFunction)

// function myFunction() {
//   console.log("click")
//   var message, x;
//   message = document.getElementById("p01");
//   message.innerHTML = "";
//   x = document.getElementById("demo").value;
//   try { 
//     if(x == "")  throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
    
//     if (x < 5) {
//       throw "too low"
//     } else if (x > 10) {
//       throw "too high"
//     } else {
//       throw "good"
//     };
//   }
//   catch(err) {
//     message.innerHTML = "Input is " + err;
//   }
//   finally {
//     document.getElementById("demo").value = "removed";
//   }
 
// }


