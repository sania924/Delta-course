// map method
// let num=[1,2,3,4]
// let double=num.map((el)=>{
//     return el *el;
// });
//  map method example 2 fint gpa of marks
let student=[
    {
        name:"saima",
        marks:80,
    },
    {
        name:"saniya",
        marks:90,
    },
    {
        name:"sana",
        marks:350,
    },
]
let gpa=student.map((result)=>{
    return result.marks /10;
})


// Example of some method()
const numbers = [1, 2, 3, 4, 5];

// Check if some numbers are greater than 3
const hasGreaterThanThree = numbers.some(num => num > 3);
console.log(hasGreaterThanThree); // Output: true (since 4 and 5 are greater than 3)

// Example of every method()
// Check if every number is less than 10
const allLessThanTen = numbers.every(num => num < 10);
console.log(allLessThanTen); // Output: true (all numbers are less than 10)


// reduce function => after all calculation return single value

let number=[1,2,3,4]
let finalVal=number.reduce((acc,el)=>{
    return acc*el;
});
console.log(finalVal);

// Example of map()
const n = [1, 2, 3, 4, 5];

// Multiply each number by 2
const doubledNumbers = n.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example of filter()
// Filter out even numbers
const oddNumbers = n.filter(num => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]


// rest
// if you're making a function to add up numbers, but you're not sure how many numbers 
// the user will provide, you can use the rest parameter to collect them all:

function addNumbers(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(addNumbers(1, 2, 3)); // Output: 6
console.log(addNumbers(1, 2, 3, 4, 5)); // Output: 15
//  function with rest parameter
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Rest Parameter with Spread Operator:
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// spread
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = [...array1, ...array2];
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]


// Array Destructuring:
// You can extract individual elements from an array and assign them to variables
//  using array destructuring. Here's how it works:

const restnumber = [1, 2, 3, 4, 5];
const [first, second, ...rest] = restnumber;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// Object Destructuring:
// Similarly, you can extract properties from objects 
// and assign them to variables using object destructuring:
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};

const { name1, age } = person;

console.log(name1); // Output: 'Alice'
console.log(age); // Output: 30

// Nested Destructuring:
const user = {
    name: 'Bob',
    age: 25,
    address: {
        city: 'London',
        country: 'UK'
    }
};

const { name2, address: { city } } = user;

console.log(name2); // Output: 'Bob'
console.log(city); // Output: 'London'
//  Assigment que
// 1) To square and sum the array elements using arrow functions
//  and then find the average of the array, you can follow these steps:
// Sample array
const abe = [1, 2, 3, 4, 5];

// Square each element using map() and arrow function
const squaredNumbers = abe.map(num => num * num);

// Sum the squared numbers using reduce() and arrow function
const sum = squaredNumbers.reduce((acc, val) => acc + val, 0);

// Find the average
const average = sum / abe.length;

console.log("Squared Numbers:", squaredNumbers);
console.log("Sum:", sum);
console.log("Average:", average);


// Q2:create a new array where each element is equal to the original
//  element plus 5 using the map() function:
// Sample array
const originalArray = [1, 2, 3, 4, 5];

// Create a new array using map() where each element is original element plus 5
const newArray = originalArray.map(num => num + 5);

console.log("Original Array:", originalArray);
console.log("New Array (each element plus 5):", newArray);


// // Q3:
// To create a new array with elements in uppercase of words present in the original array,
//  you can use the map() function along with the toUpperCase() method.
// Sample array
const oArray = ["apple", "banana", "orange", "grape"];

// Create a new array with elements in uppercase
const nArray = oArray.map(word => word.toUpperCase());

console.log("Original Array:", oArray);
console.log("New Array (uppercase):", nArray);

// Q4 // "Write a function called doubleAndReturnArgs which accepts an array and
//  a variable number of arguments. The function should return a new array
//   with the original array values and all of the additional arguments doubled."
// method1
const doubleAndReturnArgs=(arr,...args)=> 
    [...arr,...args.map((v)=>v*2),]; 
doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
doubleAndReturnArgs([2],10,4);////[2,20,8]
// method2

function doubleAndReturnArgs(array, ...args) {
    // Map over the original array and double each value
    const doubledArray = array.map(value => value * 2);
    // Map over additional arguments and double each value
    const doubledArgs = args.map(value => value * 2);
    // Concatenate the original array with doubled additional arguments
    return [...doubledArray, ...doubledArgs];
}
// Q5"Write a function called mergeObjects that accepts two objects and returns 
// a new object which contains all the keys and values of the first object and second object."
function mergeObjects(obj1, obj2) {
    // Use the spread operator (...) to spread out the key-value pairs of both objects into a new object
    return { ...obj1, ...obj2 };
}

// Example usage:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObject = mergeObjects(obj1, obj2);
console.log(mergedObject);
s