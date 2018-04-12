import './initializeCanvas';
import {END_YEAR, START_YEAR, startSelectID, endSelectID} from './appConstants';
import {getOptionsList} from './utils';
import {handleSelectChange, handleFormSubmit, handleTypeClick} from './appHandlers';

/**
 * @param {string} selectID element ID
 * @param {number} selectedValue
 */
function setSelectOptions(selectID, selectedValue) {
    const selectElement = document.getElementById(selectID);
    const options = getOptionsList(START_YEAR, END_YEAR);

    options.querySelector(`[value="${selectedValue}"]`).selected = true;

    selectElement.appendChild(
        options,
    );
}

function applyListeners() {
    [startSelectID, endSelectID].forEach(selectID => {
        const selectElement = document.getElementById(selectID);
        selectElement.addEventListener('change', handleSelectChange);
    });

    document.getElementById('controls').addEventListener('submit', handleFormSubmit);

    document.querySelectorAll('.btn[name="type"]')
        .forEach(el => el.addEventListener('click', handleTypeClick));
}

setSelectOptions(startSelectID, START_YEAR);
setSelectOptions(endSelectID, END_YEAR);

applyListeners();

