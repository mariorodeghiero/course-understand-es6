const juice = {
  flavor: "Apple",
  quantity: "500ml"
};

const candy = {
  type: "sugar"
};

function descriptionJuice({ flavor, quantity }, { type }) {
  return `This juice is ${flavor} flavor, and have ${quantity}. Note!! with ${type}`;
}

console.log("------------------------------------");
console.log(descriptionJuice(juice, candy));
console.log("------------------------------------");
