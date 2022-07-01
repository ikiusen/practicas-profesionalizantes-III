import { ModalDialog } from './view/ModalDialog.js';

function main() {
    document.body.classList.add("w3-container");

    let myModalDialog = new ModalDialog();

    let buttonOpenModal = document.createElement('button');
    buttonOpenModal.innerText = 'Open';

    buttonOpenModal.addEventListener('click', () => myModalDialog.show());

    document.body.appendChild(myModalDialog);

    document.body.appendChild(buttonOpenModal);
}

window.addEventListener('load', main);