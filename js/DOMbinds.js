const plusBtn = document.getElementById('+');
const minusBtn = document.getElementById('-');
const divideBtn = document.getElementById('/');
const multiplyBtn = document.getElementById('x');
const resultBtn = document.getElementById('=');
const clearBtn = document.getElementById('clear');
const numVal = document.querySelectorAll('.num-btn');
const screen = document.getElementById('screen');

GetSolution = () => {
    screen.textContent = solution;
}

resultBtn.addEventListener('click', GetSolution);