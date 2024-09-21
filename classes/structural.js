class Cat {
    makesound;
    constructor(makesound) {
        this.makesound = makesound;
    }
    eat(food) {
        console.log(`fluffy baby love to eat ${food}.`);
    }
}
class Dog {
    makesound;
    constructor(makesound) {
        this.makesound = makesound;
    }
    eat(food) {
        console.log(`Husky wants to eat ${food}.`);
    }
}
class Document {
    print;
    constructor(print) {
        this.print = print;
    }
    read() {
        console.log(` ${this.print} is readable `);
    }
}
let c = new Cat("Meow");
let d = new Dog("Woof");
let doc = new Document("doc-B");
c = d; // ok
export {};
//c = doc; // error Document' is missing the following properties from type 'Cat': makesound, eat
