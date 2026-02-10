//EVENT REFERENCES | MDN (TO LEARN MORE ABOUT EVENTS)
let button = document.getElementById("btn");
button.addEventListener("dblclick" , ()=>{
    // alert("i am clicked")
    document.querySelector(".box").innerHTML = "I AM CHANGED...."
})//.addEventListener( "name of the mouse event", (fuction that you want to perform)=>{...} )

document.addEventListener("contextmenu",(e)=>{
    alert("dont hack us by right click ....")
    console.log(e)//the second argument is called event object and by executing this statement we can see the event's object on our console...
})
//LIST OF ALL MOUSE EVENTS :- (LIKE click, dblclick,contextmenu & MANY MORE ) KEYBOARD EVENTS(keydown,keypress,keyup) AND MANY MORE:
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

document.addEventListener("keydown" , (e)=>{
    console.log(e.key, e.keyCode)// we will get object k whats happening
})