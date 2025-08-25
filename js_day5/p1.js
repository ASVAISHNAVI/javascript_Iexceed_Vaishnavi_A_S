
 
const bankaccount={
    balance:1000,
    deposit:function(amt){
        this.balance+=amt;
    },
    withdraw:function(amt){
        this.balance-=amt;
    },
    getbalance: function(amt){
        return this.balance;
    }
}
const currentaccount=Object.create(bankaccount);
currentaccount.accountholder="vaishnavi";
currentaccount.bank="standard chartered";
currentaccount.location="indiranager";


let businessbankaccount=Object.create(bankaccount,{accno:{value:"bba01",configurable:true,writable:true,enumerable:true},
    holder:{value:"astosh",writable:false,configurable:true,enumerable:true},
    balance:{value:1,writable:true}});
businessbankaccount.holder="abcd";
console.log(businessbankaccount.holder);
console.log(businessbankaccount.balance);
businessbankaccount.deposit(200000);
console.log(businessbankaccount.balance);
businessbankaccount.withdraw(50001);
console.log(businessbankaccount.balance);


console.log(currentaccount.accountholder);
currentaccount.deposit(2000);
currentaccount.withdraw(30);
console.log(currentaccount.getbalance());
 