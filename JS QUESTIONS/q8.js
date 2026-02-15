// Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function asyncArrayMapping(arr) {
    return arr.map(num => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(num * 2);
            }, 500);
        });
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
asyncArrayMapping(numbers).forEach(promise => {
    promise.then(result => console.log(result)); // Output: 2, 4, 6, 8, 10 (each after 500ms delay)
});