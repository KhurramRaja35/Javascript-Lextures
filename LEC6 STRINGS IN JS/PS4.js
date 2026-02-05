//PRACTICE SET:-
//Q2:-
// ELABORATE THE INCLUDE FUNCTION:-
let sentence = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
let word = "LION"
console.log(sentence.includes(word)); // this statements is saying k either the the word lion is in the sentence if it is then the cout will be true other wise false......
// USING THE TEMPLATE LITERALS AND THIS IS A BIT MORE PROFESSIONAL:-
console.log(`THE WORD ${word} ${sentence.includes(word) ? `IS` : `IS NOT` } IN THE SENTENCE. `)


// Q4:-
let str1 = "PLEASE GIVE ME RS 1000";
console.log(str1.slice(17))
// or
let amount = Number.parseInt(str1.slice("PLEASE GIVE ME RS".length)) //Number.parseINT() function is use to pass a number from a string... exepct that i was looking for .length method
console.log(amount)
console.log(typeof amount) // to check k ye waqy hi number me convert ho geya hai....


//  Q5:-

let str2 = "KHIZAR"
str2[4] = "a"
console.log(str2)
// after running we see we couldnt change the string cz the strings are immutable means k cant be changed
// but you can replace the string or add new strings to the string.... like how we replace the 4th index of the original string but couldnt change it...
let str3 = "KHIZAR"
console.log(str3.replace("A" , "a"))