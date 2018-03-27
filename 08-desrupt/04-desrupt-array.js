const colors = ["blue", "gray", "pink", "white", "black"];

const [color1, , , color2] = colors;

console.log("------------------------------------");
console.log(color1, color2);
console.log("------------------------------------");

const contacts = [
  {
    name: "mario",
    number: "33322-8747"
  },
  {
    name: "bento",
    number: "9900-0901"
  },
  {
    name: "bernardo",
    number: "8509-0000"
  }
];

function showNumberBento([, { number }]) {
  console.log("------------------------------------");
  console.log(number);
  console.log("------------------------------------");
}

showNumberBento(contacts);
