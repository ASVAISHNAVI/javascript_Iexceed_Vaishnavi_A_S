// object literal
const obj1={
    name:"vaish",
    class:"3rd",
    greet(){
        return `hello ${this.name}`;//undefined output when not returning anything
        
    }
};
console.log(obj1.greet());


//new Object
const employee=new Object();
employee.name="hari";
employee.dept="ise";
console.log(employee.dept);


//constructor function 

function Person(name,age){
    this.name=name;
    this.age=age;

}
const p1=new Person("raj",30);
console.log(p1.age);

//Object.create()

const obj2=Object.create(obj1);
obj2.name="sudha";
obj2.neighbor="rani";
console.log(obj2.neighbor);
console.log(obj2.greet());
let obj3=Object.create(obj1,{name:{value:"raamu",writable:false,configurable:false,enumerable:false}});
obj3.name="kirmaada";
console.log(obj3.name)