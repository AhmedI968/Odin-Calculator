// Define variables
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let firstOperand = "";
let secondOperand = "";
let operator = "";
let displayValue = "0";
let isResultDisplayed = false;

function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 9) {
        display.textContent = displayValue.substring(0, 9);
    };
};

// Function to add event listener to buttons depending on their classes
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
            } else if (buttons[i].classList.contains("delete")) {
                handleDelete();
                updateDisplay();
            };
        });
    };
};

// Function to handle the input of operand
function inputOperand(value) {
    // If isResultDisplayed is true and operator is empty, reset the display so a new calculation is set
    if (isResultDisplayed && operator === "") {
        firstOperand = value;
        secondOperand = "";
        operator = "";
        displayValue = firstOperand;
        isResultDisplayed = false;
    } else {
        if (value === "0" && displayValue === "0") {
            return;
        }; 
        if (operator === "") {
            firstOperand += value;
            displayValue = firstOperand;
        } else {
            secondOperand += value;
            displayValue = secondOperand;
        };
    };
};

// Function to handle the input of an operator
function inputOperator(newOp) {
    if (operator !== "") {
        calculate();
        updateDisplay();
    }
    // If firstOperand is empty, return
    if (firstOperand === "") {
        return;
    };
    // If secondOperand is not empty, calculate
    if (secondOperand !== "") {
        calculate();
    };
    // Set operator to new operator
    operator = newOp;
};

// Function to clear the display
function clear() {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    displayValue = "0";
    isResultDisplayed = false;
};

// Function to calculate the result
function calculate () {
    if (firstOperand === "" || secondOperand === "") {
        return;
    } else {
        if (operator === "+") {
            displayValue = parseFloat(firstOperand) + parseFloat(secondOperand);
        } else if (operator === "-") {
            displayValue = parseFloat(firstOperand) - parseFloat(secondOperand);
        } else if (operator === "*") {
            displayValue = parseFloat(firstOperand) * parseFloat(secondOperand);
        } else if (operator === "/") {
            if (secondOperand === "0") {
                displayValue = "ERROR :)";
                return;
            };
            displayValue = parseFloat(firstOperand) / parseFloat(secondOperand);
        };
        displayValue = roundTo(displayValue, 8);
        firstOperand = displayValue;
        secondOperand = "";
        operator = "";
        isResultDisplayed = true;
    };
};

// Function to handle input of a decimal
function inputDecimal() {
    if (operator === "") {
        if (!firstOperand.includes(".")) {
            firstOperand += ".";
            displayValue = firstOperand;
        };
    } else {
        if (!secondOperand.includes(".")) {
            secondOperand += ".";
            displayValue = secondOperand;
        };
    };
};

// Function to handle input of a sign
function handleSign() {
    if (operator === "") {
        firstOperand = parseFloat(firstOperand) * -1;
        if (Number.isNaN(firstOperand)) {
            firstOperand = "";
            displayValue = "0";
            return;
        };
        displayValue = firstOperand;
    } else {
        secondOperand = parseFloat(secondOperand) * -1;
        if (Number.isNaN(secondOperand)) {
            firstOperand = "";
            displayValue = "0";
            return;
        };
        displayValue = secondOperand;
    };
};

// Function to handle input of a percent
function handlePercent() {
    if (operator === "") {
        firstOperand = parseFloat(firstOperand) / 100;
        if (Number.isNaN(firstOperand)) {
            firstOperand = "";
            displayValue = "0";
            return;
        };
        displayValue = firstOperand;
    } else {
        secondOperand = parseFloat(secondOperand) / 100;
        if (Number.isNaN(secondOperand)) {
            firstOperand = "";
            displayValue = "0";
            return;
        };
        displayValue = secondOperand;
    };
};

// Function to handle delete
function handleDelete() {
    if (displayValue === "0") {
        return;
    } else {
        if (operator === "") {
            if (firstOperand.length === 1) {
                firstOperand = "";
                displayValue = "0";
            } else {
                firstOperand = firstOperand.slice(0, -1);
                displayValue = firstOperand;
            };
        } else {
            if (secondOperand.length === 1) {
                secondOperand = "";
                displayValue = "0";
            } else {
                secondOperand = secondOperand.slice(0, -1);
                displayValue = secondOperand;
            };
        }
    }
}

// Function to handle rounding the numbers
function roundTo(num, places) {
    const factor = Math.pow(10, places);
    return Math.round(num * factor) / factor;
};

// Call functions
clickButton();