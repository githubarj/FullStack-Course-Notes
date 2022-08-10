//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
    let myArr = arr;
    for(let i = 0; i < arr.length; i++){

        let compare = arr[i]
        myArr = arr
        console.log (compare)
        myArr.splice(i,1)
        if(compare != arr[0] && arr[1]){
            return compare
        }

    }
}

console.log(findUniq([ 0, 0, 1]))