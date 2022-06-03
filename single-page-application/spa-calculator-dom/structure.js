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
let table = document.createElement("table");

//---
//function a(){};
//---
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
//---
for(let i = 0; i < 4; i++)
{
    let row = table.insertRow();
    for(let y = 0; y < 4; y++)
    {
        row.insertCell();
    }
}
document.body.appendChild(table);

//table.childNodes[].childNodes[] etc

function posicionarElemento(tabla,mroFIla, nrocolumna, elemento){
    tabla.childnodes[0].childnodes[nroFIla].childnodes[nrocolumna].appendChild(elemento);
}