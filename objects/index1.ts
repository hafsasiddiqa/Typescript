// object Aliased: type aliases are used to assign a name for any type. It doesn't create a new type. Instead, it provides a name for the type.
//Method 1;
// Anonymous;

let cat : {color: string, age: number} = {
    color: "black",
    age: 5
}
console.log(cat.color); // black
console.log(cat.age); // 5

// Method 2;
//  Aliased Object Type;

type Animal = {
    name: string,
    isSweet: boolean
}

let animal: Animal = {
    name: "pockey",
    isSweet: true
}

console.log(animal["name"]); // pockey
console.log(animal.isSweet); // true

// Method 3;
// Interfaces;

interface Month {
    name: string,
   date: number
}

let month: Month = {
    name: "July",
    date: 22
}
console.log(month["name"]); // July
console.log(month.date); // 22

// Optional:  you can declare a property in your interface which will be optional. look out the example.

type Choclates = {
    name: string,
    producedby?: string // here producedby is  optional property
}
let choclates: Choclates = {
    name: "bounty",
    producedby: "abc company"
}
console.log(choclates.producedby); // abc company
console.log(choclates.name); // bounty








