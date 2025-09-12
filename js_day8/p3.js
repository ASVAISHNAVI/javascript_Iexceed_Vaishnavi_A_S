// function display()
// {
//   let states=["Andhra","Tamilnadu","Karnataka","Kerala"];  
 
//     for(i in states)
//     {
//         if(states[i]=="Karnataka")
//         {
//             console.log(`${states[i]} is commercial capital of India`);
//         }
           
//     }
// }
 
// setTimeout(display,4000,)
 
 
function display(...args)
{
 
    for(i in args)
    {
        if(args[i]=="Karnataka")
        {
            console.log(`${args[i]} is commercial capital of India`);
        }
           
    }
}
 
setTimeout(display,4000,"Andhra","Tamilnadu","Karnataka","Kerala")
 
 