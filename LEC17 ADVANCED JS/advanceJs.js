//IIFE:-

(function IIFE(){
    let username = "guest_user_1";
    console.log(`System boot complete.....Welcome ${username}`)
})()

// console.log(username) error cz variables are locked inside iife ..they cannot leak out into the rest of program.keeping your global scopeclean and safe from bugs..

//Destructuring:-

const gamer = {
  gamerTag: "PixelViking",
  level: 42,
  clan: "Valhalla"
};

const {gamerTag , level} = gamer;

console.log(`${gamerTag} is level ${level}`)


//Spread and Rest Syntax

const vipGuest = ["Alice","Gary"];

const allGuests = [...vipGuest, "Bob" , "Harry"]

function printHostAndGuest(host,...guests){
    console.log(`${host} is Host of the party and the guests are ${guests}`)
}

printHostAndGuest("Allen",...allGuests);

//Local, Global and Block Scope:-

const planet = "Earth";
function insidePlanet(){
    const country = "Pakistan";
    if(true){

        const city = "Muzaffarabad";

        console.log(planet); // accessible anywhere n this file cz global scope
        console.log(country); // accessible inside its parent function cz local scope
        console.log(city);
    }

    // console.log(city) it fails cz its locked inside the if block called block scoped
}

insidePlanet();

// console.log(country) it fails cz its locked inside its function cannot access it out side its local scope



//Hoisting:-

launchrocket();


function launchrocket(){
    console.log("Rocket is launched for the moon")
}


//Hoisting with var, let and const:-


console.log(varVariable);

var varVariable = "Code wont crash just undefined";
// var varVariable = "Code wont crash just undefined";



// console.log(letVariable);
// let  letVariable = "Code will crash cz just js initialzed nothing for me and left me in TDZ.. Reff Error";



// console.log(conVariable);
// const conVariable = "Same as let"