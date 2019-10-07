//oct 7, 2019

//array
var mySecondArray = [
  "value",
  1000,
  true,
  "cool"];
console.log(mySecondArray);

//objects
var myFirstObject = {
  key: "value",
  money: 1000,
  rain: true,
  data4: "cool"};
console.log(myFirstObject);

//acessing "cool" in array.
console.log(mySecondArray[3]);

//accessing "cool" in object.
console.log("Object version " + myFirstObject["data4"]);
console.log("Object version " + myFirstObject["data4"], myFirstObject["money"]);

//Updating a value inside of an Object
myFirstObject["rain"] = false; //make sure you sure []

//Adding a new key-value to an existing Object
myFirstObject["day"] = "sunny";

//Adding a new value to an array.
mySecondArray[1000] = 1;
mySecondArray[1000] = 2;

console.log(myFirstObject);
console.log(mySecondArray);

