class Animal {
    name;
    color;
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    eat(food) {
        console.log(`furry baby ${this.name} wants to eat ${food}.`);
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
//
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
let calc = new Calculator();
console.log(calc.add(5, 5));
console.log(calc.divide(10, 2));
console.log(calc.multiply(5, 2));
console.log(calc.subtract(10, 5));
class Person {
    name;
    height;
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    // method
    eat(food) {
        console.log(` ${this.name} wants to eat ${food}.`);
    }
    read() {
        console.log(` ${this.name} loves to read novel `);
    }
}
// object creation
let person = new Person("Hafsa", 5.4);
console.log(person.name);
console.log(person.height);
person.eat("fried rice");
person.read();
export {};
