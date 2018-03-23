let name = "mario";
let lastName = "rodeghiero";

let person = {
  name,
  lastName,
  hello() {
    console.log("------------------------------------");
    console.log(` Hello!! I am ${this.name} ${this.lastName}`);
    console.log("------------------------------------");
  }
};

person.hello();
