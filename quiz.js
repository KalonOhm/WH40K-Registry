document.getElementById('p-button').addEventListener('click', () => {
    document.getElementById('p-div').insertRow(1).innerHTML = document.getElementById('p-input').value;
    document.getElementById('p-input').value = '';
});