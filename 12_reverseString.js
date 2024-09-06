// Problem - Write a JavaScript function reverseString that takes a string as input and returns the string with its characters reversed.

module.exports = { reverseString };

function reverseString(str) {
     // Write your code inside this function only.
    let newStr = str.split('').reverse().join('');
    return newStr;
}