//big-o time complexity

function summation(n) {
  let sum = 0; //executed only 1 time
  for (let i = 1; i <= n; i++) {
    // its just repeating the line 4
    sum += i; // executes 4 times
  }
  return sum; // executes 1 time
}

// the total count is n+2 ( n is the number taken for input)
// n = 100   100 + 2
// n = 1000  1000 + 2

//big-o calculation
function summation(n) {
  return (n * (n + 1)) / 2; //only executes  1 time
}

//nested loops
for(i = 1; i<= n; i++) 
    for (j =1; j <= i; j++); 

