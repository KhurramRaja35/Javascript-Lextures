console.log("NOW WE'LL SEE PROMISES");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PROMISE REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE SETTIMEOUT 1 RESOLVED");
            resolve("PROMISE RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PROMISE 2 REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE SETTIMEOUT 2 RESOLVED");
            resolve("PROMISE 2 RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PROMISE 3 REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE SETTIMEOUT 3 RESOLVED");
            resolve("PROMISE 3 RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PROMISE 4 REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE SETTIMEOUT 4 RESOLVED");
            resolve("PROMISE 4 RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});

// prom1.then((msg) => {
//     console.log(msg);
// }).catch((msg) => {
//     console.log(msg);
// }).finally(() => {
//     console.log("I AM FINALLY BLOCK");
// });



// PROMISE API METHODS:-
//1)Promise.all() - it takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or when the array contains no promises.

// Promise.all([prom1, prom2, prom3, prom4]).then((results) => {
//     console.log("ALL PROMISES RESOLVED");
// }).catch((error) => {
//     console.log("AT LEAST ONE PROMISE REJECTED");
// }).finally(() => {     //finally block will run in any case...
//     console.log("ALL PROMISES HAVE BEEN HANDELED.")});

//ANOTHER WAY OF WRITING THE ABOVE CODE:-

// let p3 = Promise.all([prom1, prom2, prom3, prom4]);
// p3.then((results) => {
//     results.forEach((msg,result) => {
//         console.log(msg,result.status);
//     });
// }).catch((error) => {
//     console.log("AT LEAST ONE PROMISE REJECTED");
// }).finally(() => {
//     console.log("ALL PROMISES HAVE BEEN HANDELED.")
// });


//2) Promise.allSettled() - it takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved or rejected.

// let p4 = Promise.allSettled([prom1, prom2, prom3, prom4]);
// p4.then((results) => {
//     results.forEach((result , index ) => {
//         if (result.status === "fulfilled") {
//             console.log(`Promise ${index+1} resolved :`,result.value);
//         } else {
//             console.log(`Promise ${index+1} rejected :`,result.reason);
//         }
//     });
// }).finally(() => {
//     console.log("ALL PROMISES HAVE BEEN HANDELED.")
// });

//3) Promise.race() - it takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

// let p5 = Promise.race([prom1, prom2, prom3, prom4]);
// p5.then((msg) => {
//     console.log("Race resolved with message:", msg);
// }).catch((msg) => {
//     console.log("Race rejected with message:", msg);
// }).finally(() => {
//     console.log("Race finally block executed.");
// });

//4) Promise.any() - it takes an array of promises and returns a single promise that resolves as soon as one of the promises in the array resolves(not regected one's). If all of the promises are rejected, then it rejects with an AggregateError or <0>returns the first resolved Promise and ignores rejections until one resolves.


// let p6 = Promise.any([prom1, prom2, prom3, prom4]);
// p6.then((msg) => {
//     console.log(".Any resolved with message:", msg);
// }).catch((msg) => {
//     console.log(".Any rejected with message:", msg);
// }).finally(() => {
//     console.log(".Any finally block executed.");
// });

//5) Promise.resolve() - it returns a Promise object that is resolved with a given value. 
// If the value is a promise, that promise is returned; if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise the returned promise will be fulfilled with the value.

// Example using Promise.resolve() with other Promises
let pro1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PRO 1 REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE PRO SETTIMEOUT 1 RESOLVED");
            resolve("PRO 1 RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});

let pro2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        reject("PRO 2 REJECTED BECAUSE DIDN'T MEET THE CONDITION");
    } else {
        setTimeout(() => {
            console.log("I AM INSIDE PRO SETTIMEOUT 2 RESOLVED");
            resolve("PRO 2 RESOLVED AFTER 2 SECONDS.");
       }, 2000);
    }
});

// Using Promise.resolve() with other Promises
let p7 = Promise.resolve(prom1);

p7.then((msg) => {
    console.log("Promise.resolve() resolved with message:", msg);
}).catch((msg) => {
    console.log("Promise.resolve() rejected with message:", msg);
}).finally(() => {
    console.log("Promise.resolve() finally block executed.");
});

//6) Promise.reject() - it returns a Promise object that is rejected with a given reason.
let p8 = Promise.reject("This is a rejected promise");

p8.then((msg) => {
    console.log("Promise.reject() resolved with message:", msg);
}).catch((msg) => {
    console.log("Promise.reject() rejected with message:", msg);
}).finally(() => {
    console.log("Promise.reject() finally block executed.");
});