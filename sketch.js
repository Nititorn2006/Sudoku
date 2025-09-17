let startButton;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(1);

    startButton = createButton('PLAY');
    startButton.position(windowWidth / 2, windowHeight / 2);
    startButton.mouseClicked(gameStarted);
    startButton.class('start-button');
}

function gameStarted() {
    gameStarted = true;
    startButton.hide();
}

// function drawSquare() {
//     color(255);
//     line(windowWidth / 2 - 50, windowHeight / 2 - 50, windowWidth / 2 + 50, windowHeight / 2 + 50);
// }

function draw() {
    if (gameStarted == true) {
        background(1);
        // drawSquare();
    }
}
