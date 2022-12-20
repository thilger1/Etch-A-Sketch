const blackButton = document.querySelector('#blackButton');
blackButton.style.backgroundColor = 'gray';
const rainbowButton = document.querySelector('#rainbowButton');
const eraserButton = document.querySelector('#eraserButton');

let blackMode = true;
let rainbowMode = false;
let eraserMode = false;

function makeGrid(dimensions = 16){
    let grid = document.querySelector('.grid');
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
};

blackButton.addEventListener('click', () => {
    blackMode = true;
    rainbowMode = false;
    eraserMode = false;

    blackButton.style.backgroundColor = 'gray';
    rainbowButton.style.backgroundColor = 'white';
    eraserButton.style.backgroundColor = 'white';
    
});

rainbowButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = true;
    eraserMode = false;

    blackButton.style.backgroundColor = 'white';
    rainbowButton.style.backgroundColor = 'gray';
    eraserButton.style.backgroundColor = 'white';
});

eraserButton.addEventListener('click', () => {
    blackMode = false;
    rainbowMode = false;
    eraserMode = true;

    blackButton.style.backgroundColor = 'white';
    rainbowButton.style.backgroundColor = 'white';
    eraserButton.style.backgroundColor = 'gray';
});

makeGrid(50);