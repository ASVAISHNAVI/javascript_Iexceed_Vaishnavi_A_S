//creating objet by literal
const object1={name:'vaish',age:21,school:'NHCE'}
console.log(object1);
//to create object by constructor
const obj2=new Object();
obj2.name="vaishnavi";
obj2.age=40;
console.log(obj2);


const customer={name:'vaish',
    age:21,
    account:{
        balance:10000,
        deposit:function(amt){
            return this.balance+=amt;
        },
        withdraw: function(amt){
            return this.balance-=amt;
        }
    }
}
console.log(customer.account.withdraw(1000));
console.log(customer.account.deposit(100));