// PRACTICE SET 3:-
//Q1:-

let obj = {
    harry : 98 ,
    rohan : 70 ,
    akash : 0
}

//THIS IS MY ANSWER:
// for (let index = 0; index < 1; index++) {
//     // const element = obj[index];
//     console.log(obj)
    
// }
//THIS IS HARRY'S ANSWER:
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     console.log("THE MARKS OF " + Object.keys(obj)[index] + " ARE " + obj[Object.keys(obj)[index]]);
    
// }


//Q2:-
//THIS IS MY ANSWER.
// for (const key in obj) {
//      {
//         const element = obj[key];
//         console.log(key , element)
//     }
// THIS IS HARRY'S ANSWER:
for (const key in obj) {
    
        console.log("THE MARKS OF " + key + " ARE " +  obj[key])
    
}

// Q3:- IN REPLET.........
let cn=43;
let i;
while(i!=cn){
    i = prompt("ENTER YOUR NUMBER")
    console.log("TRY AGAIN");
}
console.log("YOU HAVE ENTERED THE CORRECT NUMBER ;)");