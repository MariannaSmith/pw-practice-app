//Concatination and Interpolation
var price = 50;
var itemName = "table";
var messageToPrint = "The price for your cup is 50 cents";
console.log(messageToPrint);
var messageToPrint = "The price for your "+itemName+" is 50 cents";
console.log(messageToPrint);
var messageToPrint = "The price for your "+itemName+" is "+price+" cents"; // concatination объединение строк через оператор (+) или методы. Требует явного преобразования типов
var messageToPrint2 = `The price for your ${itemName} is ${price} dollars`; // interpolation встроение переменных и выражений в строку с использованием шаблонных строк. Автоматически преобразует типы
console.log(messageToPrint2);
