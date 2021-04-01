[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Week of March 29th

## [Reminder - Assignments Due Calendar](https://bush.myschoolapp.com/lms-assignment/assignment-center/course/110760511/0)

| Type | Format | Details |  Due
|  :--- |  :--- |  :--- |  :---
|  Project  |  Assignment |  Complete one of two projects [Data Viz](https://chandrunarayan.github.io/idmd/lessons/week5/homework/data-visualization) or [Creative Animation](https://chandrunarayan.github.io/idmd/lessons/week5/homework/creative-animation.html) |  3/15/2021 OVERDUE!
|  Exercise  |  Assignment |  Complete [Week 8 Exercises](https://chandrunarayan.github.io/idmd/lessons/week8/) |  4/1/2021 DUE TODAY!
|  Exercise  |  Assignment |  Complete [Week 9 Exercises](https://chandrunarayan.github.io/idmd/lessons/week9/) |  4/5/2021
|  Project  |  Assignment |  Complete Perlin Noise Effects Project integrating [Week 8](https://chandrunarayan.github.io/idmd/lessons/week8/) & [Week 9](https://chandrunarayan.github.io/idmd/lessons/week9/) techniques| 4/8/2021

## Learning Objectives

* Sliders to control a sketch
* Add text outside the canvas
* Create Perlin Noise Movement
* Apply 2D Perlin Noise Grids & Flow Fields
* 3rd Diemsion of Perlin Noise - Time!
* Particles in a Perlin Noise Flow Field
* Perlin Noise Blobs

## Lessons

### Perlin Noise Movement with Sliders
* [Develop a sketch Perlin Noise movement with a slider!](https://editor.p5js.org/cnarayan/present/QydpnqtQZ)
* Submit this to Github as an exercise

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
  y = // random location for y using perlin noise
  ellipse(x, y, 25, 25);
  xoff1 += 0.01;
  xoff2 += 0.01;
}
```

### Perlin Noise Grids & Flow Fields
* [Create a 2D noise grid](https://editor.p5js.org/cnarayan/present/Fc8AufHwQ)
* [Create 2D perlin noise with time in 3D](https://editor.p5js.org/cnarayan/present/5JeDU4VDt)
* [Create Flow Field using Perlin Noise](https://editor.p5js.org/cnarayan/present/tur3F4Wct)
* Instead of a line inside the grid, draw a narrow triangle pointing in the direction of flow!
* Submit this to Github as an exercise
* [Particles following a flow field while moving](https://editor.p5js.org/cnarayan/present/wOc8Ih813)
* See Slack for code extract


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
* Change the inc varable in sketch above using a slider
* Display a variable in sketch below outside the canvas

### Perlin Noise Blobs
* [An example of 2D Perlin noise circular blob](https://editor.p5js.org/cnarayan/present/8zlPoaYqd)
* We will animate this in class
* Submit this to Github as an exercise

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

## Homework
1. Submit exercises completed in the last 2 weeks to Github
1. Complete Perlin Noise effects project by combining techniques from the last 2 weeks

## Zoom Session Recording
[Zoom session recording March 29th](https://zoom.us/rec/share/kC3ncHbdbJYYNJaCbVJL5YUMijbZsydunT1e4e57UMcBG5k4Qah38aPNlvxb2RcD.dGEegCDJVchZGd7S)
Use Passcode: t3iDY6$X 


