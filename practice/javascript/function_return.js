//oct 2, 2019

function myFunction() {
  var text = "hello World";
  return 1000; 

  console.log("results");

}

//return can return whatever is is w/c is 1000

Math.random();


myFunction();

//Practice : Create  3 different functions, each one returns a different datatype. COnsole.log results of your functions

function goodMorning(){
  var gm = "Good Morning";
  return gm;
}

function goodAfternoon() {
  var ga = "Good Afternoon";
  return ga;
}

function goodEvening() {
  var ge = "Good Evening";
  return ge;
}

console.log(goodMorning());
console.log(goodAfternoon());
console.log(goodEvening());


//Data flow using a built in function
var aNUmber = 22000;

//Provide data to the Math.round() function aNumber as an argument. 
Math.round(aNUmber);


// *Do not write this in code* Math.round() will return a value of 22000, based on line 50, and the line 50 would now look like:

//Define the  function "ourOwnRound" with a parameter of "theNumber"
//% will give you the decimal value
//Math.ceil rounds up
//Math.floor if it rounds doen 
function ourOwnRound(theNumber) {

  //Create a variable "results"
  var results;
  // Using the % equation , we can extra the decimal place and store it in decimalOfTheNUmber.
  var decimalOfTheNumber = theNumber % 1;

  //We test the decimal value in decimalOfTheNumber and test if it is larger or smaller then .5...
  if (decimalOfTheNumber >= .5) {
    //...if is is larger, we round the original number stored in theNumber and store that in the results variable.
    results = Math.ceil(theNumber);
  }else{
    //...if it is smaller, we round the original number stored in theNumber and store that in the results variable.
    results = Math.floor(theNumber);
  }
  //Returns the value of results to wherever this function was called.
  return results;

}

var answer = ourOwnRound(63.3938);
console.log(answer);