function functionname(parameters)
 {
    //body of the function
 }
 
 let username="Rakesh";
 
 function displayMe()
  {
    let username="sivam"; // local variable
    console.log("welcome\t"+username);
  }
 
  console.log(username);
  displayMe();
 
  function addition(x,y,z)
  {
    return x+y+z;
  }
  console.log(addition(1,2,3));
 
  function displayData(name,age,city="Bangalore")
  {
    console.log(name);
    console.log(age);
    console.log(city);
  }
 
  displayData("Rakesh",21,"Mysuru");
 
let getData=(x,y)=>x+y;
console.log(getData(10,65));
 
let getMe=(x)=>x.toUpperCase();
console.log(getMe("rakesh"))
console.log(getData(10,43));


let input = "hello world";
let output = input.replace(/\s+/g, "").toUpperCase();

console.log(output); 

const cleanString = str => str.replace(/\s+/g, "").toUpperCase();


console.log(cleanString("  hello   world ")); 

let trimString = str => (str.trim()).toUpperCase();             

console.log(trimString("  hello  ")); 
let cut=str=>(str.trim()).toUpperCase();
console.log(cut(" hi  "))


 
let getMee=x=>(x.toUpperCase());
console.log(getMee("vaishnavi"));
 
console.log(getData(10,43));
 
let getMyMail=(name,age,city)=>name+age+city+"@"+"gmail.com";
console.log(getMyMail("VAISH",21,"blore"));
 
 