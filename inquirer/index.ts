import { get } from "http";
import inquirer from "inquirer";

/*
let answers = await inquirer.prompt([{
    name: "age", 
    type: "number", // type: "input",
    message: "Enter your Age?"
}])

console.log('Insha Allah, in ${20 - answers.age}  "years you will be 20 years old')


function getFavoriteNumber(): number {
    return 26;
}
console.log(getFavoriteNumber)

let sub1 = (x: number, y: number): number => {
    return x - y;
}
console.log(sub1(5, 3));
*/

function performOperation(num1: number, num2: number, operation: string): string | number {
    switch (operation.toLowerCase()) {
      case 'add':
      case 'plus':
        return num1 + num2;
      case 'subtract':
      case 'minus':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Cannot divide by zero';
        }
      default:
        return 'Invalid operation';
    }
  }
   
console.log(performOperation(5, 3, 'add'));       // Output: 8
console.log(performOperation(10, 4, 'subtract'));  // Output: 6
console.log(performOperation(6, 2, 'multiply'));   // Output: 12


/*
let 

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });

  let person = {
    name: 'Jon',
    someFn: function () {
        console.log("hello " + this.name + " king in the north");
    }
};
let bankAccount = {
    accountNo: '100',
    someFn: function () {
        console.log("Please deppost some money");
    }
};
 
let invokeSomeFn = function (obj: {
    obj.someFn();
};
invokeSomeFn(person);
invokeSomeFn(bankAccount);

interface Person {
    name:string,
    someFn: () => void
  }
   
  interface BankAccount {
    accountNo:number,
    someFn: () => void
  }
   
   
  let person:Person = {
      name:'Jon',
      someFn:function() {
          console.log("hello "+this.name + " king in the north")
      }
  }
   
  let bankAccount:BankAccount = {
      accountNo:100,
      someFn:function() {
          console.log("Please deppost some money")
      }
  }
   
  let invokeSomeFn= function(obj:Person) {
      obj.someFn()
  }
   
  invokeSomeFn(person);
  invokeSomeFn(bankAccount)
   
  nominal const FooIndex = string;  // Proposed new kind of nominal declaration.
interface FooTable {
  [i: FooIndex]: { foo: number };
}
let s1: FooIndex;
let t1: FooTable;

// Define BarTable and BarIndex
nominal const BarIndex = string; // Proposed new kind of nominal declaration.
interface BarTable {
  [i: BarIndex]: { bar: string };
}
let s2: BarIndex;
let t2: BarTable;

// For assignment from base-types and basic structures: no type-overloading is needed.
s1 = 'foo1';
t1 = {};
t1[s1] = { foo: 1 };

s2 = 'bar1';
t2 = { 'bar1': { bar: 'barbar' }};

console.log(s2 = s1); // Proposed to be type error.
console.log(s2 == s1); // Proposed to be type error.
console.log(s2 === s1); // Proposed to be type error.

t1[s2].foo = 100; // Gives a runtime error. Proposed to be type error.
t1[s1].foo = 100;

function BadFooTest(t: FooTable) {
  if (s2 in t) {  // Proposed to be type error.
    console.log('cool');
    console.log(t[s2].foo); // Proposed to be type error.
  }
}

function GoodBarTest(t: BarTable) {
  if (s2 in t) {
    console.log('cool');
    console.log(t[s2].bar);
  }
}

BadFooTest(t1); // Gives runtime error;
BadFooTest(t2); // No runtime error, Proposed to be type error.
GoodBarTest(t1); // Gives runtime error; Proposed to be type error.
GoodBarTest(t2);
*/

/*function checktype(): never {
  console.log("type is never")
  return 0;
  return true;
}*/

let x: {id:number,[a:number]:any}

let array1 : number[] = [5, 6, 7];//correct syntax
console.log(array1[1]);//correct syntax
// 2nd meyhod:
let array2:Array<number> = [1, 2, 3];//alternative correct syntax
   for (let i = 0; i < 3; i++) {
  console.log("Hello World" + i)
}






