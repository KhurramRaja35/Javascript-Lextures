// The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token, expirationMinutes) {
    const expirationTime = new Date().getTime() + expirationMinutes * 60000; // Calculate expiration time in milliseconds
    const authToken = {
        token: token,
        expiresAt: expirationTime
    };
    localStorage.setItem('authToken', JSON.stringify(authToken));
}

// Example usage:
const token = "abc123";
const expirationMinutes = 30; // Token will expire in 30 minutes
setAuthToken(token, expirationMinutes);