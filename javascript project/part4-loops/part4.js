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


// const favMovie="avatar";

// let guess=prompt('enter your favorite movie');
// while((guess!=favMovie)){
//     if((guess!="quit")){
//         console.log("game over");
//         break;
//     }
//     console.log("wrong guess");
//      guess=prompt('please try again');

// }

// if(guess==favMovie){
//     console.log("correct guess");
// }



// use of for of loop
let fruits=["mango", "apple"];

for(let fruit of fruits){
    console.log(fruit);
}

// assignment question
//1) Qs1.Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example:if arr=[1,2,3,4,5,6,2,3]& num=2
// Result should be arr=[1,3,4,5,6,3]

let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0; i<arr.length; i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);
// 2) Write a JS program to find the sum of digits in a number.
// Example:ifnumber=287152,sum=25

let number=287152;
let sum=0;
while(number>0){
    sum=sum+number%10;
    number=parseInt(number/10);
}
console.log(sum);
// 3) Find the largest number in an array with only positive numbers

let arr2=[1,2,3,4,5,6,2,3];
let largest=0;
for(let i=0; i<arr2.length; i++){
    if(arr2[i]>largest){
        largest=arr2[i];
    }
}