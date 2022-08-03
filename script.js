const displayInput = document.getElementById('currentInput');
const digitsBtn = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const calculateBtn = document.querySelector('.equality');
const dot = document.querySelector('.point');
const actions = document.querySelectorAll('.action')

let firstNum = 51;
let secondNum = 3;
let isOperatorClicked = {
  '%': false,
  '/': false,
  '*': false,
  '+': false
};
let isCalculateBtnClicked = false;
let operator = '+';
let lastInput;


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
    if(displayInput.textContent === '0') {
      displayInput.textContent = e.target.getAttribute('value');
      lastInput = e.target.getAttribute('value');
    }
    else {
      if(isCalculateBtnClicked) {
        displayInput.textContent = '';
        displayInput.textContent += e.target.getAttribute('value');
        isCalculateBtnClicked = false;
        lastInput = e.target.getAttribute('value');
      } else {
        displayInput.textContent += e.target.getAttribute('value');
        lastInput += e.target.getAttribute('value');
      }
    }
    console.log(lastInput)
  })
})

operators.forEach((child) => {
  child.addEventListener('click', (e) => {
    // isOperatorClicked = true;
    switch(e.target.getAttribute('value')) {
      case "+":
        switchOperator(e)
        break;
      case "-":
        switchOperator(e)
      break;
      case "/":
        switchOperator(e)
      break;
      case "*":
        switchOperator(e)
      break;
      case "%":
        switchOperator(e)
      break;
      default:
        console.log("none");
        break;
    }
    // if(isOperatorClicked) {
    //   e.target.style.backgroundColor = "rgb(229, 124, 255)";
    //   isOperatorClicked = false;
    //   operator = getOperator(e.target.getAttribute('value'));
    //   firstNum = displayInput.textContent;
    //   displayInput.textContent = 0;
    // } else {
    //   isOperatorClicked = true;
    //   e.target.style.backgroundColor = "white";
    //   firstNum = displayInput.textContent;
    //   displayInput.textContent = 0;
    // }
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
  operators.forEach(button => {
    button.style.backgroundColor = "white";
  })
})

// add dot sign to displayed input
dot.addEventListener('click', () => {
  isCalculateBtnClicked = false;
  displayInput.textContent += '.';
  lastInput += '.';
})

// implementation of AC button to clear the entire input while 
// the delete button deletes the entire last input
actions.forEach((action) => {
  action.addEventListener('click', (e) => {
    if(e.target.getAttribute('value') === 'clear') {
      displayInput.textContent = 0;
    }
    if(e.target.getAttribute('value') === 'delete') {
      deleteLastInput(displayInput.textContent)
      displayInput.textContent = deleteLastInput(displayInput.textContent)
    }
  })
})

function deleteLastInput(input) {
  const newInput = input.toString().slice(0, -1)
  return newInput
}

function switchOperator(e) {
  isOperatorClicked[e.target.getAttribute('value')] = true;
  e.target.style.backgroundColor = "rgb(229, 124, 255)";
  operator = getOperator(e.target.getAttribute('value'));
  firstNum = lastInput;
  displayInput.textContent = 0;
  for(let i=0; i<operators.length; i++) {
    if(e.currentTarget !== operators[i]) {
      operators[i].style.backgroundColor = "white"
    }
  }
  console.log(operator + ' is clicked');
  console.log(firstNum)
}
