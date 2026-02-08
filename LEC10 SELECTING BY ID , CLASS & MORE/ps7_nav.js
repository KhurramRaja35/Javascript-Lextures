console.log("CHANGING THE COLOR OF THE FIRST ELEMENT IN NAVBAR")

// let bar=document.body.children;
// console.log(bar)
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";// why have we written [] well if we only console.log the tag name statement and ask for the childnodes of nav it will give us a collection of element which are collections but simply to access any of the  them we use indexes like array so at index 0 1st element lies on 1 second and so on.... well this is a tough concept pactice practice n practice.....



//Q2:-
// we'll go with the same example.....
let bar = document.getElementsByTagName("nav")
//AT childNode[0] :- UL AT childNode[1] LI... 
bar[0].childNodes[1].firstElementChild.style.color="green"
bar[0].childNodes[1].lastElementChild.style.color="green"


//if you want to understand the above two line look in the flow below statement + output JUST 1 CHANGE CAR IS USED OTHER THAN BAR....

// S:-let car = document.getElementsByTagName("nav");
// O:-undefined

// S:-car[0]
// O:-<nav>​…​</nav>​

// S:-car[0].children
// O:-HTMLCollection [ul]0: ullength: 1[[Prototype]]: HTMLCollection

// S:-car[0].children[0].children
// O:-HTMLCollection(5) [li, li, li, li, li]

// S:-car[0].children[0].firstElementChild.style.backgroundColor="white"
// O:-'white'

// S:-car[0].children[0].lastElementChild.style.backgroundColor="white"
// O:-'white'

// S:-car[0].children[0].firstElementChild.nextElementSibling.style.backgroundColor="white"
// O:-'white'


//Q3:-
document.querySelectorAll("li").forEach(e => {
    e.style.backgroundColor="yellow"
});
//or in the lecture while doing the getElementBYTagName() i was trying to do the styling but i got an error while doing the same as above so now i'll solve this example with that method to so you can get the answer..

// Array.from(document.getElementsByTagName("li")).forEach( e=>{
//      e.style.backgroundColor = "cyan"
// }) 
// why we have converted the document or the specific elements in document in array?
// well the basic syntax of for Each loop is this it iterates in an array so thats why we have to convert it into array:
// array.forEach(element => {
    
// });