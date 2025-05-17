
let array = /[1,9]/.exec('This string contain numbers like 1,2 ,3 ... 8,9')
console.log(array)
array = /num/.exec('This string contain numbers like 1,2,3 ... 8,9')
console.log(array)


const regExp = RegExp('foo', 'g')
const str = 'I like playing football and table football, I like eating food after'
array = regExp.exec(str)
console.log(array)