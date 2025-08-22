let x = "123";
console.log(Number(x)); // 123
console.log(typeof x);  // string

let y = null;
console.log(Number(y)); // 0

let z = undefined;
console.log(Number(z)); // NaN

let a = false;
console.log(Number(a)); // 0

let a1 = true;
console.log(Number(a1)); // 1

let a2 = "hi";
console.log(Number(a2)); // NaN


let res = Boolean(1); // true
console.log(res);
