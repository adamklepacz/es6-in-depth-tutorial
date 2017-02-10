class Instrument {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

class Guitar extends Instrument {
  describe() {
    console.log(`I'm a ${this.name} from the ${this.type} family.`);
  }
}

let fender = new Guitar("Fender", "strings");
// fender.describe();
