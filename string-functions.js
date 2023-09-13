//converting a string to upper case
var intro = "This is Azmi. I'm learning .js";
console.log(intro.toUpperCase());

//indexOf function to find any keyword inside a string
console.log(intro.indexOf("Azmi"));

//split function
console.log(intro.split("I"));

//converting string into number
var number1 = 25;
var number2 = 15.5;
var number2 = parseFloat(number2); //type casting a string into number
console.log(number1+number2)

//converting a number into string
var num = 10;
num = ''+num;
console.log(typeof num);

//floating point
var var1 = 0.1;
var var2 = 0.2;
var total = var1 + var2;
total = total.toFixed(2); //fix the position after the decimal point
console.log(total);