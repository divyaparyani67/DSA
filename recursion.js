//fibionacci problem
function recursiveFibionacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibionacci(n - 1) + recursiveFibionacci(n - 2);
}

console.log(recursiveFibionacci(1));
console.log(recursiveFibionacci(0));
console.log(recursiveFibionacci(6));

//Big O -O(2^n) performace is terrible it is not suitable in fibionacci sequence

//factorial problem

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));

// Big O  = O(n)
