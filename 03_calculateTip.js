function calculateTip(billAmount, tipPercentage) {
    // Write your code here
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return number(totalAmount.toFixed(2));
}
// Bug Fix Code 

function calculateTip(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    return totalAmount.toFixed(2);
}
// Do not modify the below lines
module.exports = { calculateTip };

