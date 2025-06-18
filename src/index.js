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
const undoBtn = document.querySelector('.undo-btn');
const invoker = new Invoker();

wrapper.addEventListener('click', (event) => {

    const key = Object.keys(values).find(k => values[k] === event.target.textContent);

    const counter = new Counting();
    const calculator = new Calculator(
        counter,
        invoker,
        previousNumber,
        currentNumber,
        currentSign,
    )
   
    if (valuesSigns.includes(key) || key === 'equal') {

        if (key !== 'equal') {
            currentSign = key;
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

    } else if (key === 'percent') {
        currentNumber = currentNumber / 100;
        displayWindow.textContent = currentNumber;
    
    } else if (key === 'change') {
        currentNumber = currentNumber * -1;
        displayWindow.textContent = currentNumber;

    } else if (key === 'allClear') {
        calculator.clear();
        currentSign = null;
        previousNumber = '';
        currentNumber = '';

    } else if (event.target.textContent.includes('Undo')) {
        displayWindow.textContent = invoker.undo();

    } else if (key === 'dot' && currentNumber.includes('.') || key === 'dot' && currentNumber === '') {
        return;

    } else if (valuesNumbers.includes(key) || key === 'dot' && currentNumber !== '') {
        currentNumber += values[key];
        displayWindow.textContent = currentNumber;
    }
       
});