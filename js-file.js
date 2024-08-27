const container = document.getElementById('grid-container')
const resize = document.getElementById('resize')
const mode = document.getElementById('mode')
let isEraseMode = false;

function createDivs(n, container){

    container.innerHTML = '' // cleaning the grid

    const cellSize = `calc(100% / ${n})`;

    for (let i = 0; i < n * n; i++){

        const cell = document.createElement('div');
        cell.setAttribute('class', 'square');
        cell.style.width = cellSize;
        cell.style.height = cellSize;
        cell.addEventListener('mouseover', paintOrErase);
        
        container.appendChild(cell);
        
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function paintOrErase(e) {
    if (isEraseMode) {
        e.target.style.backgroundColor = 'white'; // Or whatever the default background color is
    } else {
        e.target.style.backgroundColor = getRandomColor();
    }
}

resize.addEventListener('click', function() {
    let newSize = parseInt(prompt("How many lines the grid must have?"));

    if (isNaN(newSize) || newSize <= 0 || newSize > 100) {
        alert("Please enter a valid positive number.");
        return;
    }

    createDivs(newSize, container);
})

mode.addEventListener('click', function() {
    isEraseMode = !isEraseMode; // Toggle between draw and erase mode
    this.textContent = isEraseMode ? 'Switch to Draw Mode' : 'Switch to Erase Mode'; // Update button text
})

createDivs(16, container);