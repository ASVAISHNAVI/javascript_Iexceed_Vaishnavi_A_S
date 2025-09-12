const student={
    name:"vaish",
    greetings:function()
    {
        console.log(`Welcome Ms ${this.name}`);
    }
};
 
// setTimeout(student.greetings,1000);
 
setTimeout(function(){
 student.greetings();  
},2000);
 

let greet=student.greetings.bind(student);
setTimeout(greet,2000);