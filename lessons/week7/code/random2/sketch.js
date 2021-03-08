function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(210);
  for (let i = 10; i < width-10; i+=20) {
    let mx1 = random(i-10, i+10) * mouseX/width;
    let mx2 = random(i-10, i+10) * mouseX/width;
    line(i+mx1, 10, i+mx2, height-10);
  }
  y2 = random(20, height - 20);
  line(20, height / 2, width - 20, y2);
}