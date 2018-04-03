const team = {
  qt: 3,
  senior: "Mario",
  pleno: "antonio",
  junior: "fred",
  [Symbol.iterator]: function*() {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
};

for (const member of team) {
  console.log("------------------------------------");
  console.log(member);
  console.log("------------------------------------");
}
