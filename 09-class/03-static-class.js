/**
 * NECESSARY TO ADD STATIC TO ACSSES CAR METHOD, or instance using the word "New"
 *
 * two different ways to access methods of a class
 */

class Car {
  opemTheDor() {
    console.log("------------------------------------");
    console.log("opening dor!!");
    console.log("------------------------------------");
  }
  static closeTheDor() {
    console.log("------------------------------------");
    console.log("closing the dor!!");
    console.log("------------------------------------");
  }
}

const car = new Car();
car.opemTheDor();
Car.closeTheDor();
