let formItem = document.getElementById('form-item');
let inputField = document.getElementById('input-field');
let listItem = document.getElementById('list-item');
let btn = document.querySelector('.btn');
let filter = document.getElementById('filter');
let clearBtn = document.getElementById('clear');

function addItem(e) {
    e.preventDefault();
    let newItem = inputField.value;
    if(newItem === ''){
        alert("Please add an item");
        return;
    }
}


formItem.addEventListener('click', addItem);