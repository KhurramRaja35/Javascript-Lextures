// PRACTICE SET 2:-
// Q1:-

// let age =12;
// // prompt("WHAT IS YOUR AGE?");
// // PROMPT IS LIKE cin>> and it only works in browser vs code cant read the word browser...
// if ( age > 10 && age < 20){
//     console.log("YOUR AGE LIES BETWEEN 10 & 20. " + "YOUR AGE IS :"+ age );
// }
// else {
//      console.log("YOUR AGE DOES NOT LIES IN 10 & 20  " + age);
// }

// Q2:-
let Age = 16;
switch(Age){
    case 10 :
        console.log("U ARE 10 YEARS OLD");
        break;
    case 16 :
        console.log("U ARE 16 YEARS OLD");
        break;
    case 22 :
        console.log("U ARE 22 YEARS OLD");
        break;
    case 28 :
        console.log("U ARE 28 YEARS OLD");
        break;
    case 34 :
        console.log("U ARE 34 YEARS OLD");
        break;
    default:
        console.log("THANKS FOR ENTERING YOUR AGE.")
}

// Q3 & Q4:-
let num = 9;
if (num % 2== 0 ){
    console.log("your number is divisible by 2")
}
else if(num%3==0){
    console.log("your number is divisible by 3")
}
else {
    console.log("your number is not divisible by 2 or 3")
}

// Q5:-

let yAge= 15;
(yAge> 18 ) ? console.log("YOU CAN DRIVE. YOOUR AGE IS " + yAge) : console.log("YOU CANNOT DRIVE. YOUR AGE IS :"+yAge);
// if (condition) ? means then this statement of clog : means else execute this statement.....
