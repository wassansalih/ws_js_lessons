// reduce is a high order function
//  return an assinment to the accumilator value
// return a single value not an array
const numbers = [1,2,3,4,5,6,7,8,9]

const summation = numbers.reduce((acc, ele) => {
    return acc += ele
})

const summationWithInitialValue = numbers.reduce((acc, ele) => {
    return acc += ele
}, 10)
console.log(summation, summationWithInitialValue)


const multiplication = numbers.reduce((acc, ele) => {
    return acc *= ele
})

console.log('Multiplication value is: ', multiplication)
// const x = numbers.with(0,9)
// console.log('xxxx is : ', x)