// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validatePassword(password) {
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const hasDigit = /\d/;

    return minLength.test(password) &&
           hasUpperCase.test(password) &&
           hasLowerCase.test(password) &&
           hasDigit.test(password) &&
           hasSpecialChar.test(password);

}

// Example usage:
const password = "Kbr12345@";
console.log(validatePassword(password)); // Output: true