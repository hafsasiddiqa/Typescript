// Structural typing: A structural type system means that when comparing types, TypeScript only takes into account the members on the type.
let cat = {
    makesound: "Meow"
};
let dog = {
    makesound: "Woof"
};
cat = dog;
dog = cat;
let point2D = {
    x: 10,
    y: 20
};
let point3D = {
    x: 10,
    y: 20,
    z: 30
};
point2D = point3D; // compatible
/*point3D = point2D */
// error of 'miissing property'
// fresh objects n stale objects:
let person = {
    name: "Hafsa",
    age: 20,
    gender: "female"
};
console.log(person);
// stale object:
const Person1 = {
    name: "Hania",
    age: 22,
    gender: "female"
};
person = Person1;
export {};
