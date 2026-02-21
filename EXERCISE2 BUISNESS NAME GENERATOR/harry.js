// second answer:-

let random = Math.random();
console.log(random)
// it generate a random number between 0 to 1...
// to break in intervals-->>> 0 0.33 0.66 1
let first , second , third ;

// CREATING FIRST NAME:-
if (random < 0.33){
    first = "CRAZY"
} 
else if (random < 0.66 && random>=0.33 ){
    first = "AMAZING"
}
else {
    first = "FIRE"
}
// CREATING 2ND NAME:-
let ranom = Math.random();
console.log(ranom)
if (ranom < 0.33){
    second = "ENGINE"
} 
else if (ranom < 0.66 && ranom>=0.33 ){
    second = "FOODS"
}
else {
    second = "GARMENTS"
}
// CREATING 3RD NAME:-
let ran = Math.random();
console.log(ran)
if (ran < 0.33){
    third = "BROS"
} 
else if (ran < 0.66 && ran>=0.33 ){
    third = "LIMITED"
}
else {
    third = "HUB"
}

console.log(`${first} ${second} ${third}`)