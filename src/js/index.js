const tableBody = document.getElementById("table-body");

/*
    represents array of json objects
    which have a structure like this:
    {
        "id": 1,
        "description": "Salary",
        "amount": 5000,
        "date": "2021-01-01",
        "type": "income"
    }
*/
const financialEntries = [
  {
    id: 1,
    description: "Salary for month May",
    amount: 5000,
    date: "2021-01-01",
    type: "Income",
  },
  {
    id: 2,
    description: "Rent for month May",
    amount: 500,
    date: "2021-01-01",
    type: "Expense",
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
      if (key == "amount") {
        newCell.style.fontWeight = "bold";
        if (row.type == "Income") {
          newCell.style.color = "green";
          newCell.innerHTML = "+ $" + row[key];
        } else {
          newCell.style.color = "red";
          newCell.innerHTML = "- $" + row[key];
        }
      } else newCell.innerText = row[key];
      newRow.appendChild(newCell);
    }
    let newCell = document.createElement("td");
    const btnDelete = document.createElement("BUTTON");
    btnDelete.innerHTML = "Delete";
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

function addItemToTable(event) {
    // get value of description
    const description = document.getElementById("description").value;
    // get value of amount
    const amount = document.getElementById("amount").value;
    // get value of type
    const type = $('input[name=inlineRadioOptions]:checked').val();

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
        type: type
    }
    // add row to financialEntries array
    financialEntries.push(row);
    // populate table
    populateTable();
}

/*
    This function updates the balance based on the data in the financialEntries array
*/
function updateBalance() {
    let balance = 0;
    for (let row of financialEntries) {
        if (row.type == "Income") {
            balance += row.amount;
        } else {
            balance -= row.amount;
        }
    }
    document.getElementById("current-balance").innerHTML = ( balance >= 0 ? "" : "- ") + "$" + Math.abs(balance);
    // change color of balance based on value
    document.getElementById("current-balance").style.color = (balance > 0 ? "green" : balance == 0 ? "black" : "red");
}
// Initial population of the table with seed data
populateTable(financialEntries);
