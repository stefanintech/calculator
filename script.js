function add(firstNum, secondNum) {
    return firstNum + secondNum
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum
}

let firstNumber
let operator
let secondNumber

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo)
}