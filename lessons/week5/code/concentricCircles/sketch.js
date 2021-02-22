
function setup() {
  createCanvas(400, 400);
  for (let d = width; d >= 50; d-=50) {
    fill(randomColor());
    ellipse(width / 2, height / 2, d, d);
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}