console.log("EASY EXERCISE BUT U HAVE TO GET THIS RANDOM THING CZ ITS REPEATING AGAIN AND AGAIN AND I'M FORGETTING IT AGAIN AND AGAIN.. LOOK IN THE REGISTER NOTES....")

let boxes = document.getElementsByClassName("box");
console.log(boxes);

function getRandomColors() {
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);

    return `rgb(${val1},${val2},${val3})`
}




Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColors()
    e.style.color = getRandomColors()
});