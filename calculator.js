const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', () => examine(button.value)));

let num1 = '';
let num2 = '';
let operator = '';

// arrow functions
let add = (a, b) => (a + b);
let subtract = (a, b) => (a - b);
let multiply = (a, b) => ((a * b) * 10 / 10);
let divide = (a, b) => ((a / b) * 10 / 10);

function operate(a, op, b){
    a = +a;
    b = +b;
    switch(op){
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
        default:  return "ERROR";
    }
}

function examine(value){
    if (value === 'AC'){
        resetValues();
    } else if(isDigit(value) || value === '.') {
        if(operator === '') {  
            num1 = num1 + value;
            updateDisplay(num1);
        } else {
            num2 = num2 + value;
            updateDisplay(num2);
        }
    } else if( (isOperator(value) || value === '=') && (num2 !== '') ) {
        num1 = operate(num1, operator, num2);
        num2 = '';
        operator = '';
        updateDisplay(num1);
        if(num1 === 'ERROR') resetValues();
    } else if (isOperator(value)) {
        operator = value;
    }
}

function isDigit(value){
    return (value === '00') || (value >= '0' && value <= '9');
}

function isOperator(value){
    return (value === '+' || value === '-' || value === '*' || value === '/');
}

function resetValues(){
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = '0';
}

function updateDisplay(text){
    display.textContent = `${text}`;
}