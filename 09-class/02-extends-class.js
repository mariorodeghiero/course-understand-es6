/**
 * Primeiramente deve declarar sua classe para só então acessá-la, pois do contrário o código a seguir irá lançar uma
 * exceção: ReferenceError:
 */
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

class Sonix extends Car {
  constructor(model, chassis, dors) {
    super(model, chassis, dors);
  }
  opemSunRoof() {
    console.log("------------------------------------");
    console.log("Opem sun roof!");
    console.log("------------------------------------");
  }
}

const sonix = new Sonix("sonix", "398661876267816781268721", 5);
const basicCar = new Car("Basic", "79218378541", 5);

console.log("------------------------------------");
console.log(basicCar.model, basicCar.chassis, basicCar.dors);
console.log("------------------------------------");
//
console.log(sonix.model, sonix.chassis, sonix.dors);
console.log(sonix);
