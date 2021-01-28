[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

## Homework Expectations

* Review the pending [Homework and Classwork completions](https://bush.myschoolapp.com/lms-assignment/assignment-center/course/110760511/0)
* Review [Student Portfolios](../../student-work.md) and modifications to the Table of Contents (index.html)
* Review [Add Collaborator to Github Process](../week1/repository_collaborator.md)
* Review [Add a P5JS Project to Github Process](../week1/add_p5js_project_to_index.md)

## Learning Objectives

* Review and practice using functions and parameters
* Learn about using max and min
* Reinforce the ability to use the variables mouseX, mouseY, mouseIsPressed, frameCount
* Understand and be able to use the functions random, dist, mousePressed, and mouseReleased
* Learn and practice with conditional statements
* Understand and be able to use logical operators (and, or)

## Lessons

* max() and min()
* Events
* Conditional statement structure
* Functions: random, dist, mousePressed, mouseReleased
* Variables: mouseX, mouseY, mouseIsPressed, frameCount

## Exercises

1 [Dot Drawing](code/drawing_with_ellipses)

* REQUIRED: Update initial code below to change to random color when mouse is clicked

```javascript

function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {
  ellipse(mouseX, mouseY, 25, 25);
}
```

2 [Line Drawing](code/line_drawing_f) 

* REQUIRED: Update initial code below to change to add a tiny circle at the end of the line filled with a random color each time when when the mouse is clicked

```javascript
function setup() {
  createCanvas(500, 500);
  background(0, 0, 255);
}

function draw() {
  if(mouseIsPressed) {
    stroke(255, 255, 255);
    line(150, 150, mouseX, mouseY);
  }
}
```

3 [Growing Ellipse](code/growing_circle_f)

* REQUIRED: Update to make it look like a red giant star with increasing temperature with increasing size
* REQUIRED: Slowly increase the intensity of the Red color only as the circle grows
* OPTIONAL: Explode the star when it reaches the frame border and stop

```javascript
var x = 250;
var y = 250;
var w = 50;

function setup() {
  createCanvas(500, 500);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  fill(120);
  ellipse(x, y, w, w);
  distance = dist(x, y, mouseX, mouseY);
  if (distance < w / 2) {
    w += 1; 
  } else {
    w = 50;  
  }
}
```

4 [React to Sound Volume](code/max_example_ease)

* REQUIRED: Update code to display a filled rectangle (instead of an ellipse) indicating instantaneous and maximum volume using the max() and map() functions
* OPTIONAL: Update code by adding call to ease() function to smooth the increments

```javascript
var mic;
var vol = 0;
var xMax = 0;

function setup() {
  createCanvas(600, 600);

  // create and start audio input
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(200);

  // get the overall volume (between 0 and 1.0)
  var vol = mic.getLevel();

  // add a call to the ease function here to smooth the volume variable
  // it should be of the form vol = vol + ease(......)

  // map vol from range 0 to 1 to range 0, 600
  var xVol = map(vol, 0, 1, 0, 600);

  // let x either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // map volume to x coordinate
  var xVol = map(vol, 0, 1, 0, 600);
  // let xMax either be the value of xVol or stay as x, whichever is currently greater
  xMax = max(xMax, xVol); 

  // Draw ellipses for both instantaneous volume and Max volume
  fill(0, 0, 255);
  ellipse(xVol, 200, 50, 50);
  fill(255, 0, 0);
  ellipse(xMax, 400, 50, 50);
}

function ease(target, current, ease) {
  return (target-current)/ease;
}


```
    

5 REQUIRED: [Interactive Monster Project - Follow Specifications as noted](homework/interactive-monster.md)

6 OPTIONAL: [Add a Reset Button](code/rect_hover) 

* Modify this code to add a small Reset button to Projects. Ensure that the button is small and located at the bottom right of the canvas. It should work regardless of the size of the canvas.

## Resources
[Inital Code for Exercises and Project](code)

## Debrief

* What new things have you learned ?
* What topics are you still struggling with?
* What do you especially enjoy about this class?

## Homework
* Complete week 4 exercises and 1 project. Upload exercises and project code to Github and modify index.html
* You need to complete all "REQIUIRED:" tasks to obtain full credit
* Completing "OPTIONAL:" will earn you extra credits which will carry overfor other assignments
* Read Code Submission Expectations for Assessments](../../final-project.md)
