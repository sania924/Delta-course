let a = 12;
let b=10;
console.log(`the total amount is : ${a+b}rupees`)
let color="yellow";
if(color==="red"){
    console.log('stop')
}
else if(color==="yellow"){
    console.log('slowdown')
}
else if(color==="green"){
    console.log('go')
}

// else if practice que
let size = "XL";
if(size==="XL"){
    console.log('price is Rs:250')
} 
else if(size==="L")
{  
      console.log('price is Rs:200')
} 
else if(size==="M")
{
    console.log('price is Rs:100')
}else{
    console.log('price is Rs:50')
}

// logical op practice Qs
let str = "Saniya";
if ((str[0] === 'S') && (str.length > 3)) {
    console.log("it is a good string");
} else {
    console.log("it is not a good string");
}

// Assignment questions
// Qs1.Create a number variable num with some value.Now, print“good” if the number is divisibleby 10 
// and print“bad” if it is not.
let number =12;
if(number%10==0){
    console.log('good')
}
else{
    console.log('bad')
}

// Qs2.Take the user's name &age as input using prompts.Then return back the following statement to the 
// user as an alert(by substituting their name & age):name is age years old.[Use template Literals to print this sentence]
let age=prompt('enter age');
let name=prompt('enter name');
console.log(`${name}  is ${age} years old`);

// Qs3.Write a switch statement to print the months in a quarter.Months in Quarter 1:January,February,March
//  Months in Quarter2:April,May,June 
//  MonthsinQuarter3:July,August,September 
//  Months in Quarter4:October,November,December
//  [Use the number as the case value in switch]
let quarter=1;
switch(quarter)
{
    case 1:console.log("January,February,March");
    break;
    case 2:console.log("April,May,June");
    break;
    case 3:console.log("July,August,September");
    break;
    case 4:console.log("October,November,December");
    break;
    default:console.log("NOTAQUARTER!");}






// Qs4.A string is a golden string if it starts with the character ‘A’or‘a’and has a total 
// length greater than 5.For a given string print if it is golden or not.
let str2 = "Alpha2";
if (((str2[0] === 'A')|| (str2[0] === 'a')) && (str2.length > 5)) {
    console.log("it is a golden string");
} else {
    console.log("it is not a good string");
}
// Qs5.Write a program to find the largest of 3 numbers
let x=3;
let y=4;
let z=6;
if(x>y && x>z) {
    console.log("x is largest");
}
else if(y>x && y>z) {
    console.log("y is largest");
}
else if(z>x && z>y) {
    console.log("z is largest");
}

