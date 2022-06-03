let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMult = document.getElementById("btnMult");
let btnDiv = document.getElementById("btnDiv");
let btnDecimal = document.getElementById("btnDecimal");
let btnEqual = document.getElementById("btnEqual");
let btnDel = document.getElementById("btnDel");
let display = document.getElementById("inputBox");

btn0.addEventListener("click", displayValue);
btn1.addEventListener("click", displayValue);
btn2.addEventListener("click", displayValue);
btn3.addEventListener("click", displayValue);
btn4.addEventListener("click", displayValue);
btn5.addEventListener("click", displayValue);
btn6.addEventListener("click", displayValue);
btn7.addEventListener("click", displayValue);
btn8.addEventListener("click", displayValue);
btn9.addEventListener("click", displayValue);
btnPlus.addEventListener("click", displayValue);
btnMinus.addEventListener("click", displayValue);
btnMult.addEventListener("click", displayValue);
btnDiv.addEventListener("click", displayValue);
btnDecimal.addEventListener("click", displayValue);
btnEqual.addEventListener("click", doOperation);
btnDel.addEventListener("click", clearDisplay);

function displayValue(e){
    display.innerText += e.target.innerText;
}
function clearDisplay(){
    display.innerText = "";
}
function doOperation(){
    try {
        display.innerText = eval(display.innerText);    
    } catch (error) {
        alert("Error: intente nuevamente");
    }
}