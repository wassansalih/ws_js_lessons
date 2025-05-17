// High order functions are methods that accept function as argument and/or return a function
const forEachFn = (arr, fn) => {
    for ( i=0; i<=arr.length-1; i++ ) {
        fn(arr[i])
    }
}


const numbers = [1,2,3,4,5]

forEachFn(numbers, console.log)

//  ---------------------
const arrayToChange = []
const fn = (num) => {
   arrayToChange.push(num * 3)
}
forEachFn(numbers, fn)
console.log(arrayToChange)