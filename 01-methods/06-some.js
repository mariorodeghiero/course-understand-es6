/**
 * check each item contains the value specified
 */

let games = [
  { name: "Need for speed", category: "race" },
  { name: "Gran Turismo 6", category: "race" },
  { name: "The division", category: "action" },
  { name: "Forza 6", category: "race" },
  { name: "Forza Harizon", category: "race" },
  { name: "Assassins Creed", category: "adventure" }
];

let gameRace = games.some(game => game.category === "adventure");

console.log("------------------------------------");
console.log(gameRace);
console.log("------------------------------------");
