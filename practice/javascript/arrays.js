var myVariable = "One thing at a time";

myVariable = "This is a new value"

var firstDay = "Monday";
var secondDay = "Tuesday";
//......

//Array Syntax : [firstValue, secondValue. thirdValue]

var weekNames = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];


//Call the whole array and send it to the console.
console.log(weekNames);

//Call the second value in the array, and send it to the console.
console.log(weekNames[1]);

console.log(weekNames[4]);

//Arrays Methods/Functions

//Add elements to the end of the array: push();
weekNames.push("Superday");
console.log(weekNames);

weekNames.push("Funday");
console.log(weekNames);

//Remove an element at the start of an array: shift();
//removes the first index which is Donday

weekNames.shift();
console.log(weekNames);

weekNames.shift();
console.log(weekNames);

//Restoring Arrray using Array Methods
weekNames.unshift("Tuesday");
weekNames.unshift("Monday")

console.log(weekNames);


weekNames.pop();
weekNames.pop();
console.log(weekNames);

//Cahllenge: Moving Sunday to the beginning of the array without

var day = weekNames.pop(); // removes the "Sunday"
weekNames.unshift(day);
console.log(weekNames);
//weekNames.unshift(  (weekNames.pop()  );
//End Challenge


//Array Method Splice(), designed to extract a part of an array

weekNames.splice(3, 1); //start with index 3 and remove 1 element
console.log(weekNames);

//Add values to array manually by specifying the index number
var splitArray = weekNames.splice(3, 2); //start from index 3 and remove 2 elements

//Update values to array by specifiying theindex index number
console.log(splitArray);

//Assign a value to an index thst doesn't exit yet
splitArray[10] = "Hiddenday";

console.log(splitArray);

//Arrays and Loops
var names = ["Alpha", "Sam", "Max", "Georgio", "Giermo", "Horacio", "Batman", "Bill", "Mackaw", "Robin"];

//or use counter++
for(var counter = 0; counter<10; counter = counter +1) {
  console.log("Hello " + names[counter] + "!");
}
//or
                                  //instead of 10, we can use .lenght so we always loop for the exact number of items of the names array
for(var counter = 0; counter<names.length; counter = counter +1) {
  console.log("Hello " + names[counter] + "!");
}
