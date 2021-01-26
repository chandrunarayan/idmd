var mic;
var vol = 0;
var x = 0;

function setup() {
  createCanvas(600, 600);

  // create and start audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);

  // get the overall volume (between 0 and 1.0)
  var v = mic.getLevel();
  // "smooth" the volume variable with an easing function
  //vol += (v-vol)/3;
  vol += ease(v, vol, 3);



  // map vol from range 0 to 1 to range 0, 600
  var xVol = map(vol, 0, 1, 0, 600);
  // let x either be the value of xVol or stay as x, whichever is currently greater
  x = max(x, xVol); 

  // un-comment this in to see straight value of xVol
  // ellipse(xVol, 300, 50, 50); 
  ellipse(x, 300, 50, 50);
}

function ease(target, current, ease) {
  return (target-current)/ease;
}
