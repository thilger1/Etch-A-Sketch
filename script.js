function makeGrid(dimensions = 16){
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`;

    for (let i = 0; i < (dimensions * dimensions); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');  
        grid.insertAdjacentElement('beforeend', pixel);
    }
};

makeGrid(16);