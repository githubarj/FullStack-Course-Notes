// when you are passing parameters to a function , you can specify a default parameter to be used incase the function is called
// with no arguments, for example
const sentence = (artist = "someone") => {
    return `${artist} is performing today`
}

// calling the function with an argument overrides the default parameters
// console.log(sentence(`Chris Martin`))
// calling the function with no arguments uses the default parameters
// console.log(sentence())

/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const eat = (food = `something`) => {
    return `I'm going to buy ${food} from the grocery shop`
}

console.log(eat(`bread`))
console.log(eat())