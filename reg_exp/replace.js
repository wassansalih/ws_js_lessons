

const str = 'I like playing FOOTball and table football, I like eating food after 123, 1, 2'
const newStr = str.replace(/foo/gi, 'aaaa')
console.log(newStr)
console.log(str.replace(/(\w+)\s(\w+)/, "$2, $1"))
console.log('111,222,333,444'.replace(/(\d+)\,(\d+)\,(\d+)/, "$3, $1"))
