module.exports = { signOfProduct };

function signOfProduct(nums) {
     // Write your code inside this function only.
    let product = 0;
    for(i = 0 ; i<nums.length ; i++){
        product *= nums[i];
    }
    if(product > 0){
        return 1;
    }
    else if(product < 0){
        return -1;
    }
    else{
        return 0;
    }
}