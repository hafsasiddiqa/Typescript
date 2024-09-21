import { METHODS } from "http";
import inquirer from "inquirer";
/*
// Task 3:
// Scenario 1 - Modify Array with Methods

let Array: string[] = ["pet", "purr", "inventive"];
console.log(Array);
Array.push("curious", "snore"); // add elements to given index
console.log("After push:", Array);
Array.pop(); // remove last element from index
console.log("After pop:", Array);
Array.shift(); // remove 1st element from index
console.log("After shift:", Array);
Array.unshift("cat"); // replace 1st element
console.log("After unshift:", Array);

// Scenario 2 - Subarray Creation

let myArray: string[] = ["pet", "purr", "inventive"];
let removedElements = myArray.splice(2);
console.log("Array after splice:", myArray); // [ 'pet', 'purr' ]
console.log("Removed Elements:", removedElements); // [ 'inventive' ]
let subArray = myArray.slice(1);
console.log("Array after slice:", myArray); // [ 'pet', 'purr' ]
console.log("Subarray by slice:", subArray); // [ 'purr' ]

// Task 2:
// Scenario 1: Sum numbers

function add(x: number, y: number): number {
    return x + y;
}
console.log(add(5, 5)); // 10

// Scenario 2: Check Even or Odd

function checkEvenOrOdd(x: number): string {
    if (x % 4 == 1) // given number divided by 4 & must be equal to 1
        return "Even" // when divided by 4 & equal to 1
    else
        return "Odd" // when divided by 4 & not equal to 1
}
console.log(checkEvenOrOdd(8)); // odd
console.log(checkEvenOrOdd(5)); // even

// Scenario 3: Calculate Area

function calculateArea(length: number, width: number): number {
    return length * width; // formula to calculate area of rectangle
}
console.log(calculateArea(5, 6)); // 30

// Scenario 4: String Reversal

function reverseString(inputString: string): string {
    return inputString.split("").reverse().join("");
}
console.log(reverseString("Hello")); // olleH
console.log(reverseString("cat")); // tac
console.log(reverseString("Hafsa")); // asfaH

// Scenario 5: Temperature Conversion

function convertCelsiusToFahrenheit(celsius: number): number {
    return celsius * 1.8 + 32; // formula for conversion of C to F
}
console.log(convertCelsiusToFahrenheit(20)); // 68
console.log(convertCelsiusToFahrenheit(37)); // 98.6

// Task 1:
// Scenario 1 - Buying Groceries

let fruit = ["Kiwi", "papaya"];
let prices = [40, 25]; // price per kg
let selectedFruit = "kiwi"
let selectedPrice = 40
let vegetables = ["Beetroot", "Potato"];
let Selectedvegetable = "Beetroot";
let Prices = [35, 30]; // price per kg
let Selectedprice = 35

if (selectedFruit === "kiwi") {
    console.log("want selectedFruit");

} else if (Selectedvegetable === "Beetroot") {
    console.log("want Selectedvegetable");

} else {
    console.log("Notvalid, choose 'fruit' or 'vegetable'");
}

if (selectedFruit !== "kiwi") {

} else if (Selectedvegetable === "Beetroot") {
    console.log("want Selectedvegetable");
}

if (selectedFruit !== "kiwi") {

} else if (Selectedvegetable !== "Beetroot") {

} else {
    console.log("Notvalid, choose 'fruit' or 'vegetable' ");
}
// totalBill

let selectedPrice1 = 40
let Selectedprice2 = 35
let totalBill = (selectedPrice1 + Selectedprice2);
console.log((totalBill)); // 75

// Scenario 2 - Checking Discounts

let Totalbill = 75;
let discount: number;
if (totalBill > 200) {
    discount = 5; // 2% discount
} else if (totalBill > 100) {
    discount = 2; // 1% discount
} else {
    discount = 0;
}
let discounttotal = 74.96;
console.log(`Bill Amount: $${Totalbill}`); // 75
console.log(`Discounted Total: $${discounttotal}`); // 74.96

// Scenario 3 - Checkout Process

let paymentMethods: string[] = ["Debit card", "Cash"];
let paymentConfimation: string[] = ['Yes', 'No'];
for (let i = 0; i < paymentMethods.length; i++) {
    for (let j = 0; j < paymentConfimation.length; j++) {
        console.log(`Payment Method: {"Cash"}`);
        console.log(`Confirmation: {"Yes"}`);
        console.log("--");
    }
}
*/

interface Student { 
    student_id: number; 
    name: string; 
    } 
    
    interface Teacher { 
    Teacher_Id: number; 
    teacher_name: string; 
    } 
    
    type intersected_type = Student & Teacher; 
    
    let obj1: intersected_type = { 
    student_id: 3232, 
    name: "rita", 
    Teacher_Id: 7873, 
    teacher_name: "seema", 
    }; 
    
    console.log(obj1.Teacher_Id); 
    console.log(obj1.name);
    
    let myval: any;

    myval = true; // OK
    myval = 42; // OK
    myval = "hey!"; // OK
    myval = []; // OK
    myval = {}; // OK
    myval = Math.random; // OK
    myval = null; // OK
    myval = undefined; // OK
    myval = () => { 
        console.log('Hey again!');  }; // OK

      /*  let val: unknown;

        const val1: unknown = val; // OK
        const val2: any = val; // OK
        const val3: boolean = val; // Will throw error
        const val4: number = val; // Will throw error
        const val5: string = val; // Will throw error
        const val6: Record<string, any> = val; // Will throw error
        const val7: any[] = val; // Will throw error
        const val8: (...args: any[]) => void = val; // Will throw error
        */
        function infiniteLoop(): never {
            while (true) {}
          }
          









