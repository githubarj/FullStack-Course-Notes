// in javascript we write re-usable codes using functions
function functionName() {
  console.log("Hello World");
} //Declaring a function
functionName(); //calling a function

//Passing values to functions using arguments
//parameters are variables that act as place holders for the values that are to be input into a function when it is called
//The actual values that are put into a function are called arguments
function add(num1, num2) {
  return num1 + num2;
}
//console.log(add(5,7))

//Retrun a value from a function with return
// you can use a **retrun** statement to send a value back out of a function
function timesFive(num) {
  return num * 5;
}

//Global scope and functions
//in javascript scope refers to the visibility of functions
//variables which are defined outse of a function block have a global scope which eans that they are visible everywhere in your javascript code
//variables declared without let or const are automatically global variables

//Local scope and functions
//variables declared inside a function together with its parameters are only visible inside that function

//Global vs local variables
//It is possible to have local and global variables with the same names, whenthis happens the local variable takes precedence

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// everything to the right of the equal sign is resolved before the value is assigned. This means we can take the
// retrun value of a function and assign it to a variable
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

//in computer science a queue is an abstract data structure where items are kept in order. New items can be added 
// to the back of the queue and old items are removed form the from of the queue
//Add the number to the end of the array, then remove the first element of the array.
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

const testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Returning boolean values from functions 
//You may recall from Comparison with the Equality Operator that all comparison operators return a 
//boolean true or false value.

//Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
//But there's a better way to do this. Since === returns true or false, 
//we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

function isLess(a, b) {
  // Only change code below this line
  // if (a < b) {
  //   return true;
  // } else {
  //   return false;
  // }
  return a < b;
  // Only change code above this line
}

isLess(10, 15);

//Return early pattern for functions
//When a return statement is reached, the execution of the current function stops and 
//control returns to the calling location
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
//The above will display the string Hello in the console, and return the string World. 
//The string byebye will never display in the console, because the function exits at the return statement.


//Modify the function abTest so that if a or b are less than 0 the function will immediately exit with 
//a value of undefined.
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return undefined
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);