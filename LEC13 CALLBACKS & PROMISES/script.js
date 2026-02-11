console.log("KBR IS  A HACKER")
console.log("R IS  A HECKER")

setTimeout(() => {
    console.log("I AM INSIDE SETTIMEOUT")
}, 0);
setTimeout(() => {
    console.log("I AM INSIDE SETTIMEOUT 2")
}, 1000);

console.log("THE END")
//THE ABOVE WAS ALL ABOUT ASYNCHRONOUS NATURE OF JAVASCRIPT..

const ch = ()=>{
    console.log("NOTHING...")
}

const callback = (arg , ch)=>{
    console.log(arg)
    ch();
}

const loadScript = (src , callback)=>{
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => callback("kbr", ch);
    script.onerror = () => callback("error", ch);
    document.head.append(script);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//callback means k hm function ko as a variable pass kr skty hyn dsry function me r dsry function ki mrzi wo jb call kry isy...

//avoid callback hell like in the above example ch is... its also called pyramid of doom...


//-----------------------PROMISES:- 
