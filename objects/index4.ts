// Intersection type: An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need.
// Example 1:

interface Fruit {
    name: string;
    isTasty: boolean
}
interface Vegetable {
    name1: string;
    weight: number
}
type Food = Fruit & Vegetable
let food: Food = {
name: "Kiwi",
isTasty: true,
name1: "Broccli",
weight: 2  // 2kg
}
console.log(food); // { name: 'Kiwi', isTasty: true, name1: 'Broccli', weight: 2}
console.log(food.name); // kiwi
console.log(food.weight); // 2

// Example 2:

type Engine = {
    fuelType: string,
    horsepower: number
}
type SafteyFeatures = {
    airbags: number
}
type Car = Engine & SafteyFeatures
let car: Car = {
    fuelType: "Petrol",
    horsepower: 200,
    airbags: 6
}
console.log(car); // { fuelType: 'Petrol', horsepower: 200, airbags: 6 }
console.log(car.horsepower); // 200