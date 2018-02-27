/**
 * goes through each item using next()
 */

let wizard = ["harry Potter", "hermione Granger", "Rony Weasley"];

let wizards = wizard[Symbol.iterator]();

console.log(wizards.next());
console.log(wizards.next());
console.log(wizards.next());
console.log(wizards.next());
