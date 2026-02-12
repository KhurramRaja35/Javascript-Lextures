// A simple JavaScript code to demonstrate async, await, and fetch

// async function fetchData(url) {
//     try {
//         let response = await fetch(url);
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchData('https://jsonplaceholder.typicode.com/posts/1');


// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve(455) 
//         }, 3000);
//     });
// }

// im duplicating this function to make a proper scenario and also understand the use of fetch api in async and await....
async function getData() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   return 455;
    let x = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json; Charset=UTF-8',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ 
            title: 'foo', 
            body: 'bar', 
            userId: 1 }) // body data type must match "Content-Type" header
    });
    let data = await x.json();
    return data;

}

async function main() {
    
console.log("LOADING MODULES");
console.log("DOING SOME THING ELSE");
console.log("LOAD DATA");

let data = await getData();

console.log(data);
console.log("PROCESS DATA");
console.log("task 2");

}

main();// now this is the another way of doing the same thing that we do with promises using await and async.. cool na..?

// data.then((v) => { // ye to promise wali approach hai but hm ab await use krenge jo k upr wali example me hai..
//     console.log(data);
//     console.log("PROCESS DATA");
//     console.log("task 2");
// });
