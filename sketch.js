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
    stroke(255);
    noFill();
    rectMode(CENTER);
    rect(x, y, 100, 100);
    line(windowWidth / 2 - 50, windowHeight / 2 - 50, windowWidth / 2 + 50, windowHeight / 2 - 50);
    line(windowWidth / 2 + 50, windowHeight / 2 - 50, windowWidth / 2 + 50, windowHeight / 2 + 50);
    line(windowWidth / 2 + 50, windowHeight / 2 + 50, windowWidth / 2 - 50, windowHeight / 2 + 50);
    line(windowWidth / 2 - 50, windowHeight / 2 + 50, windowWidth / 2 - 50, windowHeight / 2 - 50);
}

function drawBox(x, y) {
    stroke(255);
    strokeWeight(8);
    rect(windowWidth / 2, windowHeight / 2, 300, 300);
    strokeWeight(4);
    noFill();
    rectMode(CENTER);
    drawSquare(windowWidth / 2, windowHeight / 2);
    drawSquare(windowWidth / 2 - 100, windowHeight / 2 - 100);
    drawSquare(windowWidth / 2, windowHeight / 2 - 100);
    drawSquare(windowWidth / 2 + 100, windowHeight / 2 - 100);
    drawSquare(windowWidth / 2 - 100, windowHeight / 2);
    drawSquare(windowWidth / 2 + 100, windowHeight / 2);
    drawSquare(windowWidth / 2 - 100, windowHeight / 2 + 100);
    drawSquare(windowWidth / 2, windowHeight / 2 + 100);
    drawSquare(windowWidth / 2 + 100, windowHeight / 2 + 100);
    strokeWeight(1);
}

function drawGrid(x, y) {
    stroke(255);
    noFill();
    rectMode(CENTER);
    drawBox(windowWidth / 2, windowHeight / 2);
}

function draw() {
    if (gameStarted == true) {
        background(1);
        drawGrid(windowWidth / 2, windowHeight / 2);
    }
}
