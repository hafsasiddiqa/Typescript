class Animal {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    eat(food) {
        console.log(`furry baby ${this.name} love to eat ${food}.`);
    }
    purr() {
        console.log(`fluffy baby ${this.name} is purring.`);
    }
}
let cat = new Animal("Twilight", 'greyBlack');
console.log(cat.name);
console.log(cat.color);
cat.eat("tuna");
cat.purr();
class Me {
    name;
    height;
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    // method
    eat(food) {
        console.log(` ${this.name} love  ${food}...`);
    }
    read() {
        console.log(` ${this.name} loves to read novel...`);
    }
}
let person = new Me("Hafsa", 5.4);
console.log(person.name);
console.log(person.height);
person.eat("Chocolates");
person.read();
class Fluid {
    name;
    isHarmful;
    constructor(name, isHarmful) {
        this.name = name;
        this.isHarmful = isHarmful;
    }
}
let fluid = new Fluid('H2O', false);
console.log(fluid.name);
console.log(fluid.isHarmful);
export {};
