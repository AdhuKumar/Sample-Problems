/* Problem -Imagine you're building an e-commerce website. Write a JavaScript function calculateTotal that takes an array of products 
(objects) and calculates the total cost of the items in the shopping cart.
Each product object has the following properties:
name: The name of the product (string).
price: The price of the product (number).
quantity: The quantity of the product in the cart (number) */

function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

//Bug Fix code
function calculateTotal(cart){
    
    let totalPrice = cart.reduce(function(accumlater , currentItem){
    return accumlater + (currentItem.price * currentItem.quantity);
    },0);
    
    return totalPrice;
}


// Do not modify the below lines
module.exports = { calculateTotal };