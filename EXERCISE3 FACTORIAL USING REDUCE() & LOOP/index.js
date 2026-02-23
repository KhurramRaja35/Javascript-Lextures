// FACTORIAL:-

//USING REDUCE:-
// let num = Number.parseInt(prompt("ENTER A NUMBER."))

// if(num<0){
//     console.log("FACTORIAL IS UNDEFINED...")
// }

// let arr = [];

// for (let i = 1 ; i <= num; i++) {
//     arr.push(i);   
// }
// console.log(arr.reduce((a , b) => {
//     return a*b
// }))


// USING ONLY LOOP:-

// let num = Number.parseInt(prompt("ENTER A NUMBER."))

// if(num<0){
//     console.log("FACTORIAL IS UNDEFINED...")
// }

// let fact = 1;

// for (let i = 1 ; i <= num; i++) {
//     fact = fact*i;   
// }

// console.log(fact)

//  ------------HARRY'S ANSWER:-

// let a = 6 ;
function factorial(num) {
    let arr = Array.from(Array(num+1).keys()) // creating array ---> using Arrayfrom() function and inside that we have said Array(num).keys() this means k num jo k basically ak integer hai usko Array(6) ki array bna do kis sy mtlb k elements kya hn gy us array me wo uski keys hn gi keys mtlb k index 0 1 2 3 4 5 ye bny gi array agr num 6 hua...ab is logic me num+1 (mtb k 7) kia to array bny gi 0 1 2 3 4 5 6
    console.log(`${a}!=` + arr.slice(1).reverse().join("*")) // simply 0 slice kr dia ab array bachi 1 2 3 4 5 6 ab simple agli line me reduce function lagao r factorial tyr a ap user se b ly skty.... simply more modified the statement using reverse and join function...
    let c = arr.slice(1).reduce( ( x , b) => {
        return  x*b
    })
    console.log("ANSWER:-"+c)
}

let a = Number.parseInt(prompt("ENTER THE NUMBER YOU WANT TO FIND THE FACTORIAL...."))
factorial(a);