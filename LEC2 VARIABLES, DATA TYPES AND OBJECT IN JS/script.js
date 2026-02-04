console.log("HEY THIS LEC 2 OF JS")

var a = 5;
var b = 10;
var c = "KBR";

console.log(a + b)
console.log(typeof a , typeof b , typeof c)

// let vs var view in notes..........

// primitive data types:- we'll study symbol later the rest of six are here....

let x = "KBR";
let y = 22;
let z = 6.99;
const p = true;
let q = undefined;
let r = null;

console.log( x, y , z , p ,q  , r)
console.log( typeof x, typeof y , typeof z , typeof p ,typeof q  , typeof r)

// OBJECT:-

let o = {
    // key = value ,
    "name" : "KBR" ,
    "job code": 3037,
    "is_handsome": true
}

console.log(o);

o.salary =" 10lakhs";

console.log(o)
// altering the value 
o.salary = " 15 lac ";

console.log(o)


// QUICK QUIZ:-

let s = {
    Name : "KBR" ,
    "PHONE NUMBER" : "031298978" ,
    MARKS : "35/40"
}
console.log(s)

let st = "KBR";
console.log( st + 3);

// PRACTICE SET 1 QUESTION 5:-
const dict ={
    appreciate : "recognize the full worth of." ,
    ataraxia: "state of freedom from anxiety " ,
    yakka : " work , specially hard work"
}
console.log(dict)
dict.appricity = "the warmth of sunlight during winter";
console.log(dict)
// dict = 1;
console.log(dict.yakka)
// or console.log(dict[yakka])


//q4
// Demonstration: adding a new key to a `const` object (allowed)
dict.newWord = "to test adding key";
console.log('new key added:', dict.newWord, dict);


