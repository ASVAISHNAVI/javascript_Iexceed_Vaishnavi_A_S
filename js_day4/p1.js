 
const account={
    accountnumber:1,
    holdername:"Bhargav",
    balance:120000,
    showdetails:function()
                {
                    console.log(`Account:${this.accountnumber} hoder:${this.holdername} balance:${this.balance}`)
                }
   
};
 
account.showdetails();
  
const account1={
    accountnumber:1,
    holdername:"Bhargav",
    balance:120000,
    showdetails:function()
                {
                    console.log(`Account:${this.accountnumber} hoder:${this.holdername} balance:${this.balance}`);
                },
    deposit:function(amt){return this.balance+amt}
   
   
};
account1.showdetails();
console.log(account1.deposit(1000));
 