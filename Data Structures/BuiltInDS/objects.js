const obj = {
  name: "Divya",
  age: 24,
  // we can add functions as values
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "painting"; //adding new key value
delete obj.hobby; //delete a key vale pair

console.log(obj.name);
console.log(obj.age);
console.log(obj);
obj.sayMyName();

//symbol key type
const sym = Symbol('symbol_name');
const object = {[sym]: { foo: 'bar' }}

console.log(object[sym]);


//Object.keys() method in JavaScript. This method is used to return an array of a given object's own enumerable property names, in the same order as we get using a standard loop. It can be used on both regular objects and arrays.

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const keys = Object.keys(myObject);

console.log(keys); // Output: ["a", "b", "c"]

//The object.values() method is a built-in JavaScript method that returns an array containing the values of an object's properties. It does not return the property names, only the values associated with those property names. This method can be useful for iterating over an object's values or extracting a list of values for further manipulation.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

const values = Object.values(person);
console.log(values); // output: ['John', 'Doe', 30, 'New York']


//Object.entries() is a method in JavaScript that returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
//we use the Object.entries() method to convert this object into an array of key-value pairs. Finally, we use the console.log() method to display the result in the console.
//The output shows an array of three sub-arrays, each containing a key-value pair from the object. 

const obj = { name: "John", age: 30, occupation: "Developer" };
const entries = Object.entries(obj);

console.log(entries);
// Output: [["name", "John"], ["age", 30], ["occupation", "Developer"]]