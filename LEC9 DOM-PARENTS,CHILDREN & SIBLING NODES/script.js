console.log("HELLO WORLD")
// let cont = document.body.childNodes[1]

// console.log(cont) browser will read this so we'll write it in console of browser..


//document.body
//document.body.childNodes

//accesing element using .childNodes

//document.body.childNodes[0]
//document.body.childNodes[1]


// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] these text are spaces.. cz enetr jb hm marty hyn wo b ak elemnt mana jaye ga..




// let cont = document.body.childNodes[1](second child like in arrays index)
// undefined
// cont
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

//NOW THIS VARIABLE STORES THE DIV.CONTAINER..CZ NOTHING CAN READ DOCUMENT.BODY.CHILDNODES ITS THE DOM STRUCTURE
//let cont = document.body.childNodes[1]

//cont
//<div class=​"container">​…​</div>​

//accesing element using .firstChild

//cont.firstChild
//#Text

//cont.lastChild
//#text

//accesing using .firstElementChild:-
//what does this mean:
//now text is also the child but now we want the 1st child that is the elemnt so we got div.box1 in terminal similarly for last.
//cont.firstElementChild
//<div class=​"box">​BOX1​</div>​
//cont.lastElementChild
//<div class=​"box">​BOX5​</div>​


//similarly:-
//cont.childNodes[0]===firstChild
//cont.childNodes(cont.childNodes.length-1)===lastChild

//e.g
//elem.haschildNodes() to check that wether element has child nodes or not
//similarly
//cont.childElementCount gives the number of elemnt chlid nodes

//cont.lastElementChild.previousElementSibling..
// we will get box 4 which is the previous element sibling of last element child which is box 4 .. so its a treee like structure dom tree


//Note:-
//child nodes looks likre an array but actually its not an array but a collection.we can use Array.from(collection) to convert it into array..
//Array methods wont work

// cont.lastElementChild.style.color="red" now we can do styling using js 
//cont.childNodes[5].style.backgroundColor="orange"

//--------------WELL THIS WAS ABOUT CHILDS NOW WE'LL SEE HOW WE CAN ACCESS PARENT NODE

//cont.lastElemntChild.parentElement>> thsi is how we will go toward the parents or access the parent through child..parent is container... this is how we will navigate in the tree >>>DOM TREE


// document.body.firstElementChild.children..... this will give us only element children not the text or comment nodes only element node/child of the first eleement child which is div.container... 
// document.body.firstElementChild.children[0]=box1
//  document.body.firstElementChild.children[1]=box2
// document.body.firstElementChild.children[2]=box3
// document.body.firstElementChild.children[3]=box4

document.body.firstElementChild.children[3].nextElementSibling 
// .... we hve seen the previousElementSibling now we have seen the nextElementSibling...
document.body.firstElementChild.children[3].nextElementSibling.style.backgroundColor="pink"
// oh wow it works like that it makes change in browser it written this way but node cant read it so thats why we use console in browser to know which element is selected..


// now we will see table links so making another file for that....