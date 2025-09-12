let parent={
    name:"shiva",
    calculateAge:function(dob)
    {
        this.dob=dob;
        console.log(new Date().getFullYear()-this.dob);
    },
    qualification:"B.Tech",
};
 
let child={
    name:"vaishnavi",
    __proto__:parent,
 
};
 
let quali={
    __proto__:child,
}
// child.__proto__=parent;
 
child.calculateAge(2002);
console.log(quali.qualification);
 
 