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