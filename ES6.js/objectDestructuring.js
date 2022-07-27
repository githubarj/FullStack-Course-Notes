const player = {
  name: "Lebron James",
  club: "LA Lakers",
  address: {
    city: "Los Angeles",
  },
};


//convectional way of accessing objects- but we have to write entire thing every time we access objects
console.log( player.address.city );

//with object destructuring we can declare them as new variables
const { name, club } = player
//then we can now use the above as single variables
console.log(name)
//we can slo access keys in nested objects in one line
const { address: { city } } = player

console.log(city)


