let a = prompt("Enter a number?");

let b = prompt("Enter another number?");

if (isNaN(a) || isNaN(b)) {
  throw new Error("One or both of the inputs are not a number");
  
}

// try {
//     console.log("The sum of a and b is " , (parseInt(a) + parseInt(b))*x);
// } catch (error) {
//     console.log("jni error aaa geya :( " +" error name:" + error.name + " occurred: " + error.message + " error stack: " + error.stack + " line number: "+error.lineNumber);
// }
// finally{
//     console.log("all the files have been closed successfully");
// }
// now this is simple but to understand this finally clause we will se this in a function ,,, i'm comenting out the above snippet and writing a function below

function main() {
    let x  = 1;
    try {
        console.log("The sum of a and b is " , (parseInt(a) + parseInt(b))*x);
        return true
    } catch (error) {
        console.log("jni error aaa geya :( " +" error name:" + error.name + " occurred: " + error.message + " error stack: " + error.stack + " line number: "+error.lineNumber);
        return false
    }
    finally{
        console.log("all the files have been closed successfully");
    }
}

main();
// now if u look in console log even the fuction is returning false the finally block is executed and the message is printed in console log no matter what .. so that's why we use it..
