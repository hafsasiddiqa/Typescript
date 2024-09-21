// Enums: Enums are a feature added to JavaScript in TypeScript which makes it easier to handle named sets of constants. Enums provide a way to define a set of named constants, making the code more readable and maintainable by providing a limited set of options for a particular variable or parameter.

// Method 1:
enum HttpStatusCode {
    OK = 200,
    NotFound = 404,
    BadRequest = 400,
    Unauthorized = 401,
}
let responseCode: HttpStatusCode = HttpStatusCode.NotFound;
console.log("Response:",(responseCode)); // 404

// Method 2:
enum HttpStatusCode {
    OKk = 200,
    NotFounds = 404,
    BadRequests = 400,
    Unauthorizeds = 401,
}
let codeTitle: string = HttpStatusCode[400];
console.log("Response:",(codeTitle)); // BadRequests

// Const enums: Using const enum means that the code is completely virtual, and is never compiled to actual code. Smaller bundles, less code, simple change. It’s a great addition and consideration to the TypeScript language.
// Allowed Methods:
// 1st method;
const enum Coffee {
    name = 'Espresso',
    quantity = 1
}
let item: Coffee = Coffee.name;
console.log("Item", (item) );

// 2nd method;
const enum coffee {blackcoffee = 22, quantity = 4};
let coffeeindex = coffee["quantity"];
let coffeeIndex = coffee["blackcoffee"];
console.log(coffeeindex); // 4
console.log(coffeeIndex); // 22

// not allowed method:

/*const enum size {small = 1, medium, large};
let Name: string = size[2]; //Not allowed with const enums
console.log(Name);
*/








