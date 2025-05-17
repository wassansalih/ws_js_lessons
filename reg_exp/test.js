
 const regex1 = RegExp("[1,3,9]]*", "g");
 const regex2 = RegExp("[1-9]", "g");
 const regex3 = RegExp("\w", "g");
 const regex4 = RegExp("[a-z]", "g");
 
console.log (
    regex1.test('This string contain numbers like 1,2 ,3 ... 8,9'),
    regex2.test('This string contain numbers like 1,2 ,3 ... 8,9'),
    regex3.test('This string contain numbers like 1,2 ,3 ... 8,9'),
)
console.log(regex4.lastIndex)
const match = regex4.test('This string contain numbers like 1,2 ,3 ... 8,9')
console.log(regex4.lastIndex)