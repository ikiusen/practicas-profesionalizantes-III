class Calculator
{
    constructor(){}

    calculate(expression)
    {
        return eval(expression);
    }
}

class CalculatorView extends HTMLElement
{
    constructor()
    {
        super();

        this.btn0 = document.createElement("button");
        this.btn1 = document.createElement("button");
        this.btn2 = document.createElement("button");
        this.btn3 = document.createElement("button");
        this.btn4 = document.createElement("button");
        this.btn5 = document.createElement("button");
        this.btn6 = document.createElement("button");
        this.btn7 = document.createElement("button");
        this.btn8 = document.createElement("button");
        this.btn9 = document.createElement("button");
        this.btnPlus = document.createElement("button");
        this.btnMinus = document.createElement("button");
        this.btnMult = document.createElement("button");
        this.btnDiv = document.createElement("button");
        this.btnDecimal = document.createElement("button");
        this.btnEqual = document.createElement("button");
        this.btnDel = document.createElement("button");
        this.display = document.createElement("div");
        this.layout = document.createElement("table");

        this.btn0.id = "btn0";
        this.btn0.innerText = "0";
        this.btn0.classList.add("buttons", "numericButtons");
        //this.btn0.addEventListener("click", displayValue);
        
        this.btn1.id = "btn1";
        this.btn1.innerText = "1";
        this.btn1.classList.add("buttons", "numericButtons");
        //this.btn1.addEventListener("click", displayValue);
        
        this.btn2.id = "btn2";
        this.btn2.innerText = "2";
        this.btn2.classList.add("buttons", "numericButtons");
        //this.btn2.addEventListener("click", displayValue);
        
        this.btn3.id = "btn3";
        this.btn3.innerText = "3";
        this.btn3.classList.add("buttons", "numericButtons");
        //this.btn3.addEventListener("click", displayValue);
        
        this.btn4.id = "btn4";
        this.btn4.innerText = "4";
        this.btn4.classList.add("buttons", "numericButtons");
        //this.btn4.addEventListener("click", displayValue);
        
        this.btn5.id = "btn5";
        this.btn5.innerText = "5";
        this.btn5.classList.add("buttons", "numericButtons");
        //this.btn5.addEventListener("click", displayValue);
        
        this.btn6.id = "btn6";
        this.btn6.innerText = "6";
        this.btn6.classList.add("buttons", "numericButtons");
        //this.btn6.addEventListener("click", displayValue);
        
        this.btn7.id = "btn7";
        this.btn7.innerText = "7";
        this.btn7.classList.add("buttons", "numericButtons");
        //this.btn7.addEventListener("click", displayValue);
        
        this.btn8.id = "btn8";
        this.btn8.innerText = "8";
        this.btn8.classList.add("buttons", "numericButtons");
        //this.btn8.addEventListener("click", displayValue);
        
        this.btn9.id = "btn9";
        this.btn9.innerText = "9";
        this.btn9.classList.add("buttons", "numericButtons");
        //this.btn9.addEventListener("click", displayValue);
        
        this.btnPlus.id = "btnPlus";
        this.btnPlus.innerText = "+";
        this.btnPlus.classList.add("buttons", "operationButtons");
        //this.btnPlus.addEventListener("click", displayValue);
        
        this.btnMinus.id = "btnMinus";
        this.btnMinus.innerText = "-";
        this.btnMinus.classList.add("buttons", "operationButtons");
        //this.btnMinus.addEventListener("click", displayValue);
        
        this.btnMult.id = "btnMult";
        this.btnMult.innerText = "*";
        this.btnMult.classList.add("buttons", "operationButtons");
        //this.btnMult.addEventListener("click", displayValue);
        
        this.btnDiv.id = "btnDiv";
        this.btnDiv.innerText = "/";
        this.btnDiv.classList.add("buttons", "operationButtons");
        //this.btnDiv.addEventListener("click", displayValue);
        
        this.btnDecimal.id = "btnDecimal";
        this.btnDecimal.innerText = ".";
        this.btnDecimal.classList.add("buttons", "numericButtons");
        //this.btnDecimal.addEventListener("click", displayValue);
        
        this.btnEqual.id = "btnEqual";
        this.btnEqual.innerText = "=";
        this.btnEqual.classList.add("buttons", "equalButton");
        //this.btnEqual.addEventListener("click", doOperation);
        
        this.btnDel.id = "btnDel";
        this.btnDel.innerText = "Delete";
        this.btnDel.classList.add("deleteButton");
        //this.btnDel.addEventListener("click", clearDisplay);
        
        this.display.id = "inputBox"
        this.display.classList.add("inputBox");

        setFullLengthElementOnTable(this.layout, this.display);
        
        for(let i = 0; i < 4; i++)
        {
            let row = this.insertRow();
            for(let y = 0; y < 4; y++)
            {
                row.insertCell();
            }
        }
        setFullLengthElementOnTable(this.layout, this.btnDel);
    }

    connectedCallback()
    {
        setElementOnTable(this.layout, 1, 0, this.btn7);
        setElementOnTable(this.layout, 1, 1, this.btn8);
        setElementOnTable(this.layout, 1, 2, this.btn9);
        setElementOnTable(this.layout, 1, 3, this.btnPlus);
        
        setElementOnTable(this.layout, 2, 0, this.btn4);
        setElementOnTable(this.layout, 2, 1, this.btn5);
        setElementOnTable(this.layout, 2, 2, this.btn6);
        setElementOnTable(this.layout, 2, 3, this.btnMinus);
        
        setElementOnTable(this.layout, 3, 0, this.btn1);
        setElementOnTable(this.layout, 3, 1, this.btn2);
        setElementOnTable(this.layout, 3, 2, this.btn3);
        setElementOnTable(this.layout, 3, 3, this.btnMult);
        
        setElementOnTable(this.layout, 4, 0, this.btn0);
        setElementOnTable(this.layout, 4, 1, this.btnDecimal);
        setElementOnTable(this.layout, 4, 2, this.btnEqual);
        setElementOnTable(this.layout, 4, 3, this.btnDiv);
        
        this.appendChild(this.layout);
    }
}

function setElementOnTable(table, row, column, element){
    table.childNodes[0].childNodes[row].childNodes[column].appendChild(element);
}
function setFullLengthElementOnTable(table, element){
    let row = table.insertRow().insertCell();
    row.appendChild(element);
    row.colSpan = 4;
}

customElements.define('x-calculator', CalculatorView);

let calc = new CalculatorView();
document.body.appendChild(calc);

