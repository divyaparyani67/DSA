const set = new Set([1, 2, 3]);
set.add(4); // to add the value
console.log(set.has(4)); // to check if the value exist
set.delete(3);
console.log(set.size); // to check the size of set
set.clear(); // to delete all values

for (const item of set) {
  console.log(item);
}
