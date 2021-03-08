let cols = 30;
let rows = 10;
let canWid = 480;
let canHgt = 210;
let count = 0;
function setup() {
  createCanvas(canWid, canHgt);
  background(200);
  let xoff = canWid/(cols + 1);
  let yoff = canHgt/(rows +1);
  for (let i = 0; i < cols; i++) {
    let x1 = xoff * (i+1);
    let y1 = 0;
    let x2 = x1 + x1/2;
    let y2 = height*0.6;
    line(x1, y1, x2, y2);
    //Can you draw another line from the tip 
    // of the first line to show a kink??
    line(x2, y2, x2-x2/3, height);
  }
}

function draw() {

}