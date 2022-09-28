class CalculatorController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    /*Se entiende la idea, aunque los nombres no pueden ser estos.
    Si querés como opción, tener un controlador chico y emplear
    un nombre más genérico podés hacer algo como:

    onDeleteClick() <--- clearDisplay
    onCalculateClick() <--- calculate
    onNumberClick()/onOperatorClick() <--- displayValue

    Los métodos con estos nombres, son más para la vista.
    No para el controlador en sí. El controlador es el que tiene el 
    repertorio de las reacciones a la interacción del usuario. 
    Estos métodos los podés poner en la vista, y utilizarlos desde acá
    como opción.
    */

    //15/06/22 - Ajustados los nombres de los eventos
    onButtonClick(e) {
        this.view.display.innerText += e.target.innerText;
    }
    onDeleteClick() {
        this.view.display.innerText = "";
    }
    onCalculateClick() {
        this.view.display.innerText = this.model.calculate(this.view.display.innerText);
    }
}

export { CalculatorController };