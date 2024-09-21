// Structural typing: A structural type system means that when comparing types, TypeScript only takes into account the members on the type.

interface Cat {
    makesound: string
}
let cat: Cat = {
makesound: "Meow"
}
interface Dog {
    makesound: string
}
let dog: Dog = {
    makesound: "Woof"
}
cat = dog;
dog = cat

type  Point2D = {
    x: number;
    y: number;
  }
  let point2D: Point2D = {
    x: 10,
    y: 20
  }
  type Point3D = {
    x: number;
    y: number;
    z: number;
  }
  let point3D: Point3D = {
    x: 10,
    y: 20,
    z: 30
  }
point2D = point3D // compatible

 // point3D = point2D // error of 'miissing property'

// fresh objects n stale objects:

let person = {
  name: "Hafsa",
  age: 20,
  gender: "female"
};


// stale object:

const Person1: any = {
  name: "david",
  age: 25,
  gender: "male"
};
person = Person1









