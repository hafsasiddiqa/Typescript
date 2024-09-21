// Enums: Enums are a feature added to JavaScript in TypeScript which makes it easier to handle named sets of constants. Enums provide a way to define a set of named constants, making the code more readable and maintainable by providing a limited set of options for a particular variable or parameter.
// Method 1:
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
})(HttpStatusCode || (HttpStatusCode = {}));
let responseCode = HttpStatusCode.NotFound;
console.log("Response:", (responseCode)); // 404
// Method 2:
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OKk"] = 200] = "OKk";
    HttpStatusCode[HttpStatusCode["NotFounds"] = 404] = "NotFounds";
    HttpStatusCode[HttpStatusCode["BadRequests"] = 400] = "BadRequests";
    HttpStatusCode[HttpStatusCode["Unauthorizeds"] = 401] = "Unauthorizeds";
})(HttpStatusCode || (HttpStatusCode = {}));
let codeTitle = HttpStatusCode[400];
console.log("Response:", (codeTitle)); // BadRequests
let item = "Espresso" /* Coffee.name */;
console.log("Item", (item));
;
let coffeeindex = 4 /* coffee["quantity"] */;
let coffeeIndex = 22 /* coffee["blackcoffee"] */;
console.log(coffeeindex); // 4
console.log(coffeeIndex); // 22
export {};
// not allowed method:
/*const enum size {small = 1, medium, large};
let Name: string = size[2]; //Not allowed with const enums
console.log(Name);
*/
