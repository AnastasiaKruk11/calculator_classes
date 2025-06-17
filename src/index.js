import Calculator from './calculator.js';
import Counting from './counting.js';
import Invoker from './invoker.js';
import './styles.css';
import './theme-mode.js';
import { values, valuesSigns } from './variables.js';

let currentSign = null;
let previousNumber = '';
let currentNumber = '';

const btnsField = document.querySelector('#buttons');
const disWindow = document.querySelector('.display');
const undoBtn = document.querySelector('.undo-btn');

document.addEventListener('click', (event) => {

    const key = Object.keys(values).find(k => values[k] === event.target.textContent);

    const counter = new Counting();
    const invoker = new Invoker();
    const calculator = new Calculator(
        counter,
        invoker,
        previousNumber,
        currentNumber,
        currentSign,
    )
   
    if (valuesSigns.includes(key)) {

        previousNumber = currentNumber;
        currentNumber = '';
        currentSign = key;
        calculator.calculate();

        if (previousNumber !== '') {
            previousNumber = disWindow.textContent;
        }

    } else if (key === 'percent') {
        currentNumber = currentNumber / 100;
        disWindow.textContent = currentNumber;
    
    } else if (key === 'change') {
        currentNumber = currentNumber * -1;
        disWindow.textContent = currentNumber;

    } else if (key === 'allClear') {
        calculator.clear();
        currentSign = null;
        previousNumber = '';
        currentNumber = '';

    } else if (event.target.classList.contains('undo-btn')) {
        calculator.backToPrevious();

    } else if (key === 'dot' && currentNumber.includes('.') || key === 'dot' && currentNumber === '') {
        return;

    } else {
        currentNumber += values[key];
        disWindow.textContent = currentNumber;
    }
       
});