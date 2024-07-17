const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const power = (a, b) => Math.pow(a, b);
const root = (a, b) => a/b;


let firstOperand = null;
let operator = null;

const container = document.querySelector("#calculatorContainer");
const screen = document.querySelector("#screen");

function toDisplay(input) {
  screen.value += input;
}

function resetFunction() {
  screen.value = "";
  firstOperand = null;
  operator = null;
}

function delChar() {
  screen.value = screen.value.length === 1 ? "" : screen.value.slice(0, -1);
}
function setOperator(op) {
  if (firstOperand === null) {
    firstOperand = parseFloat(screen.value);
    operator = op;
    screen.value = "";
  }
}

function calculate() {
  if (firstOperand !== null && operator !== null) {
    const secondOperand = parseFloat(screen.value);
    let result;
    switch (operator) {
      case '+':
        result = add(firstOperand, secondOperand);
        break;
      case '-':
        result = subtract(firstOperand, secondOperand);
        break;
      case 'x':
        result = multiply(firstOperand, secondOperand);
        break;
      case '/':
        result = divide(firstOperand, secondOperand).toFixed(2);
        if (secondOperand === 0) {
        result = "division by 0 is not allowed"
        }
        break;
      case '^':
        result = power(firstOperand, secondOperand);
        break;
      case '√':
        result = Math.sqrt(firstOperand, secondOperand);
        break;
      default:
        result = "Error";
    }
    screen.value = result;
    firstOperand = null;
    operator = null;
  }
}