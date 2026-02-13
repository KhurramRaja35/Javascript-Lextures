//IIFE

// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

// (async function main(){
//     let a = await sleep()
//     console.log(a)
// })();





//destructuring
// async function sleep(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

// (async function main(){
//     //destructuring in arrays.......
//     let [x,y,...rest] = [10,20,3,4,5,6,7,8,9] //rest is just a variable wo simple 3,4,5,6,7,8,9 value as an array store kr k rkh ly ga agr hm ... k bgr rest likhyn gy to wo srf 3 ko store kry ga
//     console.log(x,y,rest)


//     //destructuring in objects........
//     let obj={
//         a:1,
//         b:2,
//         c:3,
//     }

//     let {a,b}=obj // is ka kya mtlb hua k a or b ki value ko is object me se nikal lo... to 1 aor 2 aa jaye ga 
//     console.log(a,b)
//     //to knhi knhi hmra object bht bara hota aur usme se srf 2 ya 3 chzyn hmy chaiye hotien hyn to hm unhy pullout kr skty hyn easily using destructuring... esa hmy projects me krnuy ki bht zarort prhti hai...
// })();



//spread syntax


// function sum(a,b,c){
//     return a+b+c
// }
// let arr =[5,6,7]
// console.log(sum(arr[0],arr[1],arr[2])) // to y traditional tareqa tha to kya is chz ko krny ka asan tareeqa b tha? to the answer is yes wo ye hai
// console.log(sum(...arr)) // me simply yhn array ko khol dn ga... ye bol raha hai iski value ko khol do ya spread kr do







// === HOISTING: The Easy Concept ===
// Hoisting = JS moves declarations to the top before execution.
// But: only the NAME is hoisted, not the VALUE (for var/let/const).

// 1) Function Declarations are FULLY hoisted (name + body)
console.log("--- Function Hoisting ---");
console.log(myFunc()); // ✅ Works! Output: "hello from myFunc"
function myFunc(){
    return "hello from myFunc"
}

// 2) var is hoisted and initialized to `undefined`
console.log("--- var Hoisting ---");
console.log(x); // ✅ Logs: undefined (not ReferenceError)
var x = 5;
console.log(x); // ✅ Logs: 5

// 3) let & const are hoisted but NOT initialized (Temporal Dead Zone = TDZ)
console.log("--- let/const Hoisting ---");
// console.log(y); // ❌ Would throw: ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // ✅ Logs: 10

// MEMORY: 
// - Functions: hoisted completely → can call before defining
// - var: hoisted as undefined → can access, but not the value
// - let/const: hoisted but in TDZ → must declare before using
// - Arrow functions: hoisted like var → undefined until assignment line