// TypeScript vs JS

var customerFirstName = "Eren";
var customerSurname = "Jaeger";
var customerAge = 19;

// customerFirstName = 100; // this is string type and can not be number
// //TS declares this as a string, but JS allow us to do this
// var customerAge = "19"; // same, it is a number

type Customer = {firstName: string, surname: string, active: boolean};
//var firstCustomer: Customer = 100; // unacceptable as well, there is no number type from curly braces above
var firstCustomer: Customer = {
    firstName: "Eren",
    surname: "Jaeger",
    active: false,
    //we can not delete firstName or surname or active or change type of the data, add something new here - there will be complain
    //so strict data adding in TS is preventing errors in assigning whong values to variables, so code won't be crushing during the execution in this cause
}
// the main difference between TS and JS is adding support of restrict typing