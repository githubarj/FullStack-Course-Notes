//arrays
const myArray = [18, 64, 99];

//you can nest arrays in other arrays - multidimensional arrays
const multiArray = [
  ["jeremy", 21],
  ["richard", 22],
];

//accessing array data awith indexes
//arrays use zero indexing - the first element is 0 index
const Array = [50, 60, 70];

const myData = Array[0];

//Modify arrays with indexes
// Unlike strings, the values inside arrays are mutable, (can be changed) even when declared with const
myArray[0] = 45;

//Acessing multi-dimensional arrays with indexes
//the first pair of brackets refer to the outermost arrays and so on
// set data to 8
const multi = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const Data = myArray[2][1];

//manipulate arrays with push()
//adds values to the end of an array

const maniArray = [
  ["John", 23],
  ["cat", 2],
];

maniArray.push(["dog", 3]);

//manipulate arrays with pop
//pop removes the last value in an array and returns that value
const rArray = [
  ["John", 23],
  ["cat", 2],
];

let removedFromMyArray = rArray.pop();

//manipulating arrays with shift()
//removes the first value in an array and returns it
const sArray = [
  ["John", 23],
  ["dog", 3],
];

removedFromMyArray = sArray.shift();
console.log(removedFromMyArray);

//manipulating arrays with unshift()
//this adds values at the front of our array

const uArray = [
  ["john", 3],
  ["richie", 4],
];
uArray.unshift(["jeremy", 6])


//shopping list 
const myList = [
  ["Shoes", 2],
  ["Blueband", 1],
  ["Toothbrush", 4],
  ["Soap", 6],
  ["Tissue", 9],
  ["Sugar", 1]
]