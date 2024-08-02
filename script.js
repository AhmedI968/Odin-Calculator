// Define variables
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let firstOperand = "";
let secondOperand = "";
let operator = "";
let displayValue = "";

function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    }
}

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            if (buttons[i].classList.contains("operand")){
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains("operator")) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains("clear")) {
                clear();
                updateDisplay();
            } else if (buttons[i].classList.contains("equals")) {
                calculate();
                updateDisplay();
            } else if (buttons[i].classList.contains("decimal")) {
                inputDecimal();
                updateDisplay();
            } else if (buttons[i].classList.contains("sign")) {
                handleSign();
                updateDisplay();
            } else if (buttons[i].classList.contains("percent")) {
                handlePercent();
                updateDisplay();
            }
        });
    }
}

// Function to handle the input of operand
function inputOperand(value) {
    // If operator is empty, input value to firstOperand
    if (operator === "") {
        firstOperand += value;
        displayValue = firstOperand;
    } else {
        // If operator is not empty, input value to secondOperand
        secondOperand += value;
        displayValue = secondOperand;
    }
}

// Function to handle the input of an operator
function inputOperator(newOp) {
    // If firstOperand is empty, return
    if (firstOperand === "") {
        return;
    }
    // If secondOperand is not empty, calculate
    if (secondOperand !== "") {
        calculate();
    }
    // Set operator to new operator
    operator = newOp;
}

// Function to clear the display
function clear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    displayValue = "0";
}

// Call functions
clickButton();