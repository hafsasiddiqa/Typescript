console.log("Hello World");
// Q2, personal message:
let personName = "Hafsa";
let message = `Hello ${personName}, would you like to have coffee?`;
console.log(message);
// Q3, Name cases:
let herName = "Hafsa";
// lowercase:
console.log(herName.toLowerCase());
// uppercase:
console.log(herName.toUpperCase());
// titlecase:
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (name) => name.charAt(0).toUpperCase() + name.substr(1).toLowerCase());
}
let titlecaseName = toTitleCase(herName);
console.log("Titlecase: " + titlecaseName);
// Q4, Famous quote:
let quote = "Cats rule the world.";
let author = "Jim Davis.";
console.log(`${author} once said, "${quote}"`);
// Q5, Famous quote 2:
let famous_person = "Jim Davis";
let Message = `${famous_person} once said, "Cats rule the world"`;
console.log(Message);
// Q6, Stripping Names:
// Storing the name with whitespace
let name = "\t   Hafsa \n";
console.log("Name with whitespace:");
console.log("[" + name + "]");
// Stripping whitespace and printing the name
let strippedName = name.trim();
console.log("\nStripped name:");
console.log("[" + strippedName + "]");
// Q7, Number Eight:
// addition:
let additionResult = 6 + 2;
console.log(`Addition result: ${additionResult}`);
// subtraction:
let subtractionResult = 9 - 1;
console.log(`Subtraction result: ${subtractionResult}`);
// multiplication:
let multiplicationResult = 4 * 2;
console.log(`Multiplication result: ${multiplicationResult}`);
// division:
let divisionResult = 16 / 2;
console.log(`Division result: ${divisionResult}`);
// Q8, create four lines:
console.log(6 + 2); // 8
console.log(10 - 2); // 8
console.log(4 * 2); // 8
console.log(16 / 2); // 8
// Q9, Favorite number:
let myfavoriteNumber = 56;
let theMessage = `My favorite number is ${myfavoriteNumber}`;
console.log(theMessage);
// Q10, Adding Comments:
// Program 1: Calculator
// This program performs basic arithmetic operations on two numbers.
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        console.log("Cannot divide by zero.");
    }
}
console.log(add(6, 5)); // Output: 11
console.log(subtract(10, 5)); // Output: 5
console.log(multiply(6, 5)); // Output: 30
console.log(divide(16, 4)); // Output: 4
// program 2: Palindrome Checker
// This program checks if a given string is a palindrome.
function isPalindrome(a) {
    const reversed = a.split("").reverse().join("");
    return a === reversed;
}
console.log(isPalindrome("hafsa")); // Output: false
console.log(isPalindrome("noon")); // Output: true
console.log(isPalindrome("cat")); // Output: false
console.log(isPalindrome("fof")); // Output: true
// Q11, Names:
let names = ["Muhmal", "Zarish", "Saleha"];
for (let name of names) {
    console.log(name);
}
// Q12, Greetings:
let Names = ["Muhmal", "Zarish", "Saleha"];
for (let name of Names) {
    console.log(`Hello, ${name}!"what about your health"?`);
}
// Q13, your own Array:
const transportation = ["Honda motorcycle", "Tesla car", "Giant bicycle", "Vespa scooter"];
// Print a series of statements about each item
for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i]);
}
export {};
