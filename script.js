const input = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');

let firstNum = 51;
let secondNum = 3;
let operator = "+";

const add = (firstNum, secondNum) => currentNum = firstNum + secondNum;

const subtract = (firstNum, secondNum) => currentNum = firstNum - secondNum;

const multiply = (firstNum, secondNum) => currentNum = firstNum * secondNum;
const divide = (firstNum, secondNum) => currentNum = firstNum / secondNum;
const modulus = (firstNum, secondNum) => currentNum = firstNum % secondNum;

const operation = {}

function operate(firstNum, operator, secondNum) {
  if(operator === "+") return add(firstNum,secondNum);
  if(operator === "-") return subtract(firstNum,secondNum)
  if(operator === "*") return multiply(firstNum,secondNum)
  if(operator === "/") return divide(firstNum,secondNum)
  if(operator === "%") return modulus(firstNum,secondNum)
}

console.log(operate(firstNum, operator, secondNum))


digitsBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.getAttribute('value'))
  })
})