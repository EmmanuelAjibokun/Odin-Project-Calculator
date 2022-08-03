const displayInput = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calculateBtn = document.querySelector('.equality');

let firstNum = 51;
let secondNum = 3;
let isOperatorClicked = false;
let operator = '+';


const add = (firstNum, secondNum) => currentNum = parseInt(firstNum) + parseInt(secondNum);

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

operators.forEach((child) => {
  child.addEventListener('click', (e) => {
    isOperatorClicked = true;
    operator = getOperator(e.target.getAttribute('value'));
    firstNum = displayInput.textContent;
    displayInput.textContent = 0;
  })
})

function getOperator(operator) {
  operator = operator; 
  console.log(operator + " is clicked");
  return operator
}

// perform calculation task when equality sign btn is pressed
calculateBtn.addEventListener('click', () => {
  secondNum = displayInput.textContent;
  console.log(operate(firstNum, operator, secondNum))
  displayInput.textContent = '';
})