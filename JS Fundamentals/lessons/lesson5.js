// // Logical "AND"

// console.log(true && true); // All values have to be TRUE for expression to be TRUE
// console.log(false && true);
// console.log(false && false); // && - if only one have false - it's FALSE

// // Logical "OR"

// console.log(true || true); // Any valusr should be TRUE for the expression to be TRUE
// console.log(true || false); // it at least 1 part is true so it's TRUE
// console.log(false || false);

var ageIsMoreThanEighteen = true;
var isUSCitizen = false;

var eligibilityForDriverLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense);

var eligibilityForDriverLicense = ageIsMoreThanEighteen || isUSCitizen;
console.log('This customer is eligible for DL: ' + eligibilityForDriverLicense);

// Logical "NOT"

console.log(!true);
console.log( 6 == 10);
console.log( 6 !== 10);
