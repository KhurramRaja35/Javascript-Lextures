// The Coffee Machine:
//     // In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(type) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000ms and 6000ms
        setTimeout(() => {
            resolve(`${type} coffee is ready!`);
        }, delay);
    });
}

// Example usage:
brewCoffee("Espresso").then((message) => {
    console.log(message); // Output: Espresso coffee is ready! (after a random delay)
});