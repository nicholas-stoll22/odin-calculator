let displayVal = '3';
let buttonA = null;
let buttonB = null;
let operation = null;

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
            displayVal = buttonArr[i].value
            changeDisplay()
        })
    }
}

buttonPush();