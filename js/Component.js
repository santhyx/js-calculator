class Component {
    constructor() {
        this.screen = document.getElementById('screen');;
    }

    ClearScreen = () => {
        this.screen.textContent = '0';
    }

    UpdateScreen = (value) => {
        this.screen.textContent = value;
    }

    GetNumbers = () => {
        numVal.forEach(x => {
            x.addEventListener('click', () => {
                calculator.number = parseInt(x.value);
                this.UpdateScreen(parseInt(x.value));
            })
        });
    }

    ShowResult = () => {
        this.UpdateScreen(parseInt(calculator.result));
    }
}