// Problem - Write a JavaScript function findPrimes that takes a positive integer n as input and returns an array of prime numbers 
// less than or equal to n.

module.exports = { findPrimes };

function findPrimes(n) {
     // Write your code inside this function only.
    let result = [];
    for(let num=2 ; num<= n ; num++){
        let isPrime = true;
        
    for(i=2 ; i< n ; i++){
        if(num % 2 === 0){
        isPrime = false;
            break;
        }
    }
    if (isPrime){
        result.push(num);
    }
  }
    return result;
}

