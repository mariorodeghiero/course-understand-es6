class Car {
  constructor(model, chassis, dors) {
    this.model = model;
    this.chassis = chassis;
    this.dors = dors;
  }

  go() {
    console.log("------------------------------------");
    console.log("vrum vrum");
    console.log("------------------------------------");
  }
}

const basicCar = new Car("Basic", "79218378541", 5);

console.log("------------------------------------");
console.log(basicCar.model, basicCar.chassis, basicCar.dors);
console.log("------------------------------------");
