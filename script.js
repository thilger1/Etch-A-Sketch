const blackButton = document.querySelector('#blackButton');
blackButton.style.backgroundColor = 'gray';
const rainbowButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraserButton');
const clearButton = document.querySelector('#clearButton');
const grid = document.querySelector('.grid');
const showHeight = document.querySelector('#height');
const upButton = document.querySelector('#changeUp');
const downButton = document.querySelector('#changeDown');
let height = 30;

let blackMode = true;
let rainbowMode = false;
let eraserMode = false;

function makeGrid(dimensions = 16){
    grid.style.gridTemplateColumns = `repeat(${dimensions * 2} , 1fr)`;
    grid.style.gridTemplateRows = `repeat(${dimensions} , 1fr)`;

    for (let i = 0; i < (dimensions * (2 * dimensions)); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');  
        grid.insertAdjacentElement('beforeend', pixel);
        pixel.addEventListener('mouseover', () => {
            if (blackMode){
                pixel.style.backgroundColor = 'black';
            }
            if (rainbowMode){
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                pixel.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            }
            if (eraserMode){
                pixel.style.backgroundColor = 'azure';
            }
        });
    }
    showHeight.innerHTML = height;
};

blackButton.addEventListener('click', () => {
    blackMode = true;
    rainbowMode = false;
    eraserMode = false;

    resetButtons();
    blackButton.style.backgroundColor = 'gray';
});

upButton.addEventListener('click', () => {
    if (height < 40) {
        height += 1;
        clearGrid();
        makeGrid(height);
    }
});

downButton.addEventListener('click', () => {
    if (height > 1){
        height -= 1;
        clearGrid();
        makeGrid(height);
    }
});

rainbowButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = true;
    eraserMode = false;

    resetButtons();
    rainbowButton.style.backgroundColor = 'gray';
});

eraserButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = false;
    eraserMode = true;

    resetButtons();
    eraserButton.style.backgroundColor = 'gray';
});

clearButton.addEventListener('click', clearGrid);

function clearGrid(){
    let pixel = document.querySelectorAll('.pixel');
    pixel.forEach(pixel => {
        pixel.style.backgroundColor = 'azure';
    })
};

function resetButtons(){
    blackButton.style.backgroundColor = 'azure';
    rainbowButton.style.backgroundColor = 'azure';
    eraserButton.style.backgroundColor = 'azure';
}

makeGrid(height);
