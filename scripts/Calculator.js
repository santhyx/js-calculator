'use strict'

class Calculator {
    constructor() {
        this.currentNumber = 0;
        this.Result = 0;
        this.currentOperator = '';
    };

    Add = () => {
        this.Result += this.currentNumber;
        this.DisposeNumber();
    };

    Subtract = () => {
        this.Result -= this.currentNumber;
        this.DisposeNumber();
    };

    Divide = () => {
        if (this.Result === 0) {
            this.Result = this.currentNumber;
        } else {
            this.Result /= this.currentNumber;
        }
        this.DisposeNumber();
    };

    Multiply = () => {
        if (this.Result == 0) {
            this.Result = this.currentNumber;
        } else {
            this.Result *= this.currentNumber;
        }
        this.DisposeNumber();
    };

    DisposeNumber = () => {
        this.currentNumber = 0;
    };

    Clear = () => {
        this.DisposeNumber();
        this.Result = 0;
    };
};

const calculator = new Calculator();

plusBtn.addEventListener('click', () => {
    calculator.currentOperator = '+';
    calculator.Add();
    component.ClearScreen();
});

minusBtn.addEventListener('click', () => {
    calculator.currentOperator = '-';
    calculator.Subtract();
    component.ClearScreen();
});

multiplyBtn.addEventListener('click', () => {
    calculator.currentOperator = 'x';
    calculator.Multiply();
    component.ClearScreen();
});

divideBtn.addEventListener('click', () => {
    calculator.currentOperator = '/';
    calculator.Divide();
    component.ClearScreen();
});