//---------------------------------------------LOOPS IN ARRAYS:-
let a = [1,2,3,4,5,6,900]


//clasical for loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index] ;
//     console.log(a, element)
// }

//-------for each loop:-

a.forEach( (value , index , arr) => {
    console.log(value , index , arr)
});
//it will give the value of element (in first case it is 1) and than index(in 1st case its 0) of that element and then the whole array


//----------for in loop basically for objects

// let obj = {
//     a : 1 ,
//     b : 2 ,
//     c : 3
// }

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key ,  element)
//     }
// }


//--------------for of loop basically for arrays:-

// for (const iterator of a) {
//     console.log(iterator)
// }

