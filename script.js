let display = document.getElementById('result');

function appendValue(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
