let displayVal = '0';

function display() {
    display = document.getElementById('display');
    display.innerText = displayVal;
    if (displayVal.length > 9) {
        display.innerText = displayVal.substring(0,9);
    }
}

display();