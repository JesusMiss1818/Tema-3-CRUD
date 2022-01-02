var Filaseleccionada = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(Filaseleccionada === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}


function readFormData(){
    var formData = {};
    formData["CodigoProducto"] = document.getElementById("codigoproducto").value;
    formData["Producto"] = document.getElementById("producto").value;
    formData["Cantidad"] = document.getElementById("cantidad").value;
    formData["Precio"] = document.getElementById("precio").value;
    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("ListaProducto").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.CodigoProducto;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.Producto;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Cantidad;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Precio;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Editar</button>`
    var cell5 = newRow.insertCell(5);
        cell5.innerHTML = `<button onClick='onDelete(this)'>Eliminar</button>`
}


function onEdit(td){
    Filaseleccionada = td.parentElement.parentElement;
    document.getElementById('codigoproducto').value = Filaseleccionada.cells[0].innerHTML;
    document.getElementById('producto').value = Filaseleccionada.cells[1].innerHTML;
    document.getElementById('cantidad').value = Filaseleccionada.cells[2].innerHTML;
    document.getElementById('precio').value = Filaseleccionada.cells[3].innerHTML;
}

function updateRecord(formData){
    Filaseleccionada.cells[0].innerHTML = formData.CodigoProducto;
    Filaseleccionada.cells[1].innerHTML = formData.Producto;
    Filaseleccionada.cells[2].innerHTML = formData.Cantidad;
    Filaseleccionada.cells[3].innerHTML = formData.Precio;
}


function onDelete(td){
    if(confirm('¿Desea eliminar este producto?')){
        row = td.parentElement.parentElement;
        document.getElementById('ListaProducto').deleteRow(row.rowIndex);
    }
    resetForm();
}


function resetForm(){
    document.getElementById('codigoproducto').value = '';
    document.getElementById('producto').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('precio').value = '';
    Filaseleccionada = null;
}