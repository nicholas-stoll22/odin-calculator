let displayVal = '0';
const resultDisplay = document.querySelector(".result")

function display() {
    display = document.getElementById('display');
    display.innerText = displayVal;
    if (displayVal.length > 9) {
        display.innerText = displayVal.substring(0,9);
    }
}

display();

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