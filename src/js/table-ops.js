/*
  This function generates the transactions table in the DOM dynamically
*/
function createTransactionsHtmlTable() {
  const tableContainer = document.getElementById("table");
  const table = document.createElement("table");
  table.className = "table table-striped table-hover";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const thArray = generateTHArray();
  for (let th of thArray) {
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  tbody.id = "table-body";
  table.appendChild(tbody);
  tableContainer.appendChild(table);
}

/*
  This function dynamically generates the table header tags
*/
function generateTHArray() {
  const idTh = document.createElement("th");
  idTh.scope = "col";
  idTh.innerText = "ID";
  const dateTh = document.createElement("th");
  dateTh.scope = "col";
  dateTh.innerText = "Date";
  const descriptionTh = document.createElement("th");
  descriptionTh.scope = "col";
  descriptionTh.innerText = "Description";
  const typeTh = document.createElement("th");
  typeTh.scope = "col";
  typeTh.innerText = "Type";
  const amountTh = document.createElement("th");
  amountTh.scope = "col";
  amountTh.innerText = "Amount";
  const actionsTh = document.createElement("th");
  actionsTh.scope = "col";
  actionsTh.innerText = "Actions";
  return [idTh, descriptionTh, amountTh, dateTh, typeTh, actionsTh];
}

/*
    This function adds a new row to the table
*/
function addItemToTable() {
  // get value of description
  const description = document.getElementById("description").value;
  // get value of amount
  const amount = document.getElementById("amount").value;
  // get value of type
  const type = $("input[name=inlineRadioOptions]:checked").val();

  // prevent adding row if description or amount is empty
  if (description == "" || amount == "") {
    return;
  }

  // build row json object
  const row = {
    id: financialEntries.length + 1,
    description: description,
    amount: amount,
    date: new Date().toISOString().slice(0, 10),
    type: type,
  };
  // add row to financialEntries array
  financialEntries.push(row);
  // populate table
  populateTable();
}

/*
    Update row in financialEntries array based on id
*/
function updateRowById() {
  // get value of id
  const id = document.getElementById("edit-id").value;
  // get value of description
  const description = document.getElementById("edit-description").value;
  // get value of amount
  const amount = document.getElementById("edit-amount").value;
  // get value of type
  const type = document.getElementById("edit-income").checked
    ? "Income"
    : "Expense";
  for (let i = 0; i < financialEntries.length; i++) {
    if (financialEntries[i].id == id) {
      financialEntries[i] = {
        id: id,
        description: description,
        amount: amount,
        date: new Date().toISOString().slice(0, 10),
        type: type,
      };
      break;
    }
  }
  populateTable();
  $("#edit-modal").modal("hide");
}

/*
    This function adds rows to the table
    based on the data in the financialEntries array
*/
function populateTable() {
  clearTable();
  sortItemsInDescendingOrder();
  for (let row of financialEntries) {
    let newRow = document.createElement("tr");

    addTextContextToRow(row, newRow);

    let newCell = document.createElement("td");

    newCell = generateEditButton(row, newCell);
    newCell = generateDeleteButton(row, newCell);

    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);
  }
  updateBalance();
}

/*
  This function generates static text content for the row
*/
function addTextContextToRow(row, newRow) {
  for (let key in row) {
    let newCell = document.createElement("td");
    if (key == "amount") {
      newCell.style.fontWeight = "bold";
      if (row.type == "Income") {
        newCell.style.color = "green";
        newCell.innerText = "+ $" + row[key];
      } else {
        newCell.style.color = "red";
        newCell.innerText = "- $" + row[key];
      }
    } else newCell.innerText = row[key];
    newRow.appendChild(newCell);
  }
}

/*
  This function dynamically generates the row delete button
*/
function generateDeleteButton(row, newCell) {
  // Add Delete Button
  const btnDelete = document.createElement("BUTTON");
  btnDelete.innerText = "Delete";
  btnDelete.style.marginLeft = "5px";
  btnDelete.className = "btn btn-danger btn-xs";
  const removeBtnClickHandler = function () {
    deleteRowById(row.id);
  };
  btnDelete.addEventListener("click", removeBtnClickHandler);
  newCell.appendChild(btnDelete);
  return newCell;
}

/*
  This function dynamically generates the row edit button
*/
function generateEditButton(row, newCell) {
  // Add Edit Button
  const btnEdit = document.createElement("BUTTON");
  btnEdit.innerText = "Edit";
  btnEdit.className = "btn btn-primary btn-xs";
  const editBtnClickHandler = function () {
    // set value of description
    document.getElementById("edit-description").value = row.description;
    // set value of amount
    document.getElementById("edit-amount").value = row.amount;
    // set value of type
    document.getElementById("edit-" + row.type.toLowerCase()).checked = true;
    // set value of id
    document.getElementById("edit-id").value = row.id;
    // show modal
    $("#edit-modal").modal("show");
  };
  btnEdit.addEventListener("click", editBtnClickHandler);
  newCell.appendChild(btnEdit);
  return newCell;
}

/*
    This function deletes a row from the table based on the id of the row
*/
function deleteRowById(id) {
  for (let i = 0; i < financialEntries.length; i++) {
    if (financialEntries[i].id == id) {
      financialEntries.splice(i, 1);
      break;
    }
  }
  populateTable();
}

/*
    This function clears the table completely
*/
function clearTable() {
  tableBody.innerHTML = "";
}
