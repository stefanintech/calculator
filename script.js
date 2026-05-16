const calculator = document.querySelector(".calculator");

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

let firstNumber = ""
let operator = undefined
let secondNumber = ""
let finalValue

function operate(operator, numOne, numTwo) {
    return operator(numOne, numTwo)
}

const btn = document.querySelector(".buttons");
btn.addEventListener("click", function (e) {

    if (e.target.textContent == "clear"){
        clearValue()
        firstNumber = ""
        operator = undefined
        secondNumber = ""
    }

    if (!Number.isNaN(Number(e.target.textContent))) {
        if (operator !== undefined){
            secondNumber += e.target.textContent
            updateSecondNumber(secondNumber)
        } else {
            firstNumber += e.target.textContent
            updateFirstNumber(firstNumber)
        }
    } else if (e.target.textContent == "+" || e.target.textContent == "-" || e.target.textContent == "*" || e.target.textContent == "/") {
        operator = e.target.textContent
        clearValue()
    } else if (e.target.textContent == "=" && firstNumber !== null && operator !== null && secondNumber !== null) {
        if (operator == "/" && secondNumber == 0){
            clearValue()
            firstNumber = ""
            operator = undefined
            secondNumber = ""
            alert("You cannot divide by 0")
        } else {
            clearValue()
            firstNumber = Number(firstNumber)
            secondNumber = Number(secondNumber)
            finalValue = operate(checkOperator(operator), firstNumber, secondNumber)
            showFinalValue(finalValue)
            firstNumber = ""
            operator = undefined
            secondNumber = ""
        }

    }
});

function checkOperator(op) {
    if (op == "+"){
        return add
    } else if (op == "-") {
        return subtract
    } else if (op == "/") {
        return divide
    } else {
        return multiply
    }
}

function clearValue(){
    const text = document.querySelector("#text")
    return text.value = ""
}

function updateFirstNumber(number){
    const text = document.querySelector("#text")
    text.value = number
}

function updateSecondNumber(number){
    const text = document.querySelector("#text")
    text.value = number
}

function showFinalValue(number) {
    const text = document.querySelector("#text")
    text.value = number
}