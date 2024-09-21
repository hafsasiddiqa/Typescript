class Calculator {
    a;
    b;
    constructor() {
        this.a = 0;
        this.b = 0;
    }
    setNumbers(a, b) {
        this.a = a;
        this.b = b;
    }
    add() {
        return this.a + this.b;
    }
    subtract() {
        return this.a - this.b;
    }
    multiply() {
        return this.a * this.b;
    }
    divide() {
        if (this.b !== 0) {
            return this.a / this.b;
        }
        else {
            throw new Error("Cannot divide by zero.");
        }
    }
}
// Example usage:
const calculator = new Calculator();
calculator.setNumbers(5, 3);
const resultAdd = calculator.add();
console.log("Addition:", resultAdd);
calculator.setNumbers(5, 3);
const resultSubtract = calculator.subtract();
console.log("Subtraction:", resultSubtract);
calculator.setNumbers(5, 3);
const resultMultiply = calculator.multiply();
console.log("Multiplication:", resultMultiply);
calculator.setNumbers(5, 3);
const resultDivide = calculator.divide();
console.log("Division:", resultDivide);
export {};
