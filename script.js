const gridContainer = document.querySelector(".container");
// const row

function createArray() {
    let arr = [];
    for (let i = 0; i <= 255; i++) {
        arr.push(i+1);
    }
    return arr;
}

//For a loop, do as if it was a manipulation for only 1 element
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
        }, false);
    }
}

function main () {
    let array = createArray();
    let squares = createElements(array);
    let hovering = hoverCell(array);
}

main();

