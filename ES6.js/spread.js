//
let contacts = ["Mary", "Peter", "Danny"]

//when you assign a variable as done below, you are creating a reference to the contacts array , it does not take the value of 
//that array
//you are not creating a new array, you are creating a reference to the contacts array,
//therefore if the contacts array changes, the personalFriends changes too
let personalFriends = contacts;
//we can verify this by printing it out
contacts.push("Richard")
//console.log(personalFriends)

// to do a copy of a variable we use the spread operator which is ...
//eg
let contactlist = ["Richard", "Mary", "Rose"]
let myFriends = [ ...contactlist ] //this will make a copy of the contacts array and not a reference to it, it will create a new array
//lets verify with a printing of it
contactlist.push("John")
//console.log(myFriends)
//does not chamge as contaclist array is changed
//you can also do the copy as well as add other values
let yourFriends = ["Tom", ...contactlist, "Jeremy"]
//console.log(yourFriends);


//we can also do this with objects
let person = {
    name: "Richard",
    city: "Nairobi",
    age: 21,
}

let moreDetails = {
    ...person,
    salary: 120000,
    job: "Software Developer"

}

//console.log(moreDetails)

/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

const shoppingBasket = [...shoppingList, "bread", "meat", "sugar"]

console.log(shoppingBasket)