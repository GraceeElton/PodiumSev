//  These are the thresholds for each composite severity
const sevOne = 30;
const sevTwo = 20;
const sevThree = 11;
const sevFour = 0;

//  Color variables for easy updating
const red = 'background-image: linear-gradient(#FB7474, #F93939);';
const yellow = 'background-image: linear-gradient(#FBC037, #F0A905);';
const blue = 'background-image: linear-gradient(#479EEB, #1881DC);';
const green = 'background-image: linear-gradient(#66CC79, #38A84D);';

//  Adds "selected" class to a box.
//  Ensures that only one box in each column can have "selected" at once.
//  Calls setSelectedColors to change the colors
function toggleSelectedStatus(box) {
    const columnCells = document.querySelectorAll(`#${box.id}`);
    columnCells.forEach(cell => {
        cell.classList.remove('selected');
        cell.style.cssText = 'background-color: inherit;';
    })

    box.classList.toggle('selected');
    setSelectedColors(box);
}

//  Styles "selected" boxes based on their rows
function setSelectedColors (box) {
    const row = box.classList;
    switch (true) {
        case row.contains('row1'): 
            box.style.cssText = red;
            break;
        case row.contains('row2'):
            box.style.cssText = yellow;
            break;
        case row.contains('row3'):
            box.style.cssText = blue;
            break;
        case row.contains('row4'):
            box.style.cssText = green;
            break;
    }
}

//  Creates an array of the data-weight attribute value
//  of each "selected" box;
//  When there are 5 numbers in the array, it totals them
//  And calls updateResult
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
        const totals = weightsArray.reduce((a, b) => a + b);
        console.log(`severity score: ${totals}`);
        updateResult(totals);
    }
}

//  Displays the severity based on the number that's passed in
//  Styles the severity output
function updateResult (totals) {
    const result = document.querySelector('.result-text');
    const resultBox = document.querySelector('.result');

    if (totals >= sevOne) {
        result.textContent = 'Severity 1';
        resultBox.style.cssText = red;
    } else if (totals < sevOne && totals >= sevTwo) {
        result.textContent = 'Severity 2';
        resultBox.style.cssText = yellow;
    } else if (totals < sevTwo && totals >= sevThree) {
        result.textContent = 'Severity 3';
        resultBox.style.cssText = blue;
    } else if (totals < sevThree) {
        result.textContent = 'Severity 4';
        resultBox.style.cssText = green;
    }
}

//  Adds event listeners to the buttons that
//  Execute all the above functions
function makeBoxesClickable () {
    const boxes = document.querySelectorAll('button');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            toggleSelectedStatus(box);
            calculateTotals();
        });
    })
}

//  Call the function to execute the whole thing
makeBoxesClickable();