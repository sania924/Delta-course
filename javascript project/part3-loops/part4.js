// Array methods
let month =["january","july","march", "August"]
console.log(month)

// for loop print any table
// let n = prompt('enter any number')
// n=parseInt(n);
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// favorite movie 
const favMovie="avatar";

let guess=prompt('enter your favorite movie');
while((guess!=favMovie)){
    if((guess!="quit")){
        console.log("game over");
        break;
    }
    console.log("wrong guess");
     guess=prompt('please try again');

}

if(guess==favMovie){
    console.log("correct guess");
}
// use of for of loop
let fruits=["mango", "apple"];

for(let fruit of fruits){
    console.log(fruit);
}

