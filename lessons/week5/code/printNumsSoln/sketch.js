// col wise reversed operation
var nums = [1, 2, 3, 4, 7, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let cols = 10; // number of cols not pixels
let rows = 5; // number of rows
let count = 0;
let dir = 1;

function setup() {
  createCanvas(200, 100);
  background('pink');
  strokeWeight(5);
  textAlign(CENTER, CENTER);
  let xoff = width / (cols + 1);
  let yoff = height / (rows + 1);
  for (let c = 0; c < cols; c++) { // cols
    let x = xoff * (c + 1);
    if (dir == 1) {
      for (let r = 0; r < rows; r++) { // rows
        let y = yoff * (r + 1);
        text('' + nums[count], x, y);
        count++;
        if (count == nums.length)
          count = 0;
      }
    } else {
      for (let r = rows; r > 0; r--) { // rows
        let y = yoff * (r); //// yoff * (r + 1);
        text('' + nums[count], x, y);
        count++;
        if (count == nums.length)
          count = 0;
      }
    }
  }

}