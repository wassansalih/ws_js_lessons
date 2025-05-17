// Regular expressions are patterns used to match character combinations in strings. 
// In JavaScript, regular expressions are also objects. 
// These patterns are used with the exec() and test() methods of RegExp, 
// and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.

// to declair new reg exp use one of:
// new RegExp(pattern)
// new RegExp(pattern, flags)
// RegExp(pattern)
// RegExp(pattern, flags)
// or directly like:

const regex = /\w+/gi
const str = 'I like playing FOOTball and table football, I like eating food after 123, 1, 2'

console.log(str.match(regex))
console.log(str.match(/\d/g))
console.log(str.match(/\d+/g))
console.log(str.match(/[1-9]+/g))


// Metacharacters
// Metacharacters are characters with a special meaning:

// Character	Description
// .	Find a single character, except newline or line terminator
// \w	Find a word character
// \W	Find a non-word character
// \d	Find a digit
// \D	Find a non-digit character
// \s	Find a whitespace character
// \S	Find a non-whitespace character
// \b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
// \B	Find a match, but not at the beginning/end of a word
// \0	Find a NULL character
// \n	Find a new line character
// \f	Find a form feed character
// \r	Find a carriage return character
// \t	Find a tab character
// \v	Find a vertical tab character
// \xxx	Find the character specified by an octal number xxx
// \xdd	Find the character specified by a hexadecimal number dd
// \udddd	Find the Unicode character specified by a hexadecimal number dddd
// Quantifiers
// Quantifier	Description
// n+	Matches any string that contains at least one n
// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n
// n{X}	Matches any string that contains a sequence of X n's
// n{X,Y}	Matches any string that contains a sequence of X to Y n's
// n{X,}	Matches any string that contains a sequence of at least X n's
// n$	Matches any string with n at the end of it
// ^n	Matches any string with n at the beginning of it
// ?=n	Matches any string that is followed by a specific string n
// ?!n	Matches any string that is not followed by a specific string n



