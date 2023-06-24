const tableBody = document.getElementById("table-body");

/*
    represents array of json objects
    which have a structure like this:
    {
        "id": 1,
        "description": "Salary",
        "amount": 5000,
        "date": "2021-01-01"
    }
*/
const financialEntries = [
  {
    id: 1,
    description: "Salary for month May",
    amount: 5000,
    date: "2021-01-01",
  },
];

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
      newCell.innerText = row[key];
      newRow.appendChild(newCell);
    }
    const btnDelete = document.createElement("BUTTON");
      btnDelete.innerHTML = "Delete";
      btnDelete.className = "btn btn-danger btn-xs";
      btnDelete.style.marginLeft = "10px";
      btnDelete.style.marginTop  = "5px";
      const removeBtnClickHandler = function() {
        deleteRowById(row.id);
      };
      btnDelete.addEventListener("click", removeBtnClickHandler);
      newRow.appendChild(btnDelete);
    tableBody.appendChild(newRow);
  }
}

/*
    This function sorts the financialEntries array in descending order based on the date property
*/
function sortItemsInDescendingOrder() {
  financialEntries.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
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

// Initial population of the table with seed data
populateTable(financialEntries);
