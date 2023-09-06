
function toggleSelectedStatus(box) {
    const columnCells = document.querySelectorAll(`#${box.id}`);
    columnCells.forEach(cell => {
        cell.classList.remove('selected');
        cell.style.cssText = 'background-color: inherit;';
    })

    box.classList.toggle('selected');
    setSelectedColors(box);
}

function setSelectedColors (box) {
    const weight = box.getAttribute('data-weight');
    if (weight >= 8) {
        box.style.cssText = 'background-color: #f5006a;';
    } else if (weight <= 7 && weight > 4) {
        box.style.cssText = 'background-color: #FFBE0B;';
    } else if (weight <= 4 && weight > 0) {
        box.style.cssText = 'background-color: #9757EF;';
    } else if (weight < 1) {
        box.style.cssText = 'background-color: #27CE2D;';
    }
}

function calculateTotals () {
    const selectedBoxes = document.querySelectorAll('.selected');
    const weightsArray = [];

    const recordBoxWeight = (item, arr) => {
        const weight = item.getAttribute('data-weight');
        arr.push(Number(weight));
        return arr;
    }
    
    selectedBoxes.forEach(box => {
        recordBoxWeight(box, weightsArray);
    })

    console.log(weightsArray);

    if (weightsArray.length >= 5) {
        updateResult(weightsArray);
    }
}

function updateResult (arr) {
    let totals = arr.reduce((a, b) => a + b);
    console.log(`severity score: ${totals}`);

    const result = document.querySelector('.result-text');
    const resultBox = document.querySelector('.result');

    if (totals >= 30) {
        result.textContent = 'Severity 1';
        resultBox.style.cssText = 'background-color: #f5006a;';
    } else if (totals < 30 && totals >= 20) {
        result.textContent = 'Severity 2';
        resultBox.style.cssText = 'background-color: #FFBE0B;';
    } else if (totals < 20 && totals >= 12) {
        result.textContent = 'Severity 3';
        resultBox.style.cssText = 'background-color: #9757EF;';
    } else if (totals < 12) {
        result.textContent = 'Severity 4';
        resultBox.style.cssText = 'background-color: #27CE2D;';
    }
}

function makeBoxesClickable () {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            toggleSelectedStatus(box);
            calculateTotals();
        });
    })
}
makeBoxesClickable();


