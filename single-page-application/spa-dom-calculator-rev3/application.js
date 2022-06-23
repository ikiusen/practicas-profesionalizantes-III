import { CalculatorServerModel } from "./model/CalculatorServerModel.js";
import { CalculatorView } from "./view/CalculatorView.js";

let calcServerModel = new CalculatorServerModel();
let calc = new CalculatorView(calcServerModel);
document.body.appendChild(calc);

