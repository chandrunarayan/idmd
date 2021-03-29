[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Week of March 29th

## Learning Objectives

* Sliders to control a sketch
* Add text outside the canvas
* Create Perlin Noise Movement
* Apply 2D Perlin Noise Grid
* 3rd Diemsion of Perlin Noise - Time!
* Particles in a Flow Field

## Lessons

* [Develop a sketch Perlin Noise movement with a slider!](https://editor.p5js.org/cnarayan/present/QydpnqtQZ)

```javascript
let x, y, clr
let xoff1 = 300;
let xoff2 = 500;

function setup() {
  createCanvas(400, 400);
  clr = color('magenta');
}

function draw() {
  background(220);
  fill(clr);
  x = // random location for x using perlin noise
  y = // random location for x using perlin noise
  ellipse(x, y, 25, 25);
  xoff1 += 0.01;
  xoff2 += 0.01;
}
```

* [Draw a 2D noise grid](https://editor.p5js.org/cnarayan/present/Fc8AufHwQ)

```javascript
let res = 20;
let rows, cols;
let xoff, yoff;
let inc = .1;

function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res;
}

function draw() {
  background(220);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
//  WRITE CODE BELOW HERE
    }
  }
}
```

* Change a variable in sketch below using a slider
* Display a variable in sketch below outside the canvas
* [Create 2D perlin noise with time in 3D](https://editor.p5js.org/cnarayan/present/5JeDU4VDt)

```javascript
let res = 20;
let rows, cols;
let xoff, yoff;
let inc = .1;
let zoff = 0;

function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res;
  noStroke();
}

function draw() {
  background(220);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      let index = rows*i+j;
      console.log(index);
      let n = noise(xoff, yoff, zoff);
      fill(n*255);
      rect(i*res,j*res,res,res);
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.005
}
```

* [An example of 2D Perlin noise circular blob](https://editor.p5js.org/cnarayan/present/FVUDCqj-7)
* We will animate this in class

```javascript
let nmax = 1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  noFill();
  beginShape();
  for (let a = 0; a < TWO_PI; a+=0.3) {
    let xoff = map(cos(a),-1,1,0,nmax);
    let yoff = map(sin(a),-1,1,0,nmax);
    let r = map(noise(xoff, yoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
  //noLoop();
}
```

* [An example of 2D Perlin noise Flow Field](https://editor.p5js.org/cnarayan/present/tur3F4Wct)

```javascript
let res = 40;
let rows, cols;
let xoff, yoff;
let inc = .1;
let zoff = 0;

function setup() {
  createCanvas(400, 400);
  rows = height/res;
  cols = width/res; 
}

function draw() {
  background(220);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
      let index = rows*i+j;
      let n = noise(xoff, yoff, zoff);
      let angle = map(n, 0, 1, 0, 2*PI);
      fill(n*255);
      noStroke();
      rect(i*res,j*res,res,res);      
      drawLine(i*res, j*res, angle);
      xoff += inc;
    }
    yoff += inc;
  }
  zoff += 0.005
}

function drawLine(x, y, a) {
//COMPLETE THIS FUNCTION
}
```

* [Make particles follow a flow field while moving](https://editor.p5js.org/cnarayan/present/wOc8Ih813)
* See Slack for code extract

## Homework
1. Submit exercises completed in the last 2 weeks to Github
1. Complete Perlin Noise effects project by combining techniques from the last 2 weeks



