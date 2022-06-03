let btn0 = document.createElement("button");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let btn5 = document.createElement("button");
let btn6 = document.createElement("button");
let btn7 = document.createElement("button");
let btn8 = document.createElement("button");
let btn9 = document.createElement("button");
let btnPlus = document.createElement("button");
let btnMinus = document.createElement("button");
let btnMult = document.createElement("button");
let btnDiv = document.createElement("button");
let btnDecimal = document.createElement("button");
let btnEqual = document.createElement("button");
let btnDel = document.createElement("button");

let display = document.createElement("div");
let calculatorBody = document.createElement("table");

//------------------------------------------

btn0.id = "btn0";
btn0.innerText = "0";
btn0.classList.add("buttons");
btn0.classList.add("numericButtons");
btn0.addEventListener("click", displayValue);

btn1.id = "btn1";
btn1.innerText = "1";
btn1.classList.add("buttons");
btn1.classList.add("numericButtons");
btn1.addEventListener("click", displayValue);

btn2.id = "btn2";
btn2.innerText = "2";
btn2.classList.add("buttons");
btn2.classList.add("numericButtons");
btn2.addEventListener("click", displayValue);

btn3.id = "btn3";
btn3.innerText = "3";
btn3.classList.add("buttons");
btn3.classList.add("numericButtons");
btn3.addEventListener("click", displayValue);

btn4.id = "btn4";
btn4.innerText = "4";
btn4.classList.add("buttons");
btn4.classList.add("numericButtons");
btn4.addEventListener("click", displayValue);

btn5.id = "btn5";
btn5.innerText = "5";
btn5.classList.add("buttons");
btn5.classList.add("numericButtons");
btn5.addEventListener("click", displayValue);

btn6.id = "btn6";
btn6.innerText = "6";
btn6.classList.add("buttons");
btn6.classList.add("numericButtons");
btn6.addEventListener("click", displayValue);

btn7.id = "btn7";
btn7.innerText = "7";
btn7.classList.add("buttons");
btn7.classList.add("numericButtons");
btn7.addEventListener("click", displayValue);

btn8.id = "btn8";
btn8.innerText = "8";
btn8.classList.add("buttons");
btn8.classList.add("numericButtons");
btn8.addEventListener("click", displayValue);

btn9.id = "btn9";
btn9.innerText = "9";
btn9.classList.add("buttons");
btn9.classList.add("numericButtons");
btn9.addEventListener("click", displayValue);

btnPlus.id = "btnPlus";
btnPlus.innerText = "+";
btnPlus.classList.add("buttons");
btnPlus.classList.add("operationButtons");
btnPlus.addEventListener("click", displayValue);

btnMinus.id = "btnMinus";
btnMinus.innerText = "-";
btnMinus.classList.add("buttons");
btnMinus.classList.add("operationButtons");
btnMinus.addEventListener("click", displayValue);

btnMult.id = "btnMult";
btnMult.innerText = "*";
btnMult.classList.add("buttons");
btnMult.classList.add("operationButtons");
btnMult.addEventListener("click", displayValue);

btnDiv.id = "btnDiv";
btnDiv.innerText = "/";
btnDiv.classList.add("buttons");
btnDiv.classList.add("operationButtons");
btnDiv.addEventListener("click", displayValue);

btnDecimal.id = "btnDecimal";
btnDecimal.innerText = ".";
btnDecimal.classList.add("buttons");
btnDecimal.classList.add("numericButtons");
btnDecimal.addEventListener("click", displayValue);

btnEqual.id = "btnEqual";
btnEqual.innerText = "=";
btnEqual.classList.add("buttons");
btnEqual.classList.add("equalButton");
btnEqual.addEventListener("click", doOperation);

btnDel.id = "btnDel";
btnDel.innerText = "Delete";
btnDel.classList.add("deletionButton");
btnDel.addEventListener("click", clearDisplay);

display.id = "inputBox"
display.classList.add("inputBox");

//------------------------------------------

function setElementOnTable(table, row, column, element){
    table.childNodes[0].childNodes[row].childNodes[column].appendChild(element);
}
function setFullLengthElementOnTable(table, element){
    let row = table.insertRow().insertCell();
    row.appendChild(element);
    row.colSpan = 4;
}
function displayValue(e){
    display.innerText += e.target.innerText;
}
function clearDisplay(){
    display.innerText = "";
}
function doOperation(){
    display.innerText = eval(display.innerText);
}

//------------------------------------------
setFullLengthElementOnTable(calculatorBody, display);

for(let i = 0; i < 4; i++)
{
    let row = calculatorBody.insertRow();
    for(let y = 0; y < 4; y++)
    {
        row.insertCell();
    }
}
setFullLengthElementOnTable(calculatorBody, btnDel);

setElementOnTable(calculatorBody, 1, 0, btn7);
setElementOnTable(calculatorBody, 1, 1, btn8);
setElementOnTable(calculatorBody, 1, 2, btn9);
setElementOnTable(calculatorBody, 1, 3, btnPlus);

setElementOnTable(calculatorBody, 2, 0, btn4);
setElementOnTable(calculatorBody, 2, 1, btn5);
setElementOnTable(calculatorBody, 2, 2, btn6);
setElementOnTable(calculatorBody, 2, 3, btnMinus);

setElementOnTable(calculatorBody, 3, 0, btn1);
setElementOnTable(calculatorBody, 3, 1, btn2);
setElementOnTable(calculatorBody, 3, 2, btn3);
setElementOnTable(calculatorBody, 3, 3, btnMult);

setElementOnTable(calculatorBody, 4, 0, btn0);
setElementOnTable(calculatorBody, 4, 1, btnDecimal);
setElementOnTable(calculatorBody, 4, 2, btnEqual);
setElementOnTable(calculatorBody, 4, 3, btnDiv);

//------------------------------------------
document.body.appendChild(calculatorBody);


