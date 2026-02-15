// difficult one:-------------------------------
// The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.


function filterProducts(products, criterion) {
    return products.filter(product => {
        return Object.keys(criterion).every(key => {
            return product[key] === criterion[key];
        });
    });
}

// Example usage:
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
    { id: 2, name: "Shirt", category: "Apparel", price: 50 },
    { id: 3, name: "Phone", category: "Electronics", price: 500 },
    { id: 4, name: "Shoes", category: "Apparel", price: 80 }
];

const criterion = { category: "Electronics" };
const filteredProducts = filterProducts(products, criterion);
console.log(filteredProducts); 
// Output: 
// [
//     { id: 1, name: "Laptop", category: "Electronics", price: 1000 },
//     { id: 3, name: "Phone", category: "Electronics", price: 500 }
// ]