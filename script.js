function createArray(number) {
    let nb = parseInt(number);
    let arr = [];

    if(isNaN(nb)) {
        nb = 256;
    } else {nb = nb*nb};

    for (let i = 0; i < nb ; i++) {
        arr.push(i+1);
    }
    console.log(arr)
    return arr;
}

function createElements(array) {
    for (let i = 0; i < array.length; i++) {
        let sq = document.createElement('div');
        sq.setAttribute('id', [i]);
        sq.classList.add('cell');
        container.appendChild(sq);
    }
}

let container = document.querySelector('.container');
container.setAttribute('id', 'frame');


function hoverCell (array) {
    let hover = document.querySelectorAll('.cell');
    for (let i = 0; i < array.length; i++) {
        hover[i].addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "yellowgreen";
/*             setTimeout( () => {
                event.target.style.backgroundColor = "";
            }, 100); */
        }, false);
    }
}

function resetPage() {
    let resetButton = document.querySelector('#resetButton');
    resetButton.addEventListener('click', (e) => {
        let input = window.prompt("Enter the number of squares per side you need", "16");
        if (input >= 100) {
            alert("Please, chose a number below 100");
        } else {
            return input;
        }
    })
}

function removeCells() {
    const cells = document.querySelector(".container");
    while (cells.firstChild) {
        cells.removeChild(cells.lastChild);
    }
}

function reset (input) {
    let wipeoutCells = removeCells();
    let array = createArray(input);
    let squares = createElements(array);
    let hovering = hoverCell(array); 
}

function main () {
    let array = createArray();
    let squares = createElements(array);
    let hovering = hoverCell(array);
    let input = resetPage();

    if (input != undefined) {
        let resetGrid = reset(input)
    }
    //let wipeoutGrid = removeCells();
}

main();

