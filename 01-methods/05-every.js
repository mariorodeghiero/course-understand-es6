/**
 *  verifies all items of array and return true or false
 */

let games = [
  { name: "Need for speed", category: "race" },
  { name: "Gran Turismo 6", category: "race" },
  { name: "The division", category: "action" },
  { name: "Forza 6", category: "race" },
  { name: "Forza Harizon", category: "race" }
];

let gameRacer = games.every(game => game.category === "race");

console.log("------------------------------------");
console.log(gameRacer);
console.log("------------------------------------");
