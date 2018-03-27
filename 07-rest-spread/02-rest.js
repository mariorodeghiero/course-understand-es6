function sumTotal(...val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    sum += val[i];
  }
  console.log(sum);
}

function sumReduce(...values) {
  return values.reduce((sum, val) => {
    return sum + val;
  }, 0);
}

console.log(sumReduce(33, 8, 9, 10));
sumTotal(1, 2);
