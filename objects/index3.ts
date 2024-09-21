// Nested objects: Objects that contain objects inside them are called nested or cascaded Objects.

type Employee = {
    name: string;
    details: {
        company: string;
        exp: number
    }
    };
    let employee: Employee = {
        name: "Muhmal",
        details:{
            company: "abc",
            exp: 3 // 3 years
        }
    }
    console.log(employee); // { name: 'Muhmal', details: { company: 'abc', exp: 3 } }
    
    // Index signature: we can use an index signature if you don't know all of the names of an object's properties.

    type Person = {
        name: string;
        address: {
          country: string;
          city: string;
          [key: string]: any; //  index signature
        };
      };
      
      let person: Person = {
        name: 'Hafsa',
        address: {
          country: 'Pakistan',
          city: 'Rawalpindi',
        },
      };
      
      person.address.street = 'Example str. 123';
      person.address.postCode = 123;
      
      // The example shows how even though we didn't define the address.street or address.postCode properties, we are still able to set them on the nested object.
    

