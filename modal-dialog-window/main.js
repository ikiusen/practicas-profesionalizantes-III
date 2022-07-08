import { ModalDialog } from './view/ModalDialog.js';
import { FormModel } from '../form/model/FormModel.js';
import { FormView } from '../form/view/FormView.js';

function main() {
    document.body.classList.add("w3-container");

    let myFormModel = new FormModel();
    let myFormView = new FormView(myFormModel);

    let myModalDialog = new ModalDialog();


    let buttonOpenModal = document.createElement('button');
    buttonOpenModal.innerText = 'Open';

    myModalDialog.innerContent.appendChild(myFormView);
    buttonOpenModal.addEventListener('click', () => myModalDialog.show());

    document.body.appendChild(myModalDialog);
    document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main);