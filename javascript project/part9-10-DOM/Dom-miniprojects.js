

// // Todoapp
// let ul=document.querySelector("ul");
// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//    item.innerText=inp.value;
//    let delbtn=document.createElement("button");
//    delbtn.innerText="delete";
//    delbtn.classList="delete";
//    item.appendChild(delbtn )
//     console.log(inp.value)
//     ul.appendChild(item);
//     inp.value="";     
// });
// ul.addEventListener("click", function(event){
//     // console.log(event.target)
//     if(event.target.nodeName=="BUTTON"){
//         event.target.parentElement.remove();
//     }
// })

// with comments
// Select the <ul> element where to-do items will be added
let ul = document.querySelector("ul");

// Select the <button> element that will be used to add new to-do items
let btn = document.querySelector("button");

// Select the <input> element where the user enters the to-do item text
let inp = document.querySelector("input");

// Add an event listener to the "Add" button to handle adding new to-do items
btn.addEventListener("click", function() {
    // Create a new <li> element for the to-do item
    let item = document.createElement("li");

    // Set the text of the <li> element to the value entered in the input field
    item.innerText = inp.value;

    // Create a new <button> element for deleting the to-do item
    let delbtn = document.createElement("button");

    // Set the text of the delete button to "delete"
    delbtn.innerText = "delete";

    // Add a class to the delete button for styling or identification purposes
    delbtn.classList = "delete";

    // Append the delete button to the <li> element
    item.appendChild(delbtn);

    // Log the value entered in the input field to the console (for debugging)
    console.log(inp.value);

    // Append the <li> element (with the delete button) to the <ul> element
    ul.appendChild(item);

    // Clear the input field to prepare for the next to-do item
    inp.value = "";     
});

// Add an event listener to the <ul> element to handle deleting to-do items
ul.addEventListener("click", function(event) {
    // Check if the clicked element is a button
    if(event.target.nodeName == "BUTTON") {
        // Remove the parent <li> element of the clicked button (the to-do item)
        event.target.parentElement.remove();
    }
});
