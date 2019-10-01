var someNumber = 50.454545;

var results = Math.round(someNumber);

var sentence = "The number " + someNumber + " rounded is " + results +  "!";
console.log(sentence);

//Math.ceil will round up, rounds to the top integer
var ceiling = Math.ceil(45.3);
console.log(ceiling);

//Math.floor will round down, rounds to the lower integer

console.log(Math.floor(45.8));

//Math.pow returns the base to the exponent
var power = Math.pow(10,2);
console.log(power);

//Squareroot of argument 1
console.log(Math.sqrt(100));



//Create a random number between 0 and .999999~
var random = Math.random();

//Take random number and multiply by -1, negative variable will hold negative version of random
var negative = random * -1;

//Take random number and multiply by 100, range will hold product
var range = random * 10;

//Take range value and round up , then store number in WholeNumber variable
var wholeNumber = Math.ceil(range);

//Send wholeNumber value to console
console.log(wholeNumber);



var num = 100.373737


//parseInt part of  globalscope, attempts to convert string into a datatype number
var parse = parseInt("1000"); //1000
console.log(parse);

parseInt("1000"); //Number 1000
parseInt("Hello"); //probaby NaN
parseInt("100Hello"); //Number 100
parseInt("hello100"); //NaN

var floatNumber = parseFloat("1000.303000"); //Number 1000.303000
parseInt("1000.303000"); //NUmber 1000

console.log(floatNumber);

//example of complex code that generates a number 
console.log ( Math.floor((Math.random() * 10) +1) );

//Finding the character at position 7 (starting form 0) and sends that character to the console.
console.log("Hello World!".charAt(7)  );

//Find the character in the string, and return the position number and send it to the console.
console.log("Hello World".indexOf("W")); 