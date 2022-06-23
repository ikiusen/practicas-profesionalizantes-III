//perfecto!

class CalculatorClientModel
{
    constructor(){}

    calculate(expression)
    {
        let value = "";
        try {
            value = eval(expression);    
        } catch (error) {
            alert("Error: intente nuevamente");
        }
        return value;
        }
}

export {CalculatorClientModel};