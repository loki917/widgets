// Select elements from the DOM
const myButton = document.getElementById("myButton");
const myInput = document.getElementById("myInput");
const myDropdown = document.getElementById("myDropdown");
const message = document.getElementById("message");

// Add event listener to the button
myButton.addEventListener("click", function() {
    const inputValue = myInput.value; // Get input value
    const selectedOption = myDropdown.value; // Get selected dropdown value
    
    // Display a message with the input value and dropdown option
    message.textContent = `You typed: "${inputValue}" and selected: "${selectedOption}"`;
    
    // Clear the input field
    myInput.value = '';
});

// Add event listener to the input field (Optional: clear message when typing)
myInput.addEventListener("input", function() {
    message.textContent = ''; // Clear message when typing
});
