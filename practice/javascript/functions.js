// function syntax 
//sep 30, 2019


// function myFunction()  { 
//   console.log("This is line 1");
//   console.log("This is line 2");
//   console.log("This is line 3");
// }
// // do not put spaces in the ()
// //add specific text to add
// var number = 10;
// myFunction();

////////////////////////////////////////////


function mathify(firstNumber) {
  console.log(firstNumber+1);
  console.log(firstNumber-1);
  console.log(firstNumber/1);
  console.log(firstNumber*1);
}

mathify(100);
console.log("break");
mathify(1000);

////////////////////////////////////////////


// function mdas(num1,num2,num3,num4,num5) {
//   var sum = num1 * num2 / num3 + num4 -num5;
//   console.log(sum);
// }

//var num1, num2, num3, num4, num5;
// when using functions you dont need to create a var: num1,num2,num3,num4,num5

// mdas(5,5,5,5,5);


//parameters: specification, values use pass to functions

//OCT1,2019 DAY28

//datatypes
// 1000;
// "This is a string";
// true;
// false;

/*
if(rain) {

  if(umbrella) {
    "take umbrella";
  }else {
    "take uber";
  }

}else {
  "enjoy your day";
}
*/

//functions needs a parenthesis


function mathify(firstNumber, secondNumber) {

  var description = "The following values are generated from " + firstNumber + " and " + secondNumber + "."; 
  console.log(description)

  var sum = firstNumber + secondNumber;
  var sumSentence = "The sum is: " + sum;
  console.log(sumSentence);

  var difference = firstNumber - secondNumber;
  var differenceSentence = "The difference is " + difference;
  console.log(differenceSentence);

  
  var divide = firstNumber / secondNumber;
  var divideSentence = "The qoutient is " + divide;
  console.log(divideSentence);

  var product = firstNumber * secondNumber;
  var productSentence = "The product is " + product;
  console.log(productSentence);


}

mathify(22,47);
console.log("break");
mathify(222,333);
console.log("break");
mathify(111,333);
console.log("break");
mathify(444,555);
console.log("break");
mathify(666,999);

////