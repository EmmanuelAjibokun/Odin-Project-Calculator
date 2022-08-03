const displayInput = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calculateBtn = document.querySelector('.equality');
const dot = document.querySelector('.point');
const actions = document.querySelectorAll('.action')

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
  isCalculateBtnClicked = false;
  displayInput.textContent += '.';
})

// implementation of AC button to clear the entire input while 
// the delete button deletes the entire last input
actions.forEach((action) => {
  action.addEventListener('click', (e) => {
    if(e.target.getAttribute('value') === 'clear') {
      displayInput.textContent = 0;
    }
    if(e.target.getAttribute('value') === 'delete') {
      console.log(e.target.getAttribute('value'))
    }
  })
})

function deleteLastInput(input) {
  const newInput = input.slice(0, -1)
  return newInput
}