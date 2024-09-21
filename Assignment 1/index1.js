// Task 1:
// Scenario 1 - Buying Groceries
function groceryStore() {
    let choice = ("Do you want to buy fruits or vegetables? ");
    let customerchoose = "Fruits";
    let totalBill = 0;
    let fruitMenu = {
        kiwi: 30,
        papaya: 30,
    };
    if (customerchoose === "fruits") {
        console.log("Great! Here are some fruits you can choose from:");
        (fruitMenu);
        if (choice === "kiwi") {
            totalBill = 30; // $30 per kg
        }
        else if (choice === "papaya") {
            totalBill = 30; // $30 per kg
        }
        else {
            console.log("Invalid, choose one fruit from menu");
        }
    }
    console.log(`customerchoose: {kiwi}`);
}
groceryStore();
// totalBill
let totalBill = 0;
let Totalbill = 30 * 2; // quqntity 2kg
console.log(`total bill: $${Totalbill}`); // $60
// Scenario 2 - Checking Discounts
function Discount(totalBill) {
    let discount = 0;
    if (totalBill > 100) {
        discount = 15; // 15% discount
    }
    else if (totalBill < 100) {
        discount = 10; // 10% discount
    }
    let discountedTotal = 60 - (60 * (0.1 / 100));
    console.log(`Discounted total: $${discountedTotal}`); // $59.94
}
Discount(60);
// Scenario 3 - Checkout Process
let paymentMethods = ["Debit Card", "Cash"];
let paymentConfimation = ['Yes', 'No'];
let method = ("Would you like  to pay with 'Debit' card or 'Cash' ");
console.log(paymentMethods, ("Cash"));
let userinput = ("payment received");
console.log(paymentConfimation, ("yes"));
export {};
