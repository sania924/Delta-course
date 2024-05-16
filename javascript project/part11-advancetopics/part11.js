// concept 1
// The call stack operates in a Last In, First Out (LIFO) manner.
// Each time a function is called, it's added to the stack.
// Once a function completes, it's removed from the stack.
// If a function calls another function, the new function gets added to the top of the stack.
function first() {
    console.log("First function");
    second();
    console.log("First function ends");
  }
  
  function second() {
    console.log("Second function");
  }
  
  first();
  

  // callback hell
// By nesting the calls this way, each
//  color change waits for the previous one to complete before starting, 
//  ensuring the changes happen sequentially with the specified delays.



  h1 = document.querySelector("h1");
    //nextColorChange: A callback function to call after
  //  the color has been changed (used to chain the next color change).
function changeColor(color, delay, nextColorChange) { 
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});

// example 2 nested callback
function savetoDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

savetoDb(
    "apna college",
    () => {
        console.log("success: your data was saved");
        // Nested callback for another save operation
        savetoDb(
            "additional data",
            () => {
                console.log("success: additional data was saved");
            },
            () => {
                console.log("failure: weak connection. additional data not saved");
            }
        );
    },
    () => {
        console.log("failure: weak connection. data not saved");
    }
);

// Promises allow chaining and flattening of nested callbacks.
// Async/Await provides a more synchronous-looking code structure for asynchronous operations.
// Modularization helps organize code into smaller, more manageable pieces.
// Libraries like async.js offer structured ways to handle async flows.
// Using these techniques, you can significantly improve the readability and maintainability 
// of your asynchronous JavaScript code, avoiding the pitfalls of callback hell.