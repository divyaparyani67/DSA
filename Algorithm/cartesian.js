function cartesianProduct(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++)
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }

  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1, arr2));

// Big O - O(mn)

function checkPalindrome(s) {
  const len = s.length;

  //loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    if (s[i] !== s[len - 1 - i]) {
      return " it is not a palindrome";
    }
  }
  return " it is palindrome";
}

console.log(checkPalindrome(""));
