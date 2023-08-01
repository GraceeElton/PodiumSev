
function toggleSelectedStatus(box) {
    /* assumes:
        HTML includes id elements which define the column each cell is in
        HTML boxes/cells have a "box" class 

        Colors are just to show what's going on.

        "selected" status is first removed from any element in the column where it was applied
        Then "selected" status is added to the clicked element*/

    const columnCells = document.querySelectorAll(`#${box.id}`);
    columnCells.forEach(cell => {
        cell.style.color = 'purple';
        cell.classList.remove('selected');
    })

    box.style.color = 'orange';
    box.classList.toggle('selected');
}

function makeBoxesClickable () {
    //  Executes toggleSelectedStatus function when a box is clicked
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            toggleSelectedStatus(box);
        });
    })
}
makeBoxesClickable();

