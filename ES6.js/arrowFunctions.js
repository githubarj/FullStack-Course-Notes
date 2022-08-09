// we can use arrow functions to define functions 
// One way to declare functions is 
function print() {
    return "I am called Richard";
}
// way two
const printing = function () {
    return " I am called Kiptoo"
}

// way 3 (using arrwo functions)
const prints = () => {
    return "I am called rose"
}

print()
console.log(printing() + " " + prints())