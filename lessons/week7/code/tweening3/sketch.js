let startX = 20; // Initial x coordinate
let stopX = 160; // Final x coordinate
let startY = 30; // Initial y coordinate
let stopY = 80; // Final y coordinate
let x = startX; // Current x coordinate
let y = startY; // Current y coordinate
let step = 0.005; // createCanvas of each step (0.0 to 1.0)
let pct = 0.0; // Percentage traveled (0.0 to 1.0)
let timer = 2000;
let savedTime, elapsedTime;

function setup() {
  createCanvas(600, 400);
  background(220);
  ellipse(startX, startY, 10, 10);
  ellipse(stopX, stopY, 10, 10);
  savedTime = millis();
}

function draw() {
  //background(0);
  elapsedTime = millis() - savedTime;
  if (elapsedTime >= timer) {
    if (pct >= 1) {
      addNew(mouseX, mouseY);
    }
    savedTime = millis();
  }
  if (pct < 1.0) {
    x = startX + ((stopX - startX) * pct);
    y = startY + ((stopY - startY) * pct);
    pct += step;
  }
  ellipse(x, y, 2, 2);
}

function addNew() {
  newX = random(0, width - 10);
  newY = random(0, height - 10)
  startX = stopX;
  startY = stopY;
  stopX = newX;
  stopY = newY;
  pct = 0;
  ellipse(stopX, stopY, 10, 10);
}

