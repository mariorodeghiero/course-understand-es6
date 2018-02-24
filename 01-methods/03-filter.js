let students = [
  { nome: "Mário", age: 30 },
  { nome: "Leo", age: 18 },
  { nome: "Bento", age: 17 },
  { nome: "Lana", age: 16 }
];

let greater = students.filter(function(student) {
  return students.age >= 18;
});

console.log("------------------------------------");
console.log(getters);
console.log("------------------------------------");
