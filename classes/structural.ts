class Cat {
    makesound: string;
    constructor(makesound: string){
        this.makesound = makesound;
    }
    eat(food: string){
        console.log(`fluffy baby love to eat ${food}.`);

    }
}

class Dog {
    makesound: string;
    constructor(makesound: string){
        this.makesound= makesound;
    }
    eat(food: string){
        console.log(`Husky wants to eat ${food}.`);

    }
}
class Document {
    print: string;
    constructor(print:string){
        this.print = print
    }
  read(){
    console.log(` ${this.print} is readable `);

  }
}
let c: Cat = new Cat("Meow");
let d: Dog = new Dog("Woof");
let doc: Document = new Document("doc-B");
c = d; // ok
//c = doc; // error Document' is missing the following properties from type 'Cat': makesound, eat