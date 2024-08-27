const grid = document.getElementById('grid')

function createDivs(n, matrix){
    for (let i = 0; i < n; i++){
        const row  = document.createElement('div');
        row.setAttribute('class', 'row');
        for(let j = 0; j < n; j++){

            cell = document.createElement('div');
            cell.setAttribute('class', 'square');
            cell.addEventListener('mouseover', paint);
            
            row.appendChild(cell);
        }
        matrix.appendChild(row);
    }
}

function paint(e){
    e.target.style.backgroundColor = 'black';
}


createDivs(16, grid)