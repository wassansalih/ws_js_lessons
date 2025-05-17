// filter is a high order function
//  return a condition to manage what the new array elements are
//  create a new array
// the returned array usually has different length than the array used in the argument
//  able to use index value
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,17,19,20,21]

const oddNumbers = numbers.filter(ele => ele % 2 > 0)
console.log('Odd numbers are: ', oddNumbers)
console.log('Numbers array length is: ', numbers.length)
console.log('Odd Numbers array length is: ', oddNumbers.length)

console.log(
    'Odd numbers start from index 6 are: ',
    numbers.filter((ele, index) => {
        return ele % 2 > 0 && index > 5
    })
)