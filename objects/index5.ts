// Any nd Unknown:
// Any;
// Example 1:

let fluid: any = {
name: "H2O",
quantity: 2,
isHarmful: false
}
console.log(fluid); // { name: 'H2O', quantity: 2, isHarmful: false }
console.log(fluid.name); // H2O
console.log(fluid.isHarmful); // false

// Example 2:

function add(a: any, b: any): any {
    return a + b;
}
let finalResult = add(12, "Hafsa");
console.log(finalResult); // 12Hafsa

// Unknown;
// Example 1:

function HTK(value: unknown) {
    if (typeof value === "string") {
        console.log(value.toLowerCase());
    } else if (typeof value === "number") {
        console.log(value / 2);
} else {
    console.log("Unknown value");
}
}
HTK("HAFSA"); // hafsa
HTK(10);      // 5
HTK(true); // unknown value
 
// Example 2:

 let t: unknown;
 let Value: number;
 t = 4
 // Value = t; // this give error as Type 'unknown' is not assignable to type 'number'.

 if (typeof t === "number") {
    Value = t; // typecheck ensures 
 }
console.log(t); // 4




