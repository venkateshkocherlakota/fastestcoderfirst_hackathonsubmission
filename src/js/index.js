$("#edit-modal").modal("hide");
createTransactionsHtmlTable();

const tableBody = document.getElementById("table-body");


// Initial population of the table with seed data
populateTable(financialEntries);