// Loops

// console.log("Hello, Chuchundra!");
// console.log("Hello, Chuchundra!");
// console.log("Hello, Chuchundra!");
// console.log("Hello, Chuchundra!");
// console.log("Hello, Chuchundra!"); // you don't need to print it many times

// for (statement1; statement2; statement3) { // index - the srart, condition - how long to make it, step - what do we need to do after cycle loop

// }

// //for loop (for i loop);
// for (let  i = 0; i < 5; i++) {
//     console.log("Hello, Chuchundra!");
// }

var cars = ["Volvo", "Toyota", "Tesla"];
for(let i of cars) {
    console.log(i);
    if(i == "Toyota") {
        break;
    }
}

//ES6 syntax for each loopc - classical/old type of loop
cars.forEach(car => {
    console.log(car)
})