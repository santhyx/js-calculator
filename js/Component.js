'use strict'

class Component {
    constructor() {
        this.screen = document.getElementById('screen');
    }
    ClearScreen = () => {
        this.screen.textContent = 0;
    };

    GetNumbers = () => {
        numValues.forEach(buttons => {
            buttons.addEventListener('click', () => {
                if (this.screen.textContent === '0' && x.value !== '.') {
                    this.screen.textContent = buttons.value;
                } else {
                    this.screen.textContent += buttons.value;
                }
                calculator.currentNumber = parseFloat(this.screen.textContent);
            })         
        })
    };

    DisplayResult = () => {
        this.ClearScreen();
        this.screen.textContent = calculator.Result;
    };

    RemoveNumber = () => {
        let length = this.screen.textContent.length;
        this.screen.textContent = this.screen.textContent.slice(0,length-1);
    };
};

const component = new Component();
component.GetNumbers();

removeNum.addEventListener('click',component.RemoveNumber);

resultBtn.addEventListener('click', () => {
    switch (calculator.currentOperator) {
        case '+':
            calculator.Add();
            break;

        case '-':
            calculator.Subtract();
            break;

        case 'x':
            calculator.Multiply();
            break;

        case '/':
            calculator.Divide();
            break;

        default:
            break;
    }
    component.DisplayResult();
});

clearBtn.addEventListener('click', () => {
    component.ClearScreen();
    calculator.Clear();
});