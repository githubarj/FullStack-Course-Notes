// we can use arrow functions to define functions
// One way to declare functions is
function print() {
  return "I am called Richard";
}
// way two
const printing = function () {
  return " I am called Kiptoo";
};

// way 3 (using arrwo functions)
const prints = () => {
  return "I am called rose";
};

print();
// console.log(printing() + " " + prints())

// arrow functions also allow our code to be short
// if the code only returns one thiing it can be written as
const printer = () => `I will eat food for dinner`;

// console.log(printer())

// and if the function takes just one parameter, you do not have to put parenthesis around the parameter

const p = (food) => `I will eat ${food} for dinner`;
console.log(p(`apples`));
