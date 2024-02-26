// Number Buttons
const oneBtn = document.querySelector('#one-btn');
const twoBtn = document.querySelector('#two-btn');
const threeBtn = document.querySelector('#three-btn');
const fourBtn = document.querySelector('#four-btn');
const fiveBtn = document.querySelector('#five-btn');
const sixBtn = document.querySelector('#six-btn');
const sevenBtn = document.querySelector('#seven-btn');
const eightBtn = document.querySelector('#eight-btn');
const nineBtn = document.querySelector('#nine-btn');
const zeroBtn = document.querySelector('#zero-btn');
const pointBtn = document.querySelector('#point-btn');
const allNumBtns = document.querySelectorAll('.num-btns');

// Operator Buttons
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const equalsBtn = document.querySelector('#equals-btn');
const clearBtn = document.querySelector('#clear-btn');
const opBtns = document.querySelectorAll('.btns');

const txtBox = document.querySelector('#txt-box');
txtBox.textContent = '';

let displayValue = [];
let joinedDV = '';
let resultHolder = 0;
let result = 0;
let num1 = 0;
let num2 = 0;
let operator = '';
let pastResult = false;

// Button Click Function
allNumBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        displayValue.push(btn.value);
        joinedDV = displayValue.join('');
        txtBox.textContent = `${joinedDV}`;
    });
});

// Operator Click Functions
clearBtn.addEventListener('click', () => {
    txtBox.textContent = '';
    displayValue = [];
    operator = '';
    resultHolder = 0;
    pastResult = false;
});

addBtn.addEventListener('click', () => {
    addBtn.style.color = 'orange';
    addBtn.style.backgroundColor = 'white';
    multiplyBtn.style.color = 'black';
    multiplyBtn.style.backgroundColor = 'orange'
    subtractBtn.style.color = 'black';
    subtractBtn.style.backgroundColor = 'orange'
    divideBtn.style.color = 'black';
    divideBtn.style.backgroundColor = 'orange'

    if(operator !== ''){
        if(pastResult == true){
            num1 = resultHolder;
        }
        num2 = Number(joinedDV);
        operate(num1, num2);
    }
    num1 = Number(joinedDV);
    displayValue = [];
    operator = '+';
});

subtractBtn.addEventListener('click', () => {
    subtractBtn.style.color = 'orange';
    subtractBtn.style.backgroundColor = 'white';
    multiplyBtn.style.color = 'black';
    multiplyBtn.style.backgroundColor = 'orange'
    addBtn.style.color = 'black';
    addBtn.style.backgroundColor = 'orange'
    divideBtn.style.color = 'black';
    divideBtn.style.backgroundColor = 'orange'

    if(operator !== ''){
        if(pastResult == true){
            num1 = resultHolder;
        }
        num2 = Number(joinedDV);
        operate(num1, num2);
    }
    num1 = Number(joinedDV);
    displayValue = [];
    operator = '-';
});

multiplyBtn.addEventListener('click', () => {
    multiplyBtn.style.color = 'orange';
    multiplyBtn.style.backgroundColor = 'white';
    addBtn.style.color = 'black';
    addBtn.style.backgroundColor = 'orange'
    subtractBtn.style.color = 'black';
    subtractBtn.style.backgroundColor = 'orange'
    divideBtn.style.color = 'black';
    divideBtn.style.backgroundColor = 'orange'

    if(operator !== ''){
        if(pastResult == true){
            num1 = resultHolder;
        }
        num2 = Number(joinedDV);
        operate(num1, num2);
    }
    num1 = Number(joinedDV);
    displayValue = [];
    operator = '*';
});

divideBtn.addEventListener('click', () => {
    divideBtn.style.color = 'orange';
    divideBtn.style.backgroundColor = 'white';
    multiplyBtn.style.color = 'black';
    multiplyBtn.style.backgroundColor = 'orange'
    subtractBtn.style.color = 'black';
    subtractBtn.style.backgroundColor = 'orange'
    addBtn.style.color = 'black';
    addBtn.style.backgroundColor = 'orange'

    if(operator !== ''){
        if(pastResult == true){
            num1 = resultHolder;
        }
        num2 = Number(joinedDV);
        operate(num1, num2);
    }
    num1 = Number(joinedDV);
    displayValue = [];
    operator = '/';
});

equalsBtn.addEventListener('click', () => {
    if(pastResult == true){
        num1 = resultHolder;
    }
    num2 = Number(joinedDV);
    operate(num1, num2);
    operator = '';
});

opBtns.forEach((btn) => {
    equalsBtn.addEventListener('click', () => {
        btn.style.color = 'black';
        btn.style.backgroundColor = 'orange';
    });
    clearBtn.addEventListener('click', () => {
        btn.style.color = 'black';
        btn.style.backgroundColor = 'orange';
    });
});

const addition = (num1, num2) => {return num1 + num2}

const subtract = (num1, num2) => {return num1 - num2}

const multiply = (num1, num2) => {return num1 * num2}

const divide = (num1, num2) => {return num1 / num2}

const operate = (num1, num2) => {
    if (operator == '+') {
        result = addition(num1, num2);
        resultHolder = result;
        txtBox.textContent = result;
        displayValue = [];
        joinedDV = '';
        pastResult = true;
    } else if (operator == '-') {
        result = subtract(num1, num2);
        resultHolder = result;
        txtBox.textContent = result;
        displayValue = [];
        joinedDV = '';
        pastResult = true;
    } else if (operator == '*') {
        result = multiply(num1, num2);
        resultHolder = result;
        txtBox.textContent = result;
        displayValue = [];
        joinedDV = '';
        pastResult = true;
    } else if (operator == '/') {
        result = divide(num1, num2);
        resultHolder = result;
        txtBox.textContent = result;
        displayValue = [];
        joinedDV = '';
        pastResult = true;
    } else {
        txtBox.textContent = "ERROR";
    }
}





