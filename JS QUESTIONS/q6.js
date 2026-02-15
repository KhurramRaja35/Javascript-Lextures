// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g; //In the regular expression /[aeiouAEIOU]/g, the g stands for "global". It means that the regular expression should find all matches in the string, not just the first one. Without the g flag, the regular expression would stop after finding the first match
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}

// Example usage:
const inputString = "Hello World!";
console.log(countVowels(inputString)); // Output: 3