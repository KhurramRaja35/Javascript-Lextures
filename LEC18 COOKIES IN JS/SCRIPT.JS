// console.log(document.cookie)

// document.cookie = "name2=kbr123456789hfbvgf"
// document.cookie = "name= kbr56789"

// let key = prompt("Enter your key")
// let value = prompt("Enter your value")
// document.cookie = ` ${encodeURIComponent(key)} = ${encodeURIComponent(value)}` // this way the special characters are encoded

// document.cookie = "1=2;3=4"  in this way this only print tghe first one which is 1=2 but didnt 3=4 that's why we use cookies path

document.cookie = "user=raja3037; path=/; expires=Sat, 01 Feb 2025 03:18:22 GMT;";
console.log(document.cookie)