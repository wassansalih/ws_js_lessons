// map is a high order function
//  return a statement or a change in the elements of the original array to manage what the new array elements are
//  create a new array
// the returned array usually has same length as the array used in the argument
//  can use index value 
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,17,19,20,21]

const multiplyByFive = numbers.filter(ele => ele * 5)
console.log(multiplyByFive)
console.log('Numbers array length is: ', numbers.length)
console.log('Odd Numbers array length is: ', multiplyByFive.length)
