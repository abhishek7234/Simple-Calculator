let display = document.getElementById('display');

// Display the welcome message for 2 seconds
function showWelcomeMessage() {
    display.value = "Welcome Gwanduuu"; // Display the welcome message
    setTimeout(() => {
        display.value = ""; // Clear the welcome message
    }, 2000);
}

// Append value to the display
function appendValue(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result of the expression
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        alert("Invalid Expression");
    }
}

// Listen for keyboard inputs
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (/\d/.test(key) || ['+', '-', '*', '/', '%', '.'].includes(key)) {
        appendValue(key); // Append numbers and operators
    } else if (key === "Enter") {
        calculate(); // Calculate result on Enter
    } else if (key === "Backspace") {
        deleteLast(); // Delete last character on Backspace
    } else if (key === "Escape") {
        clearDisplay(); // Clear display on Escape
    }
});

// Initialize the calculator
showWelcomeMessage();
