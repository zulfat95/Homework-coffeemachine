import {calculateChange} from "./lib.js";

const selectEl = document.getElementById('coffee');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

calculateEl.addEventListener('click', (evt) => {
    const inputEl = document.getElementById('input');
    if (selectEl.value === 'No chosen') {
        return resultEl.textContent = 'Вы не выбрали напиток';
    }
    return resultEl.textContent = calculateChange(inputEl.value, selectEl.value);
});