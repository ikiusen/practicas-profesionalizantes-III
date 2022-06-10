class CalculatorController
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

    displayValue(e){
        this.view.display.innerText += e.target.innerText;
    }
    clearDisplay(){
        this.view.display.innerText = "";
    }
    calculate(){
        this.view.display.innerText = this.model.calculate(this.view.display.innerText);
    }
}

export {CalculatorController};