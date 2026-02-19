// let random = Math.random();
// console.log(random);
// faulty calculator:-
// question:-
/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/
//SIMPLE CALCULATOR:-
// let a = prompt("ENTER FIRST NUMBER.")
// let b = prompt("ENTER SECOND NUMBER.")
// let c = prompt("ENTER THE OPERATION YOU WANT TO PERFORM.");

// switch (c){
//     case ("+"):
//         console.log((+a)+(+b));
//         break;
//     case ("-"):
//         console.log(a-b);
//         break;
//     case ("/"):
//         console.log(a/b);
//         break;
//     case ("*"):
//         console.log(a*b);
//         break;
//     case ("**"):
//         console.log(a**b);
//         break;
//     default:
//         console.log("THANK YOU FOR USING ME......")    
// }




//NOW WELL'LL MOVE TO FAULTY ONE WITH THE ABOVE GIVEN CONDITIONS:-

let random = Math.random();
console.log(random);
let a = prompt("ENTER FIRST NUMBER.")
let b = prompt("ENTER SECOND NUMBER.")
let c = prompt("ENTER THE OPERATION YOU WANT TO PERFORM.");


if ( random > 0.1) {
    switch (c){
            case ("+"):
                console.log((+a)+(+b));
                break;
            case ("-"):
                console.log(a-b);
                break;
            case ("/"):
                console.log(a/b);
                break;
            case ("*"):
                console.log(a*b);
                break;
            default:
                console.log("YOU HAVE ENTERED THE WRONG OPERATOR..")    
        }
}
else{
    switch (c){
            case ("+"):
                console.log(a-b)
                break;
            case ("-"):
                console.log(a/b);
                break;
            case ("/"):
                console.log(a**b);
                break;
            case ("*"):
                console.log((+a)+(+b));
                break;
            default:
                console.log("YOU HAVE ENTERED THE WRONG OPERATOR..")    
        }
}

// coding like a pro using github copilot:-

// let random = Math.ceil(Math.random()*100);
// console.log("THE RANDOM NUMBER IS "+random);
// let a = Math.ceil(Math.random()*100);
// console.log("THE 1ST NUMBER IS "+a);
// let b = Math.ceil(Math.random()*100);
// console.log("THE 2ND NUMBER IS "+b);
// let op = ["+","-","*","/"];
// let randomOp = op[Math.floor(Math.random()*op.length)];
// console.log("THE OPERATOR IS "+randomOp);
// if (random > 33) {
//     switch(randomOp){
//         case "+":
//             console.log(a+b);
//             break;
//         case "-":
//             console.log(a-b);
//             break;
//         case "*":
//         console.log(a*b);
//         break;
//         case "/":
//             console.log(a/b);
//             break;
//         default:
//             console.log("YOU HAVE ENTERED THE WRONG OPERATOR..")
//     }
// }
// else{
//     switch(randomOp){
//         case "+":
//             console.log(a-b+1);
//             break;
//         case "-":
//             console.log(a+b+1);
//             break;
//         case "*":
//             console.log(a/b+1);
//             break;
//         case "/":
//             console.log(a*b+1);
//             break;
//         default:
//             console.log("YOU HAVE ENTERED THE WRONG OPERATOR..")    
//     }
// }