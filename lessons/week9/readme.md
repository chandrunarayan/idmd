[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Week of March 27th

## Learning Objectives

* Sliders to control a sketch
* Add text outside the canvas
* Create a Perlin Noise Flow field
* Apply 2D Perlin Noise to Flow Field
* 3rd Diemsion of Perlin Noise - Time!
* Particles in a Flow Field

## Lessons
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
  noStroke();
}

function draw() {
  background(220);
  yoff = 100;
  for(let i=0; i<rows; i++) {
    xoff = 300;
    for(let j=0; j<cols; j++) {
//  WRITE CODE HERE
    }
    yoff += inc;
  }
}
```

* Change a variable in above sketch using a slider
* Display a variable in above sketch outside the canvas
* Create a flow field for 2D perlin noise with time in 3D

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

* Add slider for inc and text for frame rate to above sketch
* Draw lines reacting to the flow field at their static location

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


## Submit exercises completed in the last 2 weeks to Github



