// this allows for addition of a lot numbers to a parameter eg
function add(...nums) {
    console.log(nums)
    
}
add(5, 4, 2, 7, 8)

// if we do no t use that in passing in the parameters it will print this instead
function add2(nums) {
    console.log(nums)
    
}

add2(4, 5, 6, 7, 8)