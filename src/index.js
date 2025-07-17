import Calculator from './calculator.js';
import Counting from './counting.js';
import Invoker from './invoker.js';
import './styles.css';
import './theme-mode.js';
import { values, valuesNumbers, valuesSigns } from './variables.js';

let currentSign = null;
let previousNumber = '';
let currentNumber = '';

const wrapper = document.querySelector('.wrapper');
const displayWindow = document.querySelector('.display');
const invoker = new Invoker();

wrapper.addEventListener('click', (event) => {

    const value = event.target.textContent;

    const counter = new Counting();
    const calculator = new Calculator(
        counter,
        invoker,
        previousNumber,
        currentNumber,
        currentSign,
    )
   
    if (valuesSigns.includes(value) || value === values.equal) {

        if (value !== values.equal) {
            currentSign = value;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber = displayWindow.textContent;
            currentSign = null;
        }
        
        calculator.calculate();
        invoker.useStorage(displayWindow.textContent);
        
        if (previousNumber !== '') {
            previousNumber = displayWindow.textContent;
        }

    } else if (value === values.percent) {
        currentNumber = currentNumber / 100;
        displayWindow.textContent = currentNumber;
    
    } else if (value === values.change) {
        currentNumber = currentNumber * -1;
        displayWindow.textContent = currentNumber;

    } else if (value === values.allClear) {
        calculator.clear();
        currentSign = null;
        previousNumber = '';
        currentNumber = '';

    } else if (event.target.textContent.includes('Undo')) {
        displayWindow.textContent = invoker.undo();

    } else if (value === values.dot && currentNumber.includes('.') || value === values.dot && currentNumber === '') {
        return;

    } else if (valuesNumbers.includes(value) || value === values.dot && currentNumber !== '') {
        currentNumber += value;
        displayWindow.textContent = currentNumber;
    }

});