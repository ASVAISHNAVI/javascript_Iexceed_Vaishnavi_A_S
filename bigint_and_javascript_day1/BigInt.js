const x = 10n; //BigInt only supports whole numbers does not support decimal
const y = 20n;
let sum=x+y;
let summ=30n;
console.log(summ==sum);
console.log(x > y); // true
console.log(x === y); // false
