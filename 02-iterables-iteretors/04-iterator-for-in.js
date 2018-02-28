/**
 * iterates through all properties of an object
 * */

let cars = {
  model: "fiat",
  age: 2018
};

for (const propreties in cars) {
  let info = cars[propreties];
  console.log(info);
}
