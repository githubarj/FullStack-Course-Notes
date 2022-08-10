//String concatenation
let string1 = "Richard"
let string2 = "Jeremy"
let fullName = string1 + " " + string2
console.log(fullName)

//This has been replaces with string interpolation
let fullNameInterpolation = `${string1} ${string2}`
console.log(fullNameInterpolation)
//this also allows us to write onto multiple lines at once eg, 
let sentenceMultiple = `
Hi my name is Richard
I am a software Developer
`
console.log(sentenceMultiple)
