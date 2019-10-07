//oct 7, 2019

var employees = []; //Array holding all our employees

var employee1 = {
  firstName: "Eduardo",
  lastName: "Garcia",
  age: 29,
  salary: 70000,
  status: "alive",
  life: "San Francisco",
  startDate: "November 2017"
};

var employee2 = {
  firstName: "Phil",
  lastName: "Johnson",
  age: 50,
  salary: 85000,
  status: "dead",
  life: "Los Angeles",
  startDate: "January 1964"
};

var employee3 = {
  firstName: "Sally",
  lastName: "Peters",
  age: 70,
  salary: 250000,
  status: "alive",
  life: "New York",
  startDate: "January 1999"
};

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);


console.log(employees);

//Only use employees array

employees[1]["life"] = "San Diego";

console.log(employees);


"hello there!".length
employees.length
//employees["lenght"]

//Dot Notation access for objects
employees[0].status;
//Not Valid
//employees[0].firstName;

//Brackets Notation access for Objects and Arrays.
employees[0]["status"];
employees[0]["first Name"];

employee3.age;
employee3["age"];