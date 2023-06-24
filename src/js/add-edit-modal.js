function generateEditModal() {
    const modal = document.getElementById('edit-modal');
    modal.innerHTML = `
    <div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
			    <h5 class="modal-title" id="exampleModalLabel">Edit Transaction</h5>
			    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
			    </button>
			</div>
			<div class="modal-body">
				<p id="edit-id" hidden></p>
				<form>
					<div class="form-group" style="display: flex;">
					<!-- Input for getting description from user -->
						<input type="text" required class="form-control" style="width: 550px;" id="edit-description"
						    maxlength="50" aria-describedby="description" placeholder="Provide a small description or a name for this entry in less than 50 characters.">
					    <!-- Input for getting amount from user -->
						<input type="number" required class="form-control" style="width: 150px; margin-left: 10px;" id="edit-amount"
						maxlength="50" aria-describedby="amount" placeholder="Enter Amount">
						<!-- Radio buttons for getting transaction type from user -->
						<div style="margin-left: 10px; margin-top: 5px;">
							<div class="form-check form-check-inline">
								<input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="edit-expense" value="Expense">
								<label class="form-check-label" for="inlineRadio1">Expense</label>
								<input class="form-check-input" type="radio" name="inlineRadioOptions" id="edit-income" value="Income">
								<label class="form-check-label" for="inlineRadio2">Income</label>
							</div>
						</div>
					</div>
				  </form>
			</div>
			<div class="modal-footer">
			    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			    <button type="button" class="btn btn-primary" onclick="updateRowById()">Save changes</button>
			</div>
        </div>
	</div>`;
}

function generateAddForm() {
    const form = document.getElementById('add-form');
    form.setAttribute('class', 'form-inline');
    form.setAttribute('onsubmit', 'addItemToTable(); return false;');
    form.innerHTML = `
    <div class="form-group" style="display: flex;">
    <!-- Input for getting description from user -->
        <input type="text" required class="form-control" style="width: 550px;" id="description"
          maxlength="50" aria-describedby="description" placeholder="Provide a small description or a name for this entry in less than 50 characters.">
      <!-- Input for getting amount from user -->
        <input type="number" required class="form-control" style="width: 150px; margin-left: 10px;" id="amount"
        maxlength="50" aria-describedby="amount" placeholder="Enter Amount">
        <!-- Radio buttons for getting transaction type from user -->
        <div style="margin-left: 10px; margin-top: 5px;">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio1" value="Expense">
                <label class="form-check-label" for="inlineRadio1">Expense</label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Income">
                <label class="form-check-label" for="inlineRadio2">Income</label>
            </div>
        </div>
        <!-- Button to save the captured details -->
        <input type="button" class="btn btn-success" style="margin-left: 10px;" onclick="addItemToTable()" value="Add"/>
    </div>`;
}