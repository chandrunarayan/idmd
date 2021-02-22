
function setup() {
  let dia = 10;
  createCanvas(400, 400);
  background(200);
  strokeWeight(1);
  for (y = 40; y < height; y = y + 40) {
    for (x = 40; x < width; x = x + 40) {
      let rc = randomColor()
      stroke(rc);
      fill(rc);
      ellipse(x, y, 10, 10);
      line(x, y, width / 2, height / 2);
    }
  }

}

function randomColor() {
  return color(random(255), random(255), random(255));
}