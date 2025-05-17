
// forEach is a non pure function, can change something external,
// does not have return command
//  can use index value

const numbers = [1,2,3,4,5]
const arrayToChange = []

const fn = (num) => {
   arrayToChange.push(num * 3)
}


console.log(arrayToChange)
numbers.forEach(ele => arrayToChange.push(ele * 4))
console.log(arrayToChange)


numbers.forEach((ele, index) => arrayToChange.push(ele * index))
console.log(arrayToChange)