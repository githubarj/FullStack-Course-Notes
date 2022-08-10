const myDog = {
  // Only change code below this line
  name: "Bosco",
  legs: 4,
  tails: 1,
  friends: ["Richard, Dennis"],

  // Only change code above this line
};


// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

//Accessing Objects using bracket Notation
// Setup
const tryObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = tryObj["an entree"];   // Change this line
const drinkValue = tryObj["the drink"];    // Change this line

//Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
//This can be very useful for iterating through an object's properties or when accessing a lookup table.

// Setup
const Obj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 19;  // Change this line
const player = Obj[playerNumber];   // Change this line

//Updatimg object properties
//After you've created a JavaScript object, you can update its properties at any time just like you would 
//update any other variable. You can use either dot or bracket notation to update.

// Setup
const Dog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
Dog.name = "Happy Coder"

//Adding new properties to a javascript object

//You can add new properties to existing JavaScript objects the same way you would modify them.
//Here's how we would add a bark property to ourDog:

ourDog.bark = "bow-wow";
//or

ourDog["bark"] = "bow-wow";
//Now when we evaluate ourDog.bark, we'll get his bark, bow-wow.

//Example:

const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";


//Delete Properties from a JavaScript Object
delete ourDog.bark;
Example:

// const yourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"],
//   "bark": "bow-wow"
// };

// delete yourDog.bark;

//Using Objects for Lookups
//Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, 
//you can use an object to lookup values rather than a switch statement or an if/else chain. 
//This is most useful when you know that your input data is limited to a certain range.

//Here is an example of a simple reverse alphabet lookup:

const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  24:"C",
  25:"B",
  26:"A"
};

const thirdLetter = alpha[2];
const lastLetter = alpha[24];

const value = 2;
const valueLookup = alpha[value];
//thirdLetter is the string Y, lastLetter is the string C, and valueLookup is the string Y.

//Convert the switch statement into an object called lookup. 
//Use it to look up val and assign the associated string to the result variable.
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
//   switch(val) {
//     case "alpha":
//       result = "Adams";
//       break;
//     case "bravo":
//       result = "Boston";
//       break;
//     case "charlie":
//       result = "Chicago";
//       break;
//     case "delta":
//       result = "Denver";
//       break;
//     case "echo":
//       result = "Easy";
//       break;
//     case "foxtrot":
//       result = "Frank";
//   }
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

 const lookup = {
   "alpha": "Adams",
   "bravo": "Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
}
 result = lookup[val]

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//Testing Javascript Objects for properties 
//To check of a property of a given object exists or not 
//The function used is .hasOwnProperty()
//example 
const myObject = {
  Dog: "Bosco",
  height: "20"

}

console.log(myObject.hasOwnProperty(Dog))