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
    description: "Salary for month May (Edit me)",
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
    table reference from the DOM
*/
const tableBody = document.getElementById("table-body");