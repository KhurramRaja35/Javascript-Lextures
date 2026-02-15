localStorage.setItem("name","kbr2")




//setitem
let key = prompt("eneter key u want to set")
let value = prompt("enter value u want to set")
localStorage.setItem(key, value)

//getItem
console.log(`The value at ${key} is ${localStorage.getItem(key)/*this thing is written to get the value against the key*/}`)


//removeItem and clear()
if (key == "red" || key == "pink"){
    localStorage.removeItem(key)
}

if(key==0){
    localStorage.clear();
}


//.length :- the no of stored item
console.log(localStorage.length)



//.key(index) --> get the key on the given position..
console.log(localStorage.key(0))

console.log(localStorage.key(1))

console.log(localStorage.key(2))

console.log(localStorage.key(3))

console.log(localStorage.key(4))

console.log(localStorage.key(5))


//we can get and set values like an object

localStorage.one = 1;
alert(localStorage.one);
delete localStorage.one;


// Important Notes

//keys and values both must be strings (agr ap number b dalo gy to na to wo stroe ho ga to string ki form  me)
//we can use 2 methods to store objects in localStorage
//JSON.stringify(object) ---> converts objects to strings
//JSON.parse(stringify) ---> converts strings to objects/ must be a valid json like double qoutes etc