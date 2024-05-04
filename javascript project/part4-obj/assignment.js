console.log("hello world")
// Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6]
let diceRoll = Math.floor(Math.random()*6)+1;
console.log(diceRoll)

// Create an object representing a car that stores the following properties for the car
// :name, model, color. Print the car’s name.
let car={
    name:"crolla",
    model:2017,
    color:'red',
};
console.log(car.name)

// Qs3.Create an object Person with their name,age and city.
// Edit their city’s original value to change it to “NewYork”.
// Add a new property country and set it to the United States
const Person={
    name:"JaneDoe",
    age:21,
    city:"NewJersey",
};
Person.city="NewYork";
Person.country="UnitedStates";
console.log(Person);