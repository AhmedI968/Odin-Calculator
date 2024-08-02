// Functions to compute the basic 4 operations
// Add
function add(a, b) {
    return a + b;
}

// Subtract
function subtract(a, b) {
    return a - b;
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Function that handles the operation
function operate(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}


