class Command {
    execute() {}
    undo() {}
}

export class PlusCommand extends Command {
    constructor (num1, num2, counting) {
        super();
        this.num1 = num1;
        this.num2 = num2;
        this.counting = counting;
    }
    execute() {
        return this.counting.add(+this.num1, +this.num2);
    }
    undo() {
        return this.calculator.subtract(+this.num1, +this.num2);
    }
}

export class MinusCommand extends Command {
    constructor (num1, num2, calculator) {
        super();
        this.num1 = num1;
        this.num2 = num2;
        this.calculator = calculator;
    }
    execute() {
        return this.calculator.subtract(+this.num1, +this.num2);
    }
    undo() {
        return this.calculator.add(+this.num1, +this.num2);
    }
}

export class MultiplyCommand extends Command {
    constructor (num1, num2, calculator) {
        super();
        this.num1 = num1;
        this.num2 = num2;
        this.calculator = calculator;
    }
    execute() {
        return this.calculator.multiply(+this.num1, +this.num2);
    }
    undo() {
        return this.calculator.divide(+this.num1, +this.num2);
    }
}

export class DivideCommand extends Command {
    constructor (num1, num2, calculator) {
        super();
        this.num1 = num1;
        this.num2 = num2;
        this.calculator = calculator;
    }
    execute() {
        return this.calculator.divide(+this.num1, +this.num2);
    }
    undo() {
        return this.calculator.multiply(+this.num1, +this.num2);
    }
}

export class PercentCommand extends Command {
    constructor(calculator, num1) {
        super();
        this.calculator = calculator;
        this.num1 = num1;
        this.startNum = num1;
    }
    execute() {
        return this.calculator.percent(+this.num1);
    }
    undo() {
        return this.startNum;
    }
    
}

export class ChangeSignCommand extends Command {
     constructor(calculator, num1) {
        super();
        this.calculator = calculator;
        this.num1 = num1;
    }
    execute() {
        return this.calculator.changeSign(this.num1);
    }
    undo() {
        return this.calculator.changeSign(this.num1);
    }
}