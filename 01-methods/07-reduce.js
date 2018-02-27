/**
 *
 */

let numbers = [0, 2, 4, 7, 8, 19];

let sumTotal = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

console.log("------------------------------------");
console.log(sumTotal);
console.log("------------------------------------");

let students = [
  { name: "mario", age: "30" },
  { name: "tofu", age: "5" },
  { name: "bento", age: "4" }
];

let names = students.reduce(function(arrNames, student) {
  arrNames.push(student.name);
  return arrNames;
}, []);

console.log("------------------------------------");
console.log(names);
console.log("------------------------------------");
