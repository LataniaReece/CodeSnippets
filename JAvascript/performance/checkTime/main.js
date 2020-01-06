//quick performance check
let startAt = performance.now();

for (let i = 0; i < 12; i++){
    console.log(i)
}

let endAt = performance.now();

console.log(`This took ${endAt - startAt} milliseconds`)