//fibonacci sequence

function fibonacci(n) {
  const fib = [0, 1]; // intialize an array with 2 numbers
  for (let i = 2; i < n; i++) {
    //populate the  remaining elements from the third element till n while satisfying condition that every number should be a sum of the previous two numbers

    fib[i] = fib[i - 1] + fib[i - 2]; //adding two previous numbers  to get the sum
  }
  return fib;
}

//Big-O is O(n) linear

//console.log(fibonacci(1));
//console.log(fibonacci(8));
//console.log(fibonacci(29));

//********************** */

//factorial of a number

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

//Big-O is O(n) linear

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));

//Prime Number