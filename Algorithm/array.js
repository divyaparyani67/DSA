const arr = [1, 2, 3, "Divya"];
arr.push(4); //adds the element
arr.unshift(0); // adds te element in the begining

arr.pop(); //removes the last element
arr.shift(); // removes the first element
const newArr = arr.map(Math.sqrt); //  creates a new array from calling a function for every array element.

//for of loop to iterate through the array
for (const item of arr) {
  console.log(item);
}

console.log(newArr);

//method creates a new array filled with elements that pass a test provided by a function.
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}

//The reduce() method in JavaScript is used to reduce an array to a single value. It works by iterating over each element of an array, applying a callback function to the current and next elements, and returning a single value at the end. The callback function takes two arguments, the accumulator and the current value, and should return the accumulator, which is used as the initial value for the next iteration. It can also take an optional second argument, which is the initial value for the accumulator. Here's an example:

const numbers = [1, 2, 3, 4, 5];

// sum all the numbers in the array using reduce
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // output: 15
//In this example, the reduce() method is used to sum all the numbers in the numbers array by providing an initial value of 0 for the accumulator and adding the current value to it for each iteration.

//The concat() method in JavaScript is used to join two or more arrays, and returns a new array that contains all the elements from the original arrays. The original arrays are not modified.The syntax of the concat() method is:array1.concat(array2, array3, ..., arrayX)The concat() method can take any number of arguments, which are the arrays that need to be concatenated.For example, if you have two arrays, array1 and array2, you can use the concat() method to join them into a single array:

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let concatenatedArray = array1.concat(array2);
console.log(concatenatedArray);
// Output: [1, 2, 3, 4, 5, 6]
//In this example, the concat() method joins array1 and array2 into a new array, concatenatedArray. The original arrays, array1 and array2, remain unchanged.

//In JavaScript, a slice is a method that returns a portion of the array starting from a specified index to the end or up to a specified endpoint.Here is the syntax for using the slice method in JavaScript:array.slice(startIndex, endIndex);The startIndex parameter specifies the index at which to begin the slice, and the endIndex parameter specifies the index at which to end the slice but not include it.If the endIndex parameter is not passed, the slice method will return all elements from the startIndex to the end of the array.Here's an example:

const fruits = ["apple", "banana", "cherry", "orange", "pear"];

const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ['banana', 'cherry']

//In JavaScript, the splice() method is used to add or remove elements from an array. It modifies the original array and returns the deleted elements (if any) as a new array.The basic syntax of the splice() method is:array.splice(startIndex, deleteCount, item1, item2, ...)startIndex: The index at which the modification should begin.deleteCount: The number of elements to be removed from the array. If set to 0, no elements will be removed.item1, item2, ...: The new elements to be added to the array at the specified index.Here's an example that demonstrates how to use the splice() method to add and remove elements from an array:

var fruit = ["apple", "banana", "cherry", "date"];

// Remove 'banana' from the array
fruit.splice(1, 1);

console.log(fruit); // Output: ['apple', 'cherry', 'date']

// Add 'berry' and 'fig' to the array at index 2
fruit.splice(2, 0, "berry", "fig");

console.log(fruits); // Output: ['apple', 'cherry', 'berry', 'fig', 'date']
//In this example, we first remove the second element ('banana') from the fruits array using splice() method. We then add two new elements ('berry' and 'fig') to the array at index 2 using the same splice() method.
