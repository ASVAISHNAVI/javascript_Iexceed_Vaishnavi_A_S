const sample = {
  prop: 123,
  toString() {
    return `Value: ${this.prop}`;
  }
};

// hasOwnProperty()
console.log(sample.hasOwnProperty('prop'));

// isPrototypeOf()
console.log(Object.prototype.isPrototypeOf(sample)); 
//Object.prototype is built in prototype that all plain object inherit from.
// propertyIsEnumerable()
console.log(sample.propertyIsEnumerable('prop')); 


// toLocaleString()
console.log(sample.toLocaleString());

// toString()
console.log(sample.toString()); 

// valueOf()
console.log(sample.valueOf());
