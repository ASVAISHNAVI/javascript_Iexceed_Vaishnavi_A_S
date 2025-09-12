function outer()
{
   let count=0;
   function inner()
   {
       count++;
       return count;
   }
   return inner();
};
 
console.log(outer());
console.log(outer());