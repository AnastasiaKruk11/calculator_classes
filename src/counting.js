export default class Counting {
    constructor() {
        this.currentResult = 0;
    }

    add(num1, num2) {
        this.currentResult = num1 + num2;
        return this.currentResult;
    }

    subtract(num1, num2) {
        this.currentResult = num1 - num2;
        return this.currentResult;
    }

    multiply(num1, num2) {
        this.currentResult = num1 * num2;
        return this.currentResult;
    }

    divide(num1, num2) {
        this.currentResult = num1 / num2;
        return this.currentResult;
    }

    percent(num1) {
        return num1 / 100;
    }

    calculate(result) {
        this.overallResult += result;
    }

    backspace(result) {
        this.overallResult -= result;
    }
}