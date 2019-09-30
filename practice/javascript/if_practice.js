console.log("Hello");



var age = 22;

if (false) {
  console.log("this code block ran because the condition was true");
}else{
  console.log("thise colde block ran because the condition is false")
}

/*
if(age >= 21) {
  console.log("You are old enough");

}else if (age == 18){
  console.log("You are an adolescent!");

}else{
  console.log("You are too young")
}
*/

/*
if(age == 0) {
  console.log("Congratz on being born, life is hard, good luck!");
}else if (age <= 1){
  console.log("Congratz, you survived this long. You are now a toodler!");
}else if (age <=5) {
  console.log("Congratz, you are now a child");
}else if (age <= 13) {
  console.log("You are now a teen")
}else if (age <=18) {
  console.log("Young adult")
}else if (age <=26) {
  console.log("Adult!")
}else if (age <=144) {
  console.log ("Elder!")
}else{
  console.log("We dont know else!")
}
*/

//IF , ELSE IF
//if() {} else if () {}


//IF, ELSE
// if () {} else {}

//or operator written as  ||
if (true || false || false || true) {
  console.log ("This was true")
}

if (false || false) {
  console.log ("Either was true")
}

var age2 = 10;

if (age2 == 5 || age2 == 6) {
  console.log("You are a brat!");
}



//AND operator written as &&

if (true && false) {
  console.log("Both of these are true!")
}
//&& FIRST, || SECOND
if(true && true || false && false) {
  console.log("I have no clue")
}

//order matters
if (false && (true || true) && true) {
  console.log("I have no clue")
}

//if you use parentasis it will start the () first

if(age == 0) {
  console.log("Congratz on being born, life is hard, good luck!");
}else if (age > 0 && age <18){
  console.log("Kid");
}else if (age > 17 && age <65 ) {
  console.log("Adult");
}else if (age > 64) {
  console.log("Elder!");
}else{
  console.log("You are not born yet");
}

var numberTester = -100;

if (numberTester >= 0) {
  console.log("This number is positive");

}else if (numberTester < 0) {
  console.log("This number is a negative number");
}

/*
//Detecting capital or lowercase B
var numberTesterB = "Bo";

if (testForLetterB == "b" || testForLetterB == "B") {
  console.log("This character is a B character");
}
*/



//type coorsion not forcing a type to another type often happen son javadcript  

/*
//Treusies and Falsies

//Falsies
false;
0;
"";
undefined; // no assigned value
null; //set a var to empty
NaN;

//Truethy
 >0;
 <0;
"anything";
"false";
"0";

*/

var test = "0"

if(test) {
  console.log("The value of" + test + " is truthy");
}

/*

variables
datatypes
if statements, if else if else
logical operator || comparisions
AND and OR operators || && ||
Thruthy and Falsey values

*/

//what you need to MASTER as a programmer
//functions, classes object