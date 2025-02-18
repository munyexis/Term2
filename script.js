function generateTable() {
    const number = document.getElementById('numberInput').value;
    const tableOutput = document.getElementById('tableOutput');

    // Igenzura niba umubare watanzwe
    if (number === "") {
        tableOutput.innerHTML = "<p style='color: red;'>X</p>";
        return;
    }

    let tableHtml = `<h2>Multiplication Table for ${number}</h2><table class="table">`;

    for (let i = 1; i <= 10; i++) {
        tableHtml += `<tr><td>${number} x ${i} = ${number * i}</td></tr>`;
    }

    tableHtml += `</table>`;
    tableOutput.innerHTML = tableHtml;
}
