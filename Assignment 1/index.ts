
import inquirer from "inquirer";

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