document.addEventListener('DOMContentLoaded', () => {
    // global variables


    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 8;
    const squares = [];
    let score = 0;

    const candyColors = [
        'url(img/alternative-blue.png)',
        'url(img/alternative-red.png)',
        'url(img/alternative-green.png)',
        'url(img/alternative-orange.png)',
        'url(img/alternative-yellow.png)',
        'url(img/alternative-purple.png)'
    ]

    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('draggable', true);
            square.setAttribute('id', i);
            let randomColor = Math.floor(Math.random() * candyColors.length);
            square.style.backgroundImage = candyColors[randomColor];
            grid.appendChild(square);
            squares.push(square);

        }
    }

    createBoard();










})