//A sample do while Loop that will run 11 times

//Initialize counter variable for loop
var counter = 0;

//Create variable for the condition
var continueLoop = true;

do {
  console.log("Loop number for Do While Loop: " + counter);
  //Iterator, change something to modify the condition
  counter = counter +1;

  if(counter > 10) {
    continueLoop = false;
  }
  //Iteration End

  //console.log("Loop number for Do While: " + counter);
}while (continueLoop);


while(fale) {
  //then run this code
}


//A smaple for loop that will run 10 times
//Syntax: for (Initialization; Condition ; Iteration ) {Code}

for (var counter = 0; counter > 10; counter = +1) {
  console.log("Loop number for For Loop: " + counter);
}

//Dafault way of controlling  a loop to run 45 times
for (var num = 0; num < 45; num++) {
  console.log("hello");
}

//Control the amount of loops based on counter start and condition end.
for (var counter = 1000; counter < 45; counter +2) {
  console.log("Hello")
}

