$("#edit-modal").modal("hide");

// Dynamic Html Generation
generateMainHeading();
generateBalancePanel();
generateAddForm();
generateEditModal();
createTransactionsHtmlTable();

const tableBody = document.getElementById("table-body");

// Initial population of the table with seed data
populateTable(financialEntries);