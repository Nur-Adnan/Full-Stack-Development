class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static myType() {
    return "Animal";
  }
  speak() {
    console.log("Hi there " + this.speaks);
  }
}

// This is creating a object of a class
let Tiger = new Animal("Tig", 4, "Hu");
let Lion = new Animal("Lio", 4, "Bha");

Tiger.speak();
Lion.speak();

console.log(Animal.myType());

// using objects

const dog = {
  name: "Dogii",
  legCount: 4,
  speaks: "BowBow",
};

console.log("Animal " + dog["name"] + " " + dog["speaks"]);

// for cat

const cat = {
  name: "Kitty",
  legCount: 4,
  speaks: "MeowMeow",
};

console.log("Animal " + cat["name"] + " " + cat["speaks"]);

// make it optimized

function animal(ani) {
  const log = console.log("Animal " + ani["name"] + " " + ani["speaks"]);
  return log;
}

animal(dog);
