// ARRAY METHODS:
// 1: Push; Appends new elements to the end of an array.
let Cat = ["inventive", "curious"];
// before push;
console.log(Cat); // ["inventive", "curious"]
// after push;
Cat.push("lovely");
console.log(Cat); // [ 'inventive', 'curious', 'lovely' ]
// 2: Pop; Remove the last element.
Cat.pop();
console.log(Cat); // ['inventive', 'curious']
// 3: Shift; Removes the first element from an array.
let letters = ["K", "T", "H"];
letters.shift();
console.log(letters); // [ 'T', 'H' ]
// 4: Unshift; Elements to insert at the start of the array.
letters.unshift("k");
console.log(letters);
['k', 'T', 'H'];
// 5: Concat; Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let T = [2, 2];
let H = [4];
console.log(T.concat(H)); // [ 2, 2, 4 ]
// 6: Join; this method joins all elements of the array into a string with a given operator.
let t = ["Ha", "Fs", "a"];
console.log(t.join('-')); // Ha-Fs-a
// 7: Slice; This method cuts an array, in whichever manner we want and returns the trimmed array.
let K = [0, 1, 2, 3, 4, 5];
console.log(K.slice(1, 3)); //  [ 1, 2 ] 
// 8: Splice; This method can be used for multiple purposes. For, Add an element to an array. Replace specific elements within an array. Remove specific elements from an array.
let T1 = ["Cat", "Dog", "Birds", "Fish"];
T1.splice(1, 0, 'cute');
console.log('added cute:', T1); // [ 'Cat', 'cute', 'Dog', 'Birds', 'Fish' ]
// 9: indexOf; This method returns the index of an element in an array.
let animal = ['Loving', 'loyal', 'sweet'];
console.log(animal.indexOf('loving')); // -1
console.log(animal.indexOf('loyal'));
// 10: Includes; Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(animal.includes('loyal')); // true
// 11: Find; 
let Htk = [2, 2, 4, 5];
console.log(Htk.find((n) => n % 4 === 0)); // 4
// 12: FindIndex; return the index
console.log(Htk.findIndex((n) => n % 4 !== 0)); // 0
// 13: Map; This method creates a new array with the results of calling a provided function on every element in array.
let n = [2, 2, 4, 5];
console.log(n.map((n) => n + 2)); // [ 4, 4, 6, 7 ]
// 14: Filter; finding even numbers from an array, finding common items from two arrays, or getting a distinct array.
let m = [1, 2, 3, 4];
console.log(m.map((n) => n % 2 === 0)); // [ false, true, false, true ]
// 15: reduce; It applies a function simultaneously against two values of the array (from left to right) to reduce it to a single value.
let num = [22, 4, 10];
console.log(num.reduce(function (a, b) { return a / b; })); // 0.55
// 16: Every; Determines whether all the members of an array satisfy the specified test.
let HT = [9, 0, 4];
console.log(HT.every((a) => a < 10)); // true
// 17: Some; Determines whether the specified callback function returns true for any element of an array.
console.log(HT.some((a) => a > 0)); // true
console.log(HT.some((a) => a > 10)); // false
// 18: Reverse; this method reverts the order of an array.
let FH = ['Hafsa', 'sweet'];
console.log(FH.reverse()); // [ 'sweet', 'Hafsa' ]
// 19: At; Takes an integer value and returns the item at that index, allowing for positive and negative integers.
let B = [4, 7, 5, 10];
console.log(B.at(3)); // 7
console.log(B.at(4)); // undefined
// 20: toString; This method converts an array to a comma-separated string.
// see above 18
console.log(FH.toString()); // sweet,Hafsa
export {};
