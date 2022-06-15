import {CalculatorController} from '../controller/CalculatorController.js';
import {setElementOnTable, setFullLengthElementOnTable} from '../functions/TableFunctions.js';

class CalculatorView extends HTMLElement
{
    constructor(model)
    {
        super();

        this.controller = new CalculatorController(this, model);

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
        this.btn0.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
                
        this.btn1.id = "btn1";
        this.btn1.innerText = "1";
        this.btn1.classList.add("buttons", "numericButtons");
        this.btn1.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn2.id = "btn2";
        this.btn2.innerText = "2";
        this.btn2.classList.add("buttons", "numericButtons");
        this.btn2.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn3.id = "btn3";
        this.btn3.innerText = "3";
        this.btn3.classList.add("buttons", "numericButtons");
        this.btn3.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn4.id = "btn4";
        this.btn4.innerText = "4";
        this.btn4.classList.add("buttons", "numericButtons");
        this.btn4.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn5.id = "btn5";
        this.btn5.innerText = "5";
        this.btn5.classList.add("buttons", "numericButtons");
        this.btn5.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn6.id = "btn6";
        this.btn6.innerText = "6";
        this.btn6.classList.add("buttons", "numericButtons");
        this.btn6.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn7.id = "btn7";
        this.btn7.innerText = "7";
        this.btn7.classList.add("buttons", "numericButtons");
        this.btn7.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn8.id = "btn8";
        this.btn8.innerText = "8";
        this.btn8.classList.add("buttons", "numericButtons");
        this.btn8.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btn9.id = "btn9";
        this.btn9.innerText = "9";
        this.btn9.classList.add("buttons", "numericButtons");
        this.btn9.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnPlus.id = "btnPlus";
        this.btnPlus.innerText = "+";
        this.btnPlus.classList.add("buttons", "operationButtons");
        this.btnPlus.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnMinus.id = "btnMinus";
        this.btnMinus.innerText = "-";
        this.btnMinus.classList.add("buttons", "operationButtons");
        this.btnMinus.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnMult.id = "btnMult";
        this.btnMult.innerText = "*";
        this.btnMult.classList.add("buttons", "operationButtons");
        this.btnMult.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnDiv.id = "btnDiv";
        this.btnDiv.innerText = "/";
        this.btnDiv.classList.add("buttons", "operationButtons");
        this.btnDiv.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnDecimal.id = "btnDecimal";
        this.btnDecimal.innerText = ".";
        this.btnDecimal.classList.add("buttons", "numericButtons");
        this.btnDecimal.addEventListener("click", (e)=>this.controller.onButtonClick(e) );
            
        this.btnEqual.id = "btnEqual";
        this.btnEqual.innerText = "=";
        this.btnEqual.classList.add("buttons", "equalButton");
        this.btnEqual.addEventListener("click", (e)=>this.controller.onCalculateClick(e));
            
        this.btnDel.id = "btnDel";
        this.btnDel.innerText = "Delete";
        this.btnDel.classList.add("deleteButton");
        this.btnDel.addEventListener("click", (e)=>this.controller.onDeleteClick());
            
        this.display.id = "inputBox"
        this.display.classList.add("inputBox");

        setFullLengthElementOnTable(this.layout, this.display);
            
        for(let i = 0; i < 4; i++)
        {
            let row = this.layout.insertRow();
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
customElements.define('x-calculator', CalculatorView);
export {CalculatorView};