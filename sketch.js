let startButton;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(1);

    startButton = createButton('PLAY');
    startButton.position(windowWidth / 2, windowHeight / 2);
    startButton.mouseClicked(gameStarted);
    startButton.class('start-button');
    title = select('.gameTitle');
}

function gameStarted() {
    gameStarted = true;
    startButton.hide();
    title.hide();
}

function drawSquare(x, y) {
    stroke(255);
    line(windowWidth / 2 - 50, windowHeight / 2 - 50, windowWidth / 2 - 50, windowHeight / 2 + 50);
    line(windowWidth / 2 - 50, windowHeight / 2 - 50, windowWidth / 2 + 50, windowHeight / 2 - 50);
    line(windowWidth / 2 - 50, windowHeight / 2 + 50, windowWidth / 2 + 50, windowHeight / 2 + 50);
    line(windowWidth / 2 + 50, windowHeight / 2 - 50, windowWidth / 2 + 50, windowHeight / 2 + 50);
}

function drawBox() {
    drawSquare();
}

function draw() {
    if (gameStarted == true) {
        background(1);
        drawSquare(100, 100 + 100);
    }
}
