// object Aliased: type aliases are used to assign a name for any type. It doesn't create a new type. Instead, it provides a name for the type.
//Method 1;
// Anonymous;
let cat = {
    color: "black",
    age: 5
};
console.log(cat.color); // black
console.log(cat.age); // 5
let animal = {
    name: "pockey",
    isSweet: true
};
console.log(animal["name"]); // pockey
console.log(animal.isSweet); // true
let month = {
    name: "July",
    date: 22
};
console.log(month["name"]); // July
console.log(month.date); // 22
let choclates = {
    name: "bounty",
    producedby: "abc company"
};
console.log(choclates.producedby); // abc company
console.log(choclates.name); // bounty
export {};
