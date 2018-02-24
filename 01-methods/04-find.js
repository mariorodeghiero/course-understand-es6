let students = [
  { name: "Mário", age: 30 },
  { name: "Leo", age: 18 },
  { name: "Bento", age: 17 },
  { name: "Lana", age: 16 }
];

let studentName = students.find(student => student.name == "Bento");

console.log("------------------------------------");
console.log(studentName);
console.log("------------------------------------");
