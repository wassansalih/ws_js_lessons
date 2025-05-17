const regExp = RegExp('foo', 'g')
const str = 'I like playing FOOTball and table football, I like eating food after'
console.log(str.match(regExp))
console.log(str.match(/foo/gi))
