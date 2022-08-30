// Make a webpage with a 16x16 grid of squares

const gridDiv = document.getElementById("gridDiv"); // Selects div for grid
let makeAGrid = makeGrid(16, 16); // Calls the makeGrid function for a 16x16 grid

// Make grid function

function makeGrid(rows, cols) { // Makes a grid with # rows 'row' and # columns 'cols'
    
    gridDiv.style.setProperty('--grid-rows', rows);
    gridDiv.style.setProperty('--grid-cols', cols);

    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', hoverColor);
        cell.innerText = (c + 1);
        gridDiv.appendChild(cell).className = "grid-item";
    };
};

// Change div color on hover
function hoverColor($event){
    const item = $event.target;
    item.style.backgroundColor = "black";
};

// Make button (#/setGrid) change the makeAGrid specifications

setGrid.addEventListener('click', function (){
    let newCols = prompt("Enter size");
    let newRows = newCols
    makeAgrid = makeGrid(newRows, newCols);
    gridDiv.appendChild(makeAGrid);
});

//setGrid.addEventListener('click')