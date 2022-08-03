const displayInput = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calculateBtn = document.querySelector('.equality');
const dot = document.querySelector('.point');

let firstNum = 51;
let secondNum = 3;
let isOperatorClicked = false;
let isCalculateBtnClicked = false;
let operator = '+';


const add = (firstNum, secondNum) => currentNum = parseFloat(firstNum) + parseFloat(secondNum);

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
    if(displayInput.textContent === '0') displayInput.textContent = e.target.getAttribute('value');
    else {
      if(isCalculateBtnClicked) {
        displayInput.textContent = '';
        displayInput.textContent += e.target.getAttribute('value');
        isCalculateBtnClicked = false
      } else {
        displayInput.textContent += e.target.getAttribute('value');
      }
    }
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
  isCalculateBtnClicked = true;
  secondNum = displayInput.textContent;
  displayInput.textContent = operate(firstNum, operator, secondNum);
})

// add dot sign to displayed input
dot.addEventListener('click', () => {
  displayInput.textContent += '.';
})

//