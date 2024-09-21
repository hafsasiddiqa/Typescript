class Animal {
    name: string;
    color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
       
    }

    eat(food: string) {
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
    add(a: number, b: number) {
        return a + b;
    }
    

    subtract(a: number, b: number) {
        return a - b;
    }

    multiply(a: number, b: number) {
        return a * b;
    }

    divide(a: number, b: number) {
        return a / b;
    } 
}

let calc = new Calculator();
console.log(calc.add(5, 5)); 
console.log(calc.divide(10, 2)); 
console.log(calc.multiply(5, 2)); 
console.log(calc.subtract(10, 5)); 

class Person {
    name: string;
    height: number;
    
    constructor(name: string, height: number) {
        this.name = name;
        this.height = height;
    }
    // method
    eat(food: string) {
        console.log(` ${this.name} wants to eat ${food}.`);
    }
    
    read() {
        console.log(` ${this.name} loves to read novel `);
    }
    
    }
    // object creation
    let person = new Person ("Hafsa", 5.4);
    
    console.log(person.name);
    console.log(person.height);
    
    person.eat("fried rice"); 
    person.read(); 