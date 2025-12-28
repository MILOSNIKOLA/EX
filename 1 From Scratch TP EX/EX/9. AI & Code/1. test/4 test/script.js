let display = document.getElementById("display");
let previousOperand = document.getElementById("previousOperand");
let currentOperand = "";
let previousValue = "";
let operation = null;

function appendNumber(num) {
  if (num === "." && currentOperand.includes(".")) return;
  if (num === "0" && currentOperand === "0") return;

  currentOperand = currentOperand.toString() + num.toString();
  updateDisplay();
}

function appendOperator(op) {
  if (currentOperand === "") return;

  if (previousValue !== "") {
    calculate();
  }

  operation = op;
  previousValue = currentOperand;
  currentOperand = "";
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousValue);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "×":
      result = prev * current;
      break;
    case "÷":
      result = current !== 0 ? prev / current : 0;
      break;
    case "%":
      result = prev % current;
      break;
    default:
      return;
  }

  currentOperand = result;
  operation = null;
  previousValue = "";
  updateDisplay();
}

function clearDisplay() {
  currentOperand = "";
  previousValue = "";
  operation = null;
  updateDisplay();
}

function deleteLast() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.value = currentOperand || "0";

  if (operation) {
    previousOperand.textContent = `${previousValue} ${operation}`;
  } else {
    previousOperand.textContent = "";
  }
}

// Clavier
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
  if (e.key === ".") appendNumber(".");
  if (e.key === "+" || e.key === "-") appendOperator(e.key);
  if (e.key === "*") appendOperator("×");
  if (e.key === "/") {
    e.preventDefault();
    appendOperator("÷");
  }
  if (e.key === "%") appendOperator("%");
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});

// Initialiser
updateDisplay();
