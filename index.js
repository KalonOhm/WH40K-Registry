//When clicked, the submit button will add the information to the registry form as a new line (top line)
document.getElementById('submit').addEventListener('click', () => {
    let table = document.getElementById('roster');
    let row = table.insertRow(1);
    row.setAttribute('id', `item+${id}`);
    row.insertCell(0).innerHTML = document.getElementById('inputFirstName').value + " " + document.getElementById('inputLastName').value;
    row.insertCell(1).innerHTML = document.getElementById('inputArmy').value;
    row.insertCell(2).innerHTML = document.getElementById('inputSubfaction').value;
    row.insertCell(3).innerHTML = document.getElementById('inputPointCost').value;
    row.insertCell(4).innerHTML = document.getElementById('inputDetachment').value;
    row.insertCell(5).innerHTML = document.getElementById('inputCP').value;
    // This will "reset" the form fields to blanks after the data is added
    document.getElementById('inputFirstName').value = '';
    document.getElementById('inputLastName').value = '';
    document.getElementById('inputArmy').value = '';
    document.getElementById('inputSubfaction').value = '';
    document.getElementById('inputPointCost').value = '';
    document.getElementById('inputDetachment').value = '';
    document.getElementById('inputCP').value = ''; 
});