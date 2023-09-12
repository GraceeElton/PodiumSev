
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
        box.style.cssText = 'background-image: linear-gradient(#FB7474, #F93939);';
    } else if (weight <= 7 && weight > 4) {
        box.style.cssText = 'background-image: linear-gradient(#FBC037, #F0A905);';
    } else if (weight <= 4 && weight > 0) {
        box.style.cssText = 'background-image: linear-gradient(#479EEB, #1881DC);';
    } else if (weight < 1) {
        box.style.cssText = 'background-image: linear-gradient(#66CC79, #38A84D);';
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
        resultBox.style.cssText = 'background-image: linear-gradient(#FB7474, #F93939); border: 2px solid black;';
    } else if (totals < 30 && totals >= 20) {
        result.textContent = 'Severity 2';
        resultBox.style.cssText = 'background-image: linear-gradient(#FBC037, #F0A905); border: 2px solid black;';
    } else if (totals < 20 && totals >= 12) {
        result.textContent = 'Severity 3';
        resultBox.style.cssText = 'background-image: linear-gradient(#479EEB, #1881DC); border: 2px solid black;';
    } else if (totals < 12) {
        result.textContent = 'Severity 4';
        resultBox.style.cssText = 'background-image: linear-gradient(#66CC79, #38A84D); border: 2px solid black;';
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


