document.addEventListener('DOMContentLoaded', () => {

    // global variables

    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const width = 8;
    const squares = [];
    let score = 0;

    // array with candies

    const candyColors = [
        'url(img/alternative-blue.png)',
        'url(img/alternative-red.png)',
        'url(img/alternative-green.png)',
        'url(img/alternative-orange.png)',
        'url(img/alternative-yellow.png)',
        'url(img/alternative-purple.png)'
    ]


    // function to create board with candies

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

    // drag variables

    let colorDragged;
    let colorReplaced;
    let squareIdDragged;
    let squareIdReplaced;

    squares.forEach(square => square.addEventListener('dragstart', dragStart));
    squares.forEach(square => square.addEventListener('dragend', dragEnd));
    squares.forEach(square => square.addEventListener('dragover', dragOver));
    squares.forEach(square => square.addEventListener('dragenter', dragEnter));
    squares.forEach(square => square.addEventListener('dragleave', dragLeave));
    squares.forEach(square => square.addEventListener('drop', dragDrop));


    function dragStart() {
        console.log(this.id, 'dragstart');

        // the candy grabbed
        colorDragged = this.style.backgroundImage;

        // the candy ID grabbed
        squareIdDragged = parseInt(this.id);

    }

    function dragEnd() {
        // console.log(this.id, 'dragend');

    }

    function dragOver() {
        // console.log(this.id, 'dragover');

    }

    function dragEnter() {
        // console.log(this.id, 'dragenter');
    }

    function dragLeave() {
        // console.log(this.id, 'dragleave');
    }

    function dragDrop() {
        // console.log(this.id, 'drop');
    }





})