//Selecting from many options using swithc statements
//A switch statement tests a value and can have many case statements which define various possible values. 
//Statements are executed from the first matched case value until a break is encountered.
//case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
//If the break is omitted, the next statement will be executed.

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

//Adding a default option in Switch statements
// In a switch statement you  may not be able to specify all possible values as case statements. Instead you 
//can add the default statement which will be executed if no matching case statements are found. 
//Think of it like the final else statement in an if/else chain.
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//Multiple identical Options in Switch statements
//If the break statement is omitted from a switch statement's case, the following case statement(s) are 
//executed until a break is encountered. If you have multiple inputs with the same output, 
//you can represent them in a switch statement like this:
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//Replacing if Else chains with switch
//if you have many options to choose from, a switch statement can be easier to write than many 
//chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}

//can be replaced with:

switch (val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  // if (val === "bob") {
  //   answer = "Marley";
  // } else if (val === 42) {
  //   answer = "The Answer";
  // } else if (val === 1) {
  //   answer = "There is no #1";
  // } else if (val === 99) {
  //   answer = "Missed me by this much!";
  // } else if (val === 7) {
  //   answer = "Ate Nine";
  // }

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);