function add () {
    let firstNum = parseFloat (document.getElementById("num1").value )
    let secondNum = parseFloat (document.getElementById("num2").value )
    let result = firstNum + secondNum;
    document.getElementById("result") .innerHTML = result;
}


function subtract () {
    let firstNum = parseFloat (document.getElementById("num1").value )
    let secondNum = parseFloat (document.getElementById("num2").value )
    let result = firstNum - secondNum;
    document.getElementById("result") .innerHTML = result;
}


function mutiply () {
    let firstNum = parseFloat (document.getElementById("num1").value )
    let secondNum = parseFloat (document.getElementById("num2").value )
    let result = firstNum * secondNum;
    document.getElementById("result") .innerHTML = result;
}


function Divided () {
    let firstNum = parseFloat (document.getElementById("num1").value )
    let secondNum = parseFloat (document.getElementById("num2").value )
    let result = firstNum / secondNum;
    document.getElementById("result") .innerHTML = result;
}