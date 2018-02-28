let hatSelector = function(wizard) {
  let houses = ["Grifinólia", "Sonserina", "Corvinal", "Lufa-lufa"];
  let house = houses[Math.floor(Math.random() * houses.length)];

  console.log(`Wizard: ${wizard} | House: ${house}`);
};

let wizards = ["harry Potter", "hermione Granger", "Rony Weasley"];

let iterator = wizards[Symbol.iterator]();

let done = false;

let nextItem = iterator.next();
do {
  let wizard = nextItem.value;
  hatSelector(wizard);
  nextItem = iterator.next();
} while (!nextItem.done);
{
}
