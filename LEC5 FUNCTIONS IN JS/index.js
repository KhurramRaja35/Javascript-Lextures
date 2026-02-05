function nice(name) {
    console.log("HEY " + name + " U ARE NICE.")
    console.log("HEY " + name + " your books ARE NICE too.")
    console.log("HEY " + name + " U are a good boy.")
    console.log("HEY " + name + " U have to work hard.")
    console.log("HEY " + name + " U can do it....")
}
nice("KBR")

function sum(a, b, c = 3) {
    return a + b + c;
}
let result = sum(30, 37, 10);
console.log("THE SUM OF THESE NUMBERS ARE :", result)

//  ARROW FUNCTION:- U CAN STORE A FUNCTION IN A VARIABLE:
//  now in below example func1 is a variable storing a function. x,y,z is the parameter of this arrow function. now u can send this function as a parameter to other function. YA pass kr skty hyn dsry function mein..

const func1 = (x, y, z) => {
    console.log("I AM AN ARROW FUNCTION", x + y + z)
}
func1(30, 5, 5)
func1(15, 5, 5)
func1(35, 5, 5)

// PS3
// Q4:-
// function mean(p,q,r,s,t,u,v) {
//     return  (p+q+r+s+t+u+v)/7;
// }
// let ans = mean(1,2,3,4,5,6,7);
// console.log(ans)


// using arrow key function:-
const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4
}
console.log(mean(4, 5, 6, 7))