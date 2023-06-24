function generateBalancePanel() {
  const balance = document.getElementById("balance");
  balance.innerHTML = `
    <!-- place div in center -->
    <div style="display: flex; justify-content: center; padding: 10px;">
        <div class="card" style="width: auto; padding: 10px; text-align: center; border-radius: 15px;">
            <h1>Current Balance</h5>
    <hr />
            <h2 class="card-subtitle mb-2 text-muted" id="current-balance">0</h6>
    <br/>
            <a href="#" class="card-link" onclick="updateBalance()">Refresh 🔃</a>
        </div>
    <div id="donut-chart" style="width: 200px;"></div>
    </div>
    `;
}
