const displayInput = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let firstNum = 51;
let secondNum = 3;
let operator = "+";

const add = (firstNum, secondNum) => currentNum = firstNum + secondNum;

const subtract = (firstNum, secondNum) => currentNum = firstNum - secondNum;

const multiply = (firstNum, secondNum) => currentNum = firstNum * secondNum;
const divide = (firstNum, secondNum) => currentNum = firstNum / secondNum;
const modulus = (firstNum, secondNum) => currentNum = firstNum % secondNum;


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
    displayInput.textContent += e.target.getAttribute('value');
  })
})

for(let operator of operators) {
  operator.addEventListener('click', checkClickedOperator)
}

function checkClickedOperator(operator) {
  console.log(operator.target.value)
}