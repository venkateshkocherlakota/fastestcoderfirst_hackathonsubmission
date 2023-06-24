/*
    This function renders the balance chart on demand
*/
function renderBalanceChart() {
  let chart = bb.generate({
    data: {
      columns: [
        ["Outflow", calculateTotalExpense()],
        ["Inflow", calcullateTotalIncome()],
      ],
      type: "donut",
      onclick: function (d, i) {
        console.log("onclick", d, i);
      },
      onover: function (d, i) {
        console.log("onover", d, i);
      },
      onout: function (d, i) {
        console.log("onout", d, i);
      },
    },
    donut: {
      title: "💵 flows",
    },
    bindto: "#donut-chart",
  });
}

/*
    This function updates the balance based on the data in the financialEntries array
*/
function updateBalance() {
  let balance = 0;
  for (let row of financialEntries) {
    if (row.type == "Income") {
      balance += Number.parseFloat(row.amount);
    } else {
      balance -= Number.parseFloat(row.amount);
    }
  }
  document.getElementById("current-balance").innerHTML =
    (balance >= 0 ? "" : "- ") + "$" + Math.abs(balance);
  // change color of balance based on value
  document.getElementById("current-balance").style.color =
    balance > 0 ? "green" : balance == 0 ? "black" : "red";
  renderBalanceChart();
}
