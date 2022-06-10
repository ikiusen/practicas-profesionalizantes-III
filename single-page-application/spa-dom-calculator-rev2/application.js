import { CalculatorClientModel } from "./model/CalculatorClientModel.js";
import { CalculatorView } from "./view/CalculatorView.js";

let calcModel = new CalculatorClientModel();
let calc = new CalculatorView(calcModel);
document.body.appendChild(calc);