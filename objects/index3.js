// Nested objects: Objects that contain objects inside them are called nested or cascaded Objects.
let employee = {
    name: "Muhmal",
    details: {
        company: "abc",
        exp: 3 // 3 years
    }
};
console.log(employee); // { name: 'Muhmal', details: { company: 'abc', exp: 3 } }
let person = {
    name: 'Hafsa',
    address: {
        country: 'Pakistan',
        city: 'Rawalpindi',
    },
};
person.address.street = 'Example str. 123';
person.address.postCode = 123;
export {};
// The example shows how even though we didn't define the address.street or address.postCode properties, we are still able to set them on the nested object.
