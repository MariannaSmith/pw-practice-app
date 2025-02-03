// Functions - are used to organise the code into re-usable component. If we want to use the same functionality - no need to rewrite and repeat it

// Declarative function - here I can call the function before the code

helloOne();
function helloOne(){
    console.log("Hello, One!");

}
// helloOne();

// Anonymus function 

var helloTwo = function() {
    console.log("Hello, Two!");
}
helloTwo();

//ES6 function syntax or Arrow function

var helloThree = () => { // var helloThree = function()
    console.log("Hello, Three!");
}
helloThree();

// Function with arguments

function printName(name, lastName) {
    console.log(name + " " + lastName); // Idk what's that exactly and why do I need it, so just learn it out
}
printName("Anya", "Ivanova");

// Function with return

function multiplyByTwo(number) {
    var result = number * 2;
    return result;
}
var myResult = multiplyByTwo(5);
console.log(myResult);

// // Import function

import { printAge } from "./helpers/printHelper.js"
printAge(16);

// Import everything

import * as helper from "./helpers/printHelper.js"
helper.printAge(11); 