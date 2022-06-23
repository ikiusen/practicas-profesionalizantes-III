class CalculatorServerModel
{
    constructor(){}

    async calculate(expression) {
        let result = await fetch('./backend/test.php', { method:'POST', body: expression })
        return result.text;
    }


}

export {CalculatorServerModel};