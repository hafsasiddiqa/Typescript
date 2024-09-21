// Task 2:
// Scenario 1: Sum numbers
function add(x, y) {
    return x + y;
}
console.log(add(5, 5)); // 10
// Scenario 2: Check Even or Odd
function checkEvenOrOdd(x) {
    if (x % 2 == 0) // given number divided by 2 & must be equal to 0
        return "Even"; // when divided by 2 & equal to 0
    else
        return "Odd"; // when divided by 2 & not equal to 0
}
console.log(checkEvenOrOdd(6)); // even
console.log(checkEvenOrOdd(5)); // odd
// Scenario 3: Calculate Area
function calculateArea(length, width) {
    return length * width; // formula to calculate area of rectangle
}
console.log(calculateArea(5, 6)); // 30
// Scenario 4: String Reversal
function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}
console.log(reverseString("Hello")); // olleH
console.log(reverseString("cat")); // tac
console.log(reverseString("Hafsa")); // asfaH
// Scenario 5: Temperature Conversion
function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32; // formula for conversion of C to F
}
console.log(convertCelsiusToFahrenheit(20)); // 68
console.log(convertCelsiusToFahrenheit(37)); // 98.6
export {};
