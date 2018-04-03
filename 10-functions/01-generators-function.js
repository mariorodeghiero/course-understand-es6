function* sum() {
  console.log("------------------------------------");
  console.log("sum 1");
  console.log("------------------------------------");
  yield "stop 1";
  console.log("------------------------------------");
  console.log("sum 2");
  console.log("------------------------------------");
  yield "stop 2";
  console.log("------------------------------------");
  console.log("sum 3");
  console.log("------------------------------------");
  yield "stop 3";
}

const line = sum();

for (const breakPoint of line) {
  console.log(breakPoint);
}
