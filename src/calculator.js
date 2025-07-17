import {
    PlusCommand,
    MinusCommand,
    MultiplyCommand,
    DivideCommand,
} from './classes.js';
import Invoker from './invoker.js';
import Variables, { values, valuesSigns } from './variables.js';

const display = document.querySelector('.display');
const invoker = new Invoker();
let result = 0;

export default class Calculator {
    constructor (counter, invoker, firstNum, secondNum, sign) {
        this.counter = counter,
        this.invoker = invoker,
        this.firstNum = firstNum,
        this.secondNum = secondNum,
        this.sign = sign
    };

    clear() {
        this.firstNum = '';
        this.secondNum = '';
        result = 0;
        this.displayUpdate();
    };

    calculate() {

        let currentNum = this.secondNum;
        let previousNum = this.firstNum;


        if (!previousNum || !this.sign) return;

        if (currentNum && previousNum) {
            switch(this.sign) {
                case values.plus:
                    result = new PlusCommand(previousNum, currentNum, this.counter);
                    break;
                case values.minus: 
                    result = new MinusCommand(previousNum, currentNum, this.counter);
                    break;
                case values.multiply:
                    result = new MultiplyCommand(previousNum, currentNum, this.counter);
                    break;
                case values.divide:
                    result = new DivideCommand(previousNum, currentNum, this.counter);
                    break;
            }
            
            result = this.invoker.execute(result);
            invoker.useStorage(result);
            this.displayUpdate();
            previousNum = result;          
        }
    }

    displayUpdate() {
        display.textContent = result;
    }

    backToPrevious() {
        this.invoker.undo();
        
        this.displayUpdate();
    }
}