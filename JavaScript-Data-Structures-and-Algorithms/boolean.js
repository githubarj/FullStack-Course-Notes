// only one of two values, true or false, the two are mutually exclusive, true is on and false is off

//Use conditional Logic with if statements
//if statements are used to make decisions in code. Tells javascript to execute the code in curly brackets under
//certain conditions

// when the condition evaluates to true, the code is executed, and when false it is not
//Create an if statement inside the function to return Yes, that was true if the parameter
//wasThatTrue is true and return No, that was false otherwise
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue === true) {
    return "Yes, that was true";
  } else {
    return "No, that was false";
  }
}

//Comparison with the equality operator
//Operators retrun a true or false value, the most basic operator is the (==) which returns true if two values
//are equal and false if they ae not
//javascript can fix two different data types by turning one data type to another , this is known as type coercion
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//comparison with the strict equality operator (===)
// The strict comparison operator does not do type conversion and two data different types with same values
//are considered unequal
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

// in javascript you can determine the type of avariable with the typeof operator
typeof 3;

//Comparison with the inequality operator
//This is the opposite of the equality operator
//it returns true i fthhe values are not equal and false if the values are equal
//it will also convert data types when comparing
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//comparison with the strict inequality operator (!==)
// does not do type conversion
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right,
//it returns true. Otherwise, it returns false.
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//Comparison with the Greater Than Or Equal To Operator
//The greater than or equal to operator (>=) compares the values of two numbers.
//If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//Comparison with the Less Than Operator
//The less than operator (<) compares the values of two numbers.
//If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false.
// Like the equality operator, the less than operator converts data types while comparing.
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//Comparison with the Less Than Or Equal To Operato
//The less than or equal to operator (<=) compares the values of two numbers.
//If the number to the left is less than or equal to the number to the right, it returns true.
//If the number on the left is greater than the number on the right, it returns false.
//Like the equality operator, the less than or equal to operator converts data type
function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//Comparison with the logical And Operator
//Sometimes you need to test more than one thing at a time
//Returns tue if and only if the operands to the left and right of it are true
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "yes";
  }

  // Only change code above this line
  return "No";
}

console.log(testLogicalAnd(5));

//comparison with the logical or operator (||)
//it returns true if either of the operands is true
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  } else {
    // Only change code above this line
    return "Inside";
  }
}

testLogicalOr(15);
console.log(testLogicalOr(15));

//else sttements
//allows aalternate block of codeto be excecuted when an if statement is false
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Introducing else if statements
//If you have multiple conditions that need to be met  you can chain if statments together with else iff statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//Order is important in if, else if statements.
//The function is executed from top to bottom so you will want to be careful of what statement comes first.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//Chaining else if statements
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  // Only change code above this line
}

testSize(7);