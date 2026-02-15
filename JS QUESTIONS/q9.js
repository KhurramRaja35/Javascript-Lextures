// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(order) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000ms and 6000ms
        setTimeout(() => {
            resolve(`Order for ${order} has been placed successfully!`);
        }, delay);
    });
}

// Example usage:
placeOrder("Laptop").then((message) => {
    console.log(message); // Output: Order for Laptop has been placed successfully! (after a random delay)
});