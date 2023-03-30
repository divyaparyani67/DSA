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

//Big -O(2^n) performace is terrible it is not suitable in fibionacci sequence

//factorial problem
