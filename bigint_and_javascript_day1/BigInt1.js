let balance = 1000n; // represents ₹10.00 in paise
let deposit = 25n;   // ₹0.25
balance += deposit;
console.log(Number(balance) / 100); // Output: 10.25
