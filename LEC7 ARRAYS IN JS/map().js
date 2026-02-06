//create a new array using the a given array

let arr = [1,2,3,4,5,6,7,8,9]

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr)

// this was with using a loop but we can also do it with map() lets see:-
const exp = e => {
  return e**2
}

let newArr = arr.map( exp)
//direct method:-
// let newArr = arr.map( e => {
//     return  e**2
// })
console.log(newArr)
//just some practice:-
// let newArr = arr.map( (value , index , arr) => {
//     return  index , arr
// })
// console.log(newArr)



//use of filter() but we also learn how to make function using arrow function approach e is just an argument...
const  greaterThanSeven = ( e => {
    if(e>7){
        return true
    }
    return false
})
console.log(newArr.filter(greaterThanSeven))


// reduce method:- what will this reduce do?... we will give this reduce a function like mul and the it will first apply mul btween first 2 element then there anser with 3 then there answer with 4 and up to so on.. like this(((((1*2)*3)*4)*5)*6)=720

let arr2 = [1,2,3,4,5,6]
const mul = (a,b) => {
    return a*b
}

console.log(arr2.reduce(mul))

// array.from ----------converts string to arrays or create arrays from string just like tostring() fuction

console.log(Array.from("HARRY")) // succesfully converted string into an array