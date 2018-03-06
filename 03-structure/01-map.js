let map = new Map();
function func() {}
let obj = {};

map.set("string", "Im a string");
map.set(obj, "Im a object");
map.set(func, "Im a function");

// Get
console.log("------------------------------------");
console.log(map.get("string"));
console.log(map.get(obj));
console.log(map.get(func));
console.log(map.size);
console.log("------------------------------------");

// Has
console.log("------------------------------------");
console.log(map.has(obj));
console.log("------------------------------------");

// Delete
map.delete("string");
console.log(map.has("string"));

// Clear
map.clear();
console.log(map.size);

// Keys
for (const key of map.keys()) {
  console.log(key);
}

// Values
for (const value of map.values()) {
  console.log(value);
}

// Entries
for (const entrie of map.entries()) {
  console.log(entrie);
}
