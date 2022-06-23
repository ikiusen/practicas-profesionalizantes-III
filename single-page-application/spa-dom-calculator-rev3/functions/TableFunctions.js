function setElementOnTable(table, row, column, element){
    table.childNodes[0].childNodes[row].childNodes[column].appendChild(element);
}
function setFullLengthElementOnTable(table, element){
    let row = table.insertRow().insertCell();
    row.appendChild(element);
    row.colSpan = 4;
}

export {setElementOnTable, setFullLengthElementOnTable};