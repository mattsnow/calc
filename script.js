function add(first, second) {
  return first + second
}

function subtract(first, second) {
  return first - second
}

function multiply(first, second) {
  return first * second
}

function divide(first, second) {
  return first / second
}

function operate(first, second, operation) {

  switch (operation) {
    case "+":
      return add(first, second)
    case "-":
      return subtract(first, second)
    case "*":
      return multiply(first, second)
    case "/":
      return divide(first, second)
    default:
      return "invalid operator"
  }

}

function testFunc() {
  console.log("hai")
}


document.getElementById("0").addEventListener("click", testFunc);