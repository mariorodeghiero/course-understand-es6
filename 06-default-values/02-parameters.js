// necessario informar parametros obrigatorios

function validParameter(param1, param2) {
  throw new Error(`The parameters ${param1} is mandatory `);
}

function sum(obj1 = validParameter("obj1"), obj2 = validParameter("obj2")) {
  console.log(obj1 + obj2);
}
sum();
