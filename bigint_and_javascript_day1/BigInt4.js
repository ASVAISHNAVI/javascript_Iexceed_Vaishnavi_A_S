
function fibonacci(n){
    let a=0n,b=1n;
    for(let i=0n;i<=n;i++){
        console.log(a);
        [a,b]=[b,a+b];
    }
    return a;
}
console.log(fibonacci(10n));