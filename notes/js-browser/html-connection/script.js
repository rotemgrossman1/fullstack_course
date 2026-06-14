// Catch the elements
console.log("JS is connected!"); // <-- Add this
const itemInput = document.getElementById("item");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

// Add event listener to the add button
addButton.addEventListener("click", function() {
    // 1. Create a new list item (Only do this once!)
    const listItem = document.createElement("li");
    
    // 2. Set the text of the list item to the input value
    listItem.textContent = itemInput.value;
    
    // 3. Append it to your <ul> list
    list.appendChild(listItem);
    
    // 4. Clear the input field for the next item
    itemInput.value = "";
});