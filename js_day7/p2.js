let trainee={name:"vaish"};

let trainer={
    name:"raj",
    displayName:function()
    {
        return this.name;
    },
    calculateMyAge:function(dob)
    {
        this.dob=dob;
        return new Date().getFullYear()-this.dob
 
    }
 
};

console.log(trainer.displayName());
console.log(trainer.displayName.bind(trainee)());
console.log(trainer.calculateMyAge(1980));
let trainee_age=trainer.calculateMyAge.bind(trainee);
console.log(trainee_age(2003));
