
import { addItem } from './addItemHandler.js';
import { removeItem } from './removeItemHandler.js';
import { filterItems } from './searchItemHandler.js';


let form = document.getElementById('addForm');
form.addEventListener("submit", addItem);
export let itemList = document.getElementById('items');
itemList.addEventListener('click', removeItem);
let filter = document.getElementById('filter');
filter.addEventListener('keyup', filterItems);




