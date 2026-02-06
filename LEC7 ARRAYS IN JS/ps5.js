//PS5
//Q1:-
// let arr = [1,2,3,4,5,6]
// console.log(arr)
// let a = Number.parseInt(prompt("WRITE THAT YOU WANT TO ENTER IN ARRAY"));
// console.log(arr.push(a))

// Q2:-
// let arr = [1,2,3,4,5,6]
// let a;
// do{
//     let a = prompt("WRITE THAT YOU WANT TO ENTER IN ARRAY");
//     a = Number.parseInt(a)
//     arr.push(a);
// }while ( a!=0);
// console.log(arr)

//Q3:-
// let a = [5 , 7 , 9 , 10 , 15 , 20 , 40 , 60]

// const div_by_ten = e => {
//     if(e%10==0){
//         return true
//     }
//     return false
// }

// console.log(a.filter(div_by_ten))

//Q4:-
let a = [5 , 7 , 9 , 10 , 15 , 20 , 40 , 60]

const square = e => {
    return e*e
}
let n = a.map(square)

console.log(n)

//Q5:-
// simple no rocket science do visit exercise 3:-
let arr = [1,2,3,4,5]

let fac = arr.reduce((x1 , x2)=>{
    return x1*x2
})// ap esy bahir b ak function bna skty hyn jesy upr banaya r esy direct b arrow function dal skty hyn.

console.log(fac);