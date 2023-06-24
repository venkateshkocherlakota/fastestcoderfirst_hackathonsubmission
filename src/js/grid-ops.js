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
    let newCell = document.createElement("td");

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

    newRow.appendChild(newCell);
    tableBody.appendChild(newRow);
  }
  updateBalance();
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
