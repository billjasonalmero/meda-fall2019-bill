//oct 2
//Do While Loop
//For Loop
//While Loop
//.forrach - not covered

//Syntax of Do While

//do {/* code */}while(true); //Because the value if true never changes, the loop will never end.


var aVariable = true;
var counter = 0;


// do will run first
do {

  counter = counter +1; //counter ++

  console.log("The value of counter is " + counter);

  if (counter >=50) {
    aVariable = false;
  }
} while (aVariable);

var stringToTest = "This is a really long sentence so we have a chance to count a character twice.";
var i = 0;
var loopContinue = true;
//var lenghtOfString = stringToTest.length; //.charAt(i);
console.log(lenghtOfString);


//.length only works on string and array

do{

  //Pull a character based on the current loop number (i) usin gthe charAt function.
  var character = stringToTest.charAt(i);
  
  //Add a 1 to the corner (i)
  i = i + 1;

  //console.log(lenghtOfString);
  console.log(character);
  //Test to see if the loop is longer than the lenght of string, and stop the loop if it is.
  if(i >= lenghtOfString) {
    loopContinue = false;
  }
//After running the code check loopContinue to see if we should run this again
}while(loopContinue);