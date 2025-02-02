// Objects
var customer = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 19,
    cars: ["Volvo", "Toyota", "Tesla"], 
}
console.log(customer);
console.log(customer.firstName);
customer.age = 20; // Dot notation
console.log(customer);
customer["lastName"] = "Petrov";
console.log(customer["lastName"]); // Bracket notation
console.log(`${customer.lastName} ${customer.firstName}`); 

// Arrays
var car = ["Volvo", "Toyota", "Tesla"];
car[2] = "AUDI";
console.log(car[2]);
console.log(customer.cars[1]);
