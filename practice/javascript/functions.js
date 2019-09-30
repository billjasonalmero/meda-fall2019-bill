// function syntax sep 30


function myFunction()  { 
  console.log("This is line 1");
  console.log("This is line 2");
  console.log("This is line 3");
}
// do not put spaces in the ()
//add specific text to add
var number = 10;
myFunction();

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


function mdas(num1,num2,num3,num4,num5) {
  var sum = num1 * num2 / num3 + num4 -num5;
  console.log(sum);
}

//var num1, num2, num3, num4, num5;
// when using functions you dont need to create a var: num1,num2,num3,num4,num5

mdas(5,5,5,5,5);


//parameters: specification, values use pass to functions
