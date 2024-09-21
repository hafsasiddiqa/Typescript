// objects: An object is an instance which contains set of key value pairs.

let pet: {
type: string,
canPurr: boolean
}
pet = {
   type: "cat" ,
   canPurr: true
}
console.log(pet["type"]); // cat
console.log(pet.canPurr); // true

let product: {
    name: string,
    price: number,
    canSilver: boolean
}
product = {
    name: "MacBook",
    price: 100000, 
    canSilver: false
}
console.log(product.name); // MacBook
console.log(product.price); // 100000
console.log(product["canSilver"]); // false


