// // Conditional statement

// if (condition) {
//     // execute some code here - true
// } else {
//     // execute some code here - in case if false
// }

// If hour between 4 and 12 - print "Good Morning!";
// If hour between 12 and 18 - print "Good Afternoon!";
// If hour between 18 and 23 - pring "Good Evening!"; 
// Otherwise: "Good Night!";

var hour = 0;

if (hour >= 4 && hour < 12) {
    console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon!");
}   else if (hour >= 18 && hour < 24  || hour === 0) {
    console.log("Good Evening!");
}   else if (hour < 0 || hour > 24) {
    console.log("Sorry, wrong time!");
}   else {
    console.log("Good Night!");
}
// Это все я сама написала

var ageIsMoreThanEighteen = true;
var isUSCitizen = false;

if(ageIsMoreThanEighteen && isUSCitizen) {
    console.log("Customer is eligible for DL");
}   else {
    console.log("Customer is NOT eligible for DL");
}
