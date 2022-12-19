const blackButton = document.querySelector('#blackButton');
const rainbowButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraserButton');

let blackMode = true;
let rainbowMode = false;
let eraserMode = false;

function makeGrid(dimensions = 16){
    let grid = document.querySelector('.grid');
    grid.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${dimensions} , 1fr)`;

    for (let i = 0; i < (dimensions * dimensions); i++){
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');  
        grid.insertAdjacentElement('beforeend', pixel);
        pixel.addEventListener('mouseover', () => {
            if (blackMode){
                pixel.style.backgroundColor = 'black';
            }
            if (rainbowMode){
                pixel.style.backgroundColor = 'red';
            }
            if (eraserMode){
                pixel.style.backgroundColor = 'white';
            }
        });
    }
};

blackButton.addEventListener('click', () => {
    blackMode = true;
    rainbowMode = false;
    eraserMode = false;
});

rainbowButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = true;
    eraserMode = false;
});

eraserButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = false;
    eraserMode = true;
});

makeGrid(50);