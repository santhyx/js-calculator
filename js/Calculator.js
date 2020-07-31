class Calculator {
    number;
    result = 0;

    constructor(component) {
        this.component = component;
        this.Clear();
    }

    Add = () => {
        this.result += this.number;
        this.ResetNumber();
    };

    Subtract = () => {
        this.result -= this.number;
        this.ResetNumber();
    };

    Divide = () => {
        if (this.number !== 0) {
            this.result /= this.number;
            this.ResetNumber();
        } else
            return;
    };

    Multiply = () => {
        this.result *= this.number;
        this.ResetNumber();
    };

    Clear = () => {
        this.ResetNumber();
        this.result = 0;
        this.component.ClearScreen();
    }

    ResetNumber = () => {
        this.number = 0;
    }
}

const component = new Component();
const calculator = new Calculator(component);

component.GetNumbers();

plusBtn.addEventListener('click', calculator.Add);
minusBtn.addEventListener('click', calculator.Subtract);
divideBtn.addEventListener('click', calculator.Divide);
multiplyBtn.addEventListener('click', calculator.Multiply);
clearBtn.addEventListener('click', calculator.Clear);
resultBtn.addEventListener('click', component.ShowResult);