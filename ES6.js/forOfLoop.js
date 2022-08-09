// we can use the for of loop to loop through an array
let incomes = [62000, 67000, 75000 ]
let total = 0
for(const income of incomes){
    total += income;
}
//console.log(total)

//we can als use it yo loop through a string, it also prints out the spaces
let fullNmae= "Richard Jeremy Githuba"
for (const char of fullNmae){
   // console.log(char);
}

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

// my solution
const pupils = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
]

for(const student of pupils){
    const { name, city } = student
    //console.log(`${name} lives in ${city}`)
}
//their solution
const students = [
    {name: "John", city: "New York"},
    {name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney"}
]

for(const student of students){
    console.log(`${student.name} lives in ${student.city}`)
}