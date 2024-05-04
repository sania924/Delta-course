function printName(){
    let age=19;
    if (age>=18)
{console.log("adult")}
}
printName();
function diceroll(){
    let ranndom= Math.floor(Math.random()*6)+1;
    console.log(ranndom);
}
diceroll();
// calculate average
function avgnum(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}

avgnum(10,20,30);
// return sum 1 to n
function sumNum(n){
    let sum=0;
    for(let i=1; i<=n; i++)
    {
        sum=sum+i;
    }
    return sum;
}


// 3 scopes
let greet="hello";  //global scope(acess variable globally in whole)
function changeGreat(){
    greet="hi";
    console.log(greet); //function scope(not access variable outside the outerfuction)
    function innerGreat(){
        console.log(greet);  //lexical scope (not access variable outside from innerfunction)
    }
    innerGreat();
}
console.log(greet);
console.log(great);

changeGreat();
// arrow function
const err=(a,b)=>(a+b);