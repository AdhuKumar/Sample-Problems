/*Problem - Write a JavaScript function countOccurrences that takes a string and a character as input and returns the count of 
occurrences of that character in the sentence string.*/

function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

// Using .reduce() Method

function calculateTotal(cart){
    
    let totalPrice = cart.reduce(function(accumlater , currentItem){
    return accumlater + (currentItem.price * currentItem.quantity);
    },0);
    
    return totalPrice;
}

// Do not modify the below lines
module.exports = { countOccurrences };