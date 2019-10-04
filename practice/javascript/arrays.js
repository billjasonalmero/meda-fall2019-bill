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