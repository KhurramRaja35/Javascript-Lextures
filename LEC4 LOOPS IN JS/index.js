console.log("LOOPS IN JS");

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// BASIC FOR LOOP....

// for (let i = 0; i < 100; i++) {
//        console.log(a + i);
    
// }

// // BASIC FOR IN LOOP:-

let obj = {
    name : "KBR" ,
    role : "WEB DEV" ,
    company : "CWH"
}
for (const key in obj) {
     {
        // const element = obj[key]
        console.log(key );
        
    }
}

// BASIC FOR OF LOOP:-

for (const c of "HARRY") {
    console.log(c)
}

// BASIC WHILE LOOP:-   (IMP)


// let p = 0;
// while (p<6) {
//     console.log(p);
//     p++;
// }

// BASIC DO WHILE LOOP:-
let p = 10;
do {
    console.log(p);
    p++;
} while (p < 12);