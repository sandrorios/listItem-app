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
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    listItem.appendChild(li);

    inputField.value = '';
    inputField.focus();
}


formItem.addEventListener('submit', addItem);