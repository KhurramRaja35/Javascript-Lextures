//======>>> INNER HTML & TEXT:-
document.querySelector(".box")
//<div class=​"box">​HEY I AM A BOX.​</div>​
document.querySelector(".box").innerHTML
//'HEY I AM A BOX.'
document.querySelector(".container").innerHTML
//'\n        <div class="box">HEY I AM A BOX.</div>\n    '
document.querySelector(".box").innerText
//'HEY I AM A BOX.'
document.querySelector(".container").innerText
//'HEY I AM A BOX.'

//-----AFTER ADDING TWO BOXES:-
document.querySelector(".container").innerHTML
//'\n        <div class="box">HEY I AM A BOX.</div>\n        <div class="box">HEY I AM A BOX.</div>\n    '
document.querySelector(".container").innerText
//'HEY I AM A BOX.\nHEY I AM A BOX.'

//======>>> OUTER HTML(diff. b/w inner n outer is written in notes)
document.querySelector(".container").outerHTML
//'<div class="container">\n        <div class="box">HEY I AM A BOX.</div>\n        <div class="box">HEY I AM A BOX.</div>\n    </div>'
document.querySelector(".box").outerHTML
//'<div class="box">HEY I AM A BOX.</div>'


//=======>>>> .textContent:-

let xy = document.querySelector("div");
console.log(div.textContent);  // Outputs the text inside the div and its children

let xyz = document.querySelector("div");
div.textContent = "This is plain text";  // Replaces the existing content with plain text

//^^^^^^^^^^^^^^^^^^^^^^^^:-
// When to Use .textContent:

// Best Practice for Most Use Cases: Use .textContent when you need to get or set the text content of an element, especially when you don’t care about CSS styling or visibility and just want the raw text.

// Performance: It’s faster and doesn't trigger a reflow, so it’s better for performance-critical applications.

// When to Use .innerText:

// Need for Visible Text Only: Use .innerText when you specifically need to work with the text as it is displayed to the user (e.g., when dealing with user-visible content that might be hidden or styled in certain ways).

// Whitespace Management: If you want to reflect the rendered appearance of text, including the collapse of whitespace and line breaks, then innerText might be appropriate


//======>>>.TAG NAME:-
document.querySelector(".container").tagName
//'DIV'

//======>>>.nodeNAME:-
document.querySelector(".container").nodeName
//'DIV'

//======>>>.textCONTENT:-
document.querySelector(".container").textContent
//'\n        HEY I AM A BOX.\n        HEY I AM A BOX.\n    ' explained above

//======>>>.hidden:-
document.querySelector(".container").hidden
//false
document.querySelector(".container").hidden= true// element will hide..
//true

//======>>>CHANGING INNNER HTML:-
document.querySelector(".box").innerHTML="HEY I AM KBR";
//'HEY I AM KBR' (THE HTML OF THE FIRST DIV IS CHANGED..)


//------------------------------ATTRIBUTE METHODS:

//======>>>.hasAttribute :-
document.querySelector(".box").hasAttribute("style") // after adding the style attribute...
//true

//======>>>.getAttribute:-
document.querySelector(".box").getAttribute("style");
//'color: grey;'

//======>>>.setAttribute:-
document.querySelector(".box").setAttribute("style" , "color:red");
document.querySelector(".box").setAttribute("style" , "visibility:hidden");

//======>>>.attribute(to get all the attributes):-
document.querySelector(".box").attributes
//NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

//========>>>>.removeAttribute():-
document.querySelector(".box").removeAttribute("style") // style attribute has been removed..

//==============================>>> .designMode:-
document.designMode = "on"; 

//---------------------------------DATA- ATTRIBUTE METHOD:
//==========>>>.dataset:-(prints all data- attributes..)
document.querySelector(".box").dataset
//DOMStringMap {createdby: 'KBR', ideaby: 'Harry'}
document.querySelector(".box").dataset.createdby //(if u want the specific data attribute wite its name... like in given example..)
//'KBR'

//-------------------INSERTION METHODS:-

// insertion methods are studied in example shown in index,.html file....

//this methode is for nodes how to add nodes simply...

//.creatElement("div") to creat an div element. 

// .append(div)
// .prepend(div)
// .before(div)
// .after(div)
// .replaceWith(div)

//this is to add in html string...
//=======>>>> .insertAdjacentHTML/TEXT/ELEMENT:-

//1ST ARGUMENT:-
// beforeend
// afterend
// beforestart
// afterstart
//SYNTAX:-.inserAdjacentHTML("1ST ARGUMENT","2ND ARGUMENT")
//in case of IDHTML 2ND ARGUMENT IS :-"<p>HELLO</p>"

//SYNTAX:- .insertAdjacentElement("1ST ARGUMENT","2ND ARGUMENT")
//in case of IDELEMENT 2ND ARGUMENT IS :- newDiv(the name of the element to be inserted without qoutation...)

//SYNTAX:- .insertAdjacentText("1ST ARGUMENT","2ND ARGUMENT")
//in case of IDText 2ND ARGUMENT IS SIMPLE TEXT INSIDE QOUTATION NO NEED TO WRITE THE TAG IF U WRITE IT WILL PRINT AS IT IS...


//===============>>>>>>>REMOVAL
newDiv.remove()//PRACTICAL EXAMPLE IN INDEX.HTML FILE

//----------- CLASSNAME & CLASSLIST:-

document.querySelector(".container").classList
//DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']0: "container"1: "red"2: "bg-green"length: 3value: "container red bg-green"[[Prototype]]: DOMTokenList
document.querySelector(".container").className
//'container red bg-green'

document.querySelector(".container").classList.add("Harry")//to add a new class into the class list.

document.querySelector(".container").classList.remove("red")//to remove a class from the class list.


//use case senario:-
document.querySelector(".container").classList.toggle("red")
//false
document.querySelector(".container").classList.toggle("red")
//true
//jo jo css mjy lagani hai wo me ak class me likh ln ga r phr usy toogle karta rahaon ga jesy mjy istemal karna hua...