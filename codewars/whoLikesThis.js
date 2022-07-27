// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//My solution
function likes(names) {
  // TODO
  let ans = ""
  names.length === 0
    ? ans = "no one likes this"
    : names.length === 1
    ? ans = `${names[0]} likes this`
    : names.length === 2
    ? ans = `${names[0]} and ${names[1]} like this`
    : names.length === 3
    ? ans = `${names[0]}, ${names[1]} and ${names[2]} like this`
    : ans = 
        `${names[0]}, ${names[1]} and ${names.length-2} others like this`
      ;

      return ans
    }

likes([])
likes(["Peter"])
likes(["Jacob", "Alex"])
likes(["Alex", "Jacob", "Mark", "Max"])
likes(["Max", "John", "Mark"]);