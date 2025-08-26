// Object.assign()
const target = { a: 1 };
const source = { b: 2 };
const merged = Object.assign(target, source); 

// Object.create()
const proto = { greet() { return "Hello"; } };
const obj = Object.create(proto);
console.log(obj.greet()); 

// Object.defineProperty()
Object.defineProperties(obj,{ 'name': {
  value: 'vaish',
  writable: false,
  enumerable: true,
  configurable: true
  },'age':{
  value: 23,
  writable: false,
  enumerable: false,
  configurable: true
}});





console.log(Object.getOwnPropertyNames(obj)); // ['name', 'age']

// Object.entries()
console.log(Object.entries({ x: 10, y: 20 }));

// Object.fromEntries()
const entries = [['foo', 'bar'], ['baz', 42]];
console.log(Object.fromEntries(entries)); // { foo: 'bar', baz: 42 }

// Object.freeze()
const frozen = Object.freeze({ locked: true });//no add,no delete,no modify
// frozen.locked = false; 

// Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

// Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(obj));

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(obj) === proto); 

// Object.hasOwn()
console.log(Object.hasOwn(obj, 'age')); 

// Object.is()
console.log(Object.is(NaN, NaN)); 
console.log(Object.is(-0, +0));

// Object.keys()
console.log(Object.keys({ a: 1, b: 2 })); 

// Object.values()
console.log(Object.values({ a: 1, b: 2 })); 

// Object.seal()
const sealed = Object.seal({ x: 1 });
//we can modify(not add or delete)

// Object.setPrototypeOf()
const newProto = { sayHi() { return "Hi!"; } };
Object.setPrototypeOf(obj, newProto);
console.log(obj.sayHi()); 
