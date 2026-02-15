// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubleTrouble(arr) {
    return arr.map((value, index) => {
        if (index > 0 && value === arr[index - 1]) {
            return value;
        }
        return value * 2;
    });
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5];
console.log(doubleTrouble(inputArray)); // Output: [2, 4, 2, 6, 8, 4, 10]