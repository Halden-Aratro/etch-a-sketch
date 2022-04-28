const DEFAULT_SIZE = 16;
const DEFAULT_COLOR = "yellowgreen"

let gridContainer = document.querySelector('.gridContainer');

function createGrid (size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const sq = document.createElement('div');
        sq.classList.add('cell');
        gridContainer.appendChild(sq);
    }
}

function colorCell (size) {
    let hoverGrid = document.querySelectorAll('.cell');
    for (let i = 0; i < size * size; i++) {
        hoverGrid[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = DEFAULT_COLOR;
        }, false);
    }
}

function getUserInput() {
    let resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', (e) => {
        let newSize = window.prompt("Enter the number of squares per side you need", "16");
        if (newSize > 100) {
            alert("Please, chose a number below 100");
        } else {
            resetPage(newSize);
        }
    })
}

function resetPage(size) {
    removeCells();
    createGrid(size);
    colorCell(size); 
}

function removeCells() {
    let grid = document.querySelector(".gridContainer");
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    colorCell(DEFAULT_SIZE);
    getUserInput();
}


