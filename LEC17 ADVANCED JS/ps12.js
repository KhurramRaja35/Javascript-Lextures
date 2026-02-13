// setTimeout(() => {
//     console.log("hello \n world!")
// }, 2000);

function avg(a,b,c,d,e,f) {
    return (a+b+c+d+e+f)/6
}

let arr  = [1,2,3,4,5,6]

console.log(avg(...arr))



function promise(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am resolved after n time ;)")
        }, n);
    })
}

(async () => {
    let a = await promise(5000);
    console.log(a);
    let b = await promise(300);
    console.log(b , "2")
})()


function simpleIntrest(p,r,t) {
    return (p*r*t)/100   
}

console.log(simpleIntrest(1000,5,2))