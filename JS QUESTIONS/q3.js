// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


function mirrorMirror(str) {
    const reversedStr = str.split('').reverse().join('');
    return str + " " + reversedStr;
}

// Example usage:
const originalString = "hello my name is khurram";
console.log(mirrorMirror(originalString)); // Output: "helloolleh"