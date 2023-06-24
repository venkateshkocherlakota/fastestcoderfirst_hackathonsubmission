/*
    This function sorts the financialEntries array in descending order based on the date property
*/
function sortItemsInDescendingOrder() {
  financialEntries.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

/*
    Thiis function calculates the total expense based on the data in the financialEntries array
*/
function calculateTotalExpense() {
  let totalExpense = 0;
  for (let row of financialEntries) {
    if (row.type == "Expense") {
      totalExpense += Number.parseFloat(row.amount);
    }
  }
  return totalExpense;
}

/*
    This function calculates the total income based on the data in the financialEntries array
*/
function calcullateTotalIncome() {
  let totalIncome = 0;
  for (let row of financialEntries) {
    if (row.type == "Income") {
      totalIncome += Number.parseFloat(row.amount);
    }
  }
  return totalIncome;
}
