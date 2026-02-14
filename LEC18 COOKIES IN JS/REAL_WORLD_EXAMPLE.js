// ==========================================
// REAL-WORLD SCENARIO: E-Commerce Shopping Cart with Cookies
// ==========================================

// SCENARIO: A user browses an online store, adds items to cart, 
// closes the browser, comes back next day - their cart is STILL THERE
// This is done using cookies!

// ==========================================
// 1. SHOP ITEM STRUCTURE
// ==========================================
const shopItems = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 2000 },
    { id: 4, name: "Monitor", price: 15000 }
];

// ==========================================
// 2. CART MANAGEMENT FUNCTIONS
// ==========================================

// Function to add item to cart and save in cookie
function addToCart(itemId, quantity = 1) {
    // Step 1: Get existing cart from cookie
    let cart = getCartFromCookie();
    
    // Step 2: Check if item already exists in cart
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        const item = shopItems.find(item => item.id === itemId);
        if (item) {
            cart.push({ ...item, quantity: quantity });
        }
    }
    
    // Step 3: Save updated cart back to cookie (expires in 30 days)
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    document.cookie = `cart=${encodeURIComponent(JSON.stringify(cart))}; path=/; expires=${expiryDate.toUTCString()};`;
    
    console.log(`✓ Added ${item.name} to cart`);
}

// Function to retrieve cart from cookie
function getCartFromCookie() {
    const cookies = document.cookie.split('; ');
    const cartCookie = cookies.find(cookie => cookie.startsWith('cart='));
    
    if (cartCookie) {
        try {
            const cartData = decodeURIComponent(cartCookie.split('=')[1]);
            return JSON.parse(cartData);
        } catch (e) {
            return [];
        }
    }
    return [];
}

// Function to display cart contents
function displayCart() {
    const cart = getCartFromCookie();
    
    if (cart.length === 0) {
        console.log("🛒 Your cart is empty");
        return;
    }
    
    console.log("\n📦 SHOPPING CART:");
    console.log("─".repeat(50));
    
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        console.log(`${index + 1}. ${item.name} - Rs${item.price} x ${item.quantity} = Rs${itemTotal}`);
    });
    
    console.log("─".repeat(50));
    console.log(`Total Items: ${cart.length} | Total Price: Rs${total}\n`);
}

// Function to remove item from cart
function removeFromCart(itemId) {
    let cart = getCartFromCookie();
    cart = cart.filter(item => item.id !== itemId);
    
    if (cart.length === 0) {
        document.cookie = "cart=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    } else {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 30);
        document.cookie = `cart=${encodeURIComponent(JSON.stringify(cart))}; path=/; expires=${expiryDate.toUTCString()};`;
    }
    
    console.log(`✗ Item removed from cart`);
}

// Function to clear entire cart
function clearCart() {
    document.cookie = "cart=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log("🗑️ Cart cleared!");
}

// ==========================================
// 3. USER PREFERENCE STORAGE (Another Real-World Use)
// ==========================================

function saveUserPreferences(preferences) {
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    
    document.cookie = `preferences=${encodeURIComponent(JSON.stringify(preferences))}; path=/; expires=${expiryDate.toUTCString()};`;
    console.log("✓ Preferences saved");
}

function getUserPreferences() {
    const cookies = document.cookie.split('; ');
    const prefCookie = cookies.find(cookie => cookie.startsWith('preferences='));
    
    if (prefCookie) {
        try {
            return JSON.parse(decodeURIComponent(prefCookie.split('=')[1]));
        } catch (e) {
            return null;
        }
    }
    return null;
}

// ==========================================
// 4. USAGE EXAMPLES (What happens in real interviews)
// ==========================================

/*
INTERVIEWER: "How would you implement a shopping cart that persists when the user closes their browser?"

YOU: "I would use cookies to store cart data. Here's how it works:

1. When a user adds an item, I serialize the cart array to JSON
2. I store it in a cookie with an expiry date (e.g., 30 days)
3. When the user returns, I retrieve the cookie and parse it back to JavaScript
4. Special characters are encoded using encodeURIComponent for safety"

Then you show this code!
*/

// ==========================================
// 5. REAL-WORLD INTERVIEW SCENARIO
// ==========================================

console.log("====== SIMULATING USER SESSION ======\n");

// Day 1: User adds items to cart
console.log("DAY 1: User shopping...");
addToCart(1, 1);      // Add 1 Laptop
addToCart(2, 2);      // Add 2 Mouse
addToCart(3, 1);      // Add 1 Keyboard
displayCart();

// Simulate user closing browser (cookie persists on their device)
console.log("User closes browser... cart is saved in cookie.\n");

// Day 2: User comes back (simulated by reading the cookie we just saved)
console.log("DAY 2: User comes back to the website");
displayCart();

// User adds more items
addToCart(4, 1);      // Add 1 Monitor
console.log("User adds Monitor\n");
displayCart();

// User applies preferences
console.log("Saving user preferences...");
saveUserPreferences({
    theme: "dark",
    currency: "INR",
    language: "English",
    notifications: true
});

// Clear for demonstration
clearCart();

// ==========================================
// KEY INTERVIEW POINTS TO REMEMBER
// ==========================================

/*
WHY USE COOKIES FOR THIS?

1. PERSISTENCE: Data survives browser refresh and closing
2. AUTOMATIC SENDING: Cookies automatically sent with every request
3. EXPIRY: Can set expiration dates (unlike localStorage which doesn't expire)
4. SECURITY: HTTP-only cookies can't be accessed by JavaScript (server-side security)

WHY NOT JUST localStorage?

1. LocalStorage never expires - cookies can
2. Cookies can be HTTP-only (more secure for sensitive data like auth tokens)
3. Cookies automatically sent to server - better for session management
4. Cookies have size limits that developers intentionally designed for quick transmission

REAL-WORLD USE CASES:
- Shopping carts (Flipkart, Amazon, Myntra)
- Session tokens (Keep users logged in)
- Analytics (Google Analytics tracks you via cookies)
- Personalization (YouTube remembers your watch history preferences)
- A/B Testing (Show different versions to test features)
- Tracking (Ads follow you across websites)

WHAT COULD GO WRONG:
- XSS attacks stealing cookies (use HTTP-only flag)
- CSRF attacks misusing cookies (use SameSite attribute)
- Privacy concerns (GDPR, cookie consent)
- Cookie bloat (cookies are sent with every request)
*/
