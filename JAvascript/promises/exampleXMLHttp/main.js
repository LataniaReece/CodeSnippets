//Create the promise object

function get(url) {
    //Return a new promise 
    return new Promise(function(resolve, reject){
        //Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            //This is called even on 404 etx. 
            //so check this status 
            if (req.status == 200) {
                //Resolve the promise with the response text
                resolve(req.response);
            } else {
                //Otherwise reject with the status text
                //which will hopeflly be a meaningful error 
                reject(Error(req.statusText))
            }
        };
        //Handle network errors 
        req.onerror = function() {
            reject(Error("Network Error"));
        };
        //Make the request 
        req.send();
    });
}

//NOw use the promise object 

get('sample.json')
.then(function(response) {
    console.log("Success", response);
}, function(error) {
    console.error("Failed!", error)
})