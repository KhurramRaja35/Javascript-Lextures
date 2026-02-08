console.log("TODAY'S LEC IS IMP")
// i have done accesing the elements using child ....now we will look for new one..

//-------------.getElementsByClassName():-

// let jogi = document.getElementsByClassName("box");
// console.log(jogi);

//now how will i get the elements so look..

// jogi[2].style.backgroundColor = "red";

//-------------.getElementById():-
// document.getElementById("yellow").style.backgroundColor="yellow";

//----------.queryselector():-
// document.querySelector(".box").style.backgroundColor="violet";

//----------.queryselectorALL():-

console.log(document.querySelectorAll(".box"))
//this is not simple as previous one we have to use a loop to acces each element and then style them...

document.querySelectorAll(".box").forEach((e)=>{
    // console.log(e)
    e.style.backgroundColor="violet";
})

//-------------.getElementByTagName():-

console.log(document.getElementsByTagName("div"));
//view ps7_nav.js file for more info..


//------------------.matches("CSS SELECTOR")

console.log("THIS WORK IS DONE IN CONSOLE SECTION OF THE WEB PAGE.")
// e = document.querySelectorAll(".box")
// e[3].matches("#yellow.box")
// true


//------------------.closest("CSS SELECTOR"):- to look for the nearest ansestor that matches the given css selector,,,the element itself is checked:

//e[4].closest(".box")
//<div class=​"box" style=​"background-color:​ violet;​">​BUPINDER JOGI 4​</div>​
//here the element itself is checked.

// e[4].closest(".container")
//<div class=​"container">​…​</div>​

//e[4].closest("body")
//<body>​…​</body>​

//e[4].closest("html")
//<html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​

//------------------.contains("CSS SELECTOR"):- return true if elem b is inside elem A or elem A===elem b else false....

//document.querySelector(".container").contains(e[2])
//true

//document.querySelector(".container").contains(document.querySelector(".container"))
//true
//this is example of elem A === elem b

//document.querySelector(".container").contains(document.querySelector("body"))
//false

//document.querySelector("body").contains(document.querySelector(".container"))
//true



// NOW WE WILL MOVE TO PS7 ;)...........