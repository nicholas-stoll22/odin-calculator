let displayVal = '0';
let buttonA = null;
let buttonB = null;
let operationA = null;
let operationB = null;
let result = null;

const resultDisplay = document.querySelector('.result')
const buttonArr = document.querySelectorAll('button')

function changeDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayVal;
    if (displayVal.length > 9) {
        display.innerText = displayVal.substring(0,9);
    }
}

changeDisplay();

function doOperation(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        if (b === 0) {
            return 'Invalid Response';
        } else {
            return a / b
        }
    }
}

function buttonPush() {
    for (let i =0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener('click', function () {
            if(buttonArr[i].classList.contains('operand')) {
                numPushed(buttonArr[i].value);
                changeDisplay();
            } else if(buttonArr[i].classList.contains('operator')) {
                inputOperator(buttonArr[i].value);
            } else if(buttonArr[i].classList.contains('equals')) {
                inputEquals();
                changeDisplay();
            } else if(buttonArr[i].classList.contains('decimal')) {
                isDecimal(buttonArr[i].value);
                changeDisplay();
            } else if(buttonArr[i].classList.contains('percent')) {
                isPercent(displayVal);
                changeDisplay();
            } else if(buttonArr[i].classList.contains('sign')) {
                signChange(displayVal);
                changeDisplay();
            } else if(buttonArr[i].classList.contains('clear'))
                clearDisplay();
                changeDisplay();
            }     
        )
    }
}

buttonPush();

function numPushed(operand) {
    if(operationA === null) {
        if(displayVal === '0' || displayVal === 0) {
            displayVal = operand;
        } else if(displayVal === buttonA) {
            displayVal = operand;
        } else {
            displayVal += operand;
        }
    } else {
        if(displayVal === buttonA) {
            displayVal = operand;
        } else {
            displayVal += operand;
        }
    }
}

function inputOperator(operator) {
    if(buttonA != null && buttonB === null) {
        operationB = operator;
        buttonB = displayVal;
        result = doOperation(Number(buttonA), Number(buttonB), operationA);
        displayVal = roundAccurately(result, 15).toString();
        buttonA = displayVal;
        result = null;
    } else if(operationA != null && operationB != null) {
        buttonB = displayVal;
        result = doOperation(Number(buttonA), Number(buttonB), operationB);
        operationB = operator;
        displayVal = roundAccurately(result, 15).toString();
        buttonA = displayVal;
        result = null;
    } else { 
        operationA = operator;
        buttonA = displayVal;
    }
}

function inputEquals() {
    if(operationA === null) {
        displayVal = displayVal;
    } else if(operationB != null) {
        buttonB = displayVal;
        result = doOperation(Number(buttonA), Number(buttonB), operationB);
        if(result === 'False') {
            displayVal = 'False';
        } else {
            displayVal = roundAccurately(result, 15).toString();
            buttonA = displayVal;
            buttonB = null;
            operationA = null;
            operationB = null;
            result = null;
        }
    } else {
        buttonB = displayVal;
        result = doOperation(Number(buttonA), Number(buttonB), operationA);
        if(result === 'False') {
            displayVal = 'False';
        } else {
            displayVal = roundAccurately(result, 15).toString();
            buttonA = displayVal;
            buttonB = null;
            operationA = null;
            operationB = null;
            result = null;
        }
    }
}

function isDecimal(dot) {
    if (displayVal === buttonA || displayVal === buttonB) {
        displayVal = '0';
        displayVal += dot;
    } else if (!displayVal.includes(dot)) {
        displayVal += dot;
    }
}

function isPercent(num) {
    displayVal = (num/100).toString();
}

function signChange(num) {
    displayVal = (num * -1).toString();
}

function clearDisplay() {
    displayVal = '0';
    buttonA = null;
    buttonB = null;
    operation = null;
    result = null;
}

function backspace() {
    if (buttonA != null) {
        buttonA = null;
        changeDisplay();
    }
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}