let hatSelector = function(wizard) {
  let houses = ["Grifinólia", "Sonserina", "Corvinal", "Lufa-lufa"];
  let house = houses[Math.floor(Math.random() * houses.length)];

  console.log(`Wizard: ${wizard} | House: ${house}`);
};

let wizards = ["Harry Potter", "Hermione Granger", "Rony Weasley"];

for (const wizard of wizards) {
  hatSelector(wizard);
}
