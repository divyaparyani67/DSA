const map = new Map([
  ["a", 1],
  ["b", 2],
]);
map.set("c", 3); //to add key value
console.log(map.has("a"));
map.delete("c");
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(`${key} : ${value}`);
}
