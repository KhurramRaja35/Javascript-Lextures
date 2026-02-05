console.log("TODAY WE WILL LEARN ABOUT STRINGS")

let a  =  "KHURRAM" ; 
console.log(a)

//to access each letter seperately we will use index number(index number starts from zero..):-

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])

//.length  is  a property of string  used to get the length of the string...
console.log(a.length)

let my_name = "KBR"
let friend = "HARRY"

console.log("MY NAME IS " + my_name +" AND MY FRIEND NAME IS " + friend)
// the same line of code using template literals:-  `` for strings and ${} for variables.
console.log(`MY NAME IS ${my_name} AND MY FRIEND NAME IS ${friend}`)

// ESCAPE SEQUENCE CHARACTERS:
// let q = " roh`an"
// let q = " roh\"an"
// let q = " roh \n an"
// let q = " roh \t an"
let q = " roh \r an"
console.log(q)

//to.LowerCase() and upper case are the functions 
let p = "AFGHANISTAN"
// console.log(p.toLowerCase())
// console.log(p.toUpperCase())
// console.log(p[0])
console.log(p.slice(2 , 6))
console.log(p.slice(2)) //YE INDEX 2 SE AGY SARY LEETERS PRINT KR DE GA

console.log(p.replace("AFGHAN", "PAK")) //pehly wo likhein gy jo replace karna chata r phr comma k baad wo likhein gy jis se replace karna chaty.... lkn yad rhy srf 1st occurance hi replace ho gi i mean k agr string k andr do jafgha afghan hota to srf phly waly ki jagha pak aye ga 2sri occurance wese hi rhy gi...


console.log(p.concat(a)) // this is how u can concatinate two stings using concat() function.. u can also add more strigs using that look at example below/...

console.log(p.concat( "\n" , a , " RAJA" , " ASIM MUNEER" , " WORK HARD"))



let r = "  KH U   R R A  M  "
console.log(r)
console.log(r.trim()) // it removes the leading and trailing ya akhir wali white spaces....

// some other functions
console.log(p.charAt(0)) // zero is the index this is how we can find the character at the given index like in this case 0o...
console.log(p.indexOf("G")) // this is how we can find the index of the character now it is giving us -1 cz i have entered a character that is not in the above string ...if i enetr G it will give us the correct index see.
console.log(p.startsWith("AF"))// this how we can find k kya string a se start hoti hai.... COUT>>> TRUE
console.log(p.endsWith("TAN"))// this how we can find k kya string TAN PY END  hoti hai


//  strings are immutabale cant change them after declaring can create new strings but cant change them

console.log(p)