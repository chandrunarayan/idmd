[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

## Homework Expectations

* Review the pending [Homework and Classwork completions](https://bush.myschoolapp.com/app/faculty#academicclass/110760511/0/bulletinboard)
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

* [Complete Week 2 Exercises: Moving Ball and Responsive Face](../week2/readme.md)
* [Dot Drawing](code/drawing_with_ellipses_0)
````
function setup() {
  createCanvas(500, 500);
  background(255, 0, 0);
}

function draw() {
  ellipse(mouseX, mouseY, 25, 25);
}
````
	* Update above code o change to random color when mouse is clicked
* [Line Drawing](code/line_drawing)
````
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
````
	* Update to change to add a tiny circle at the end of the line filled with a random color each time when when the mouse is clicked

* [Growing Ellipse](code/growing_circle)
````
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
````
	* Update to make it look like a red giant star with increasing temperature with increasing size 
	* slowly increase the intensity of the Red color only as the circle grows
	* Explode the star when it reaches the frame border and stop
* [max() Example](code/max_example)
````
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
  var vol = mic.getLevel();

  // map vol from range 0 to 1 to range 0, 600
  var xVol = map(vol, 0, 1, 0, 600);
  // let x either be the value of xVol or stay as x, whichever is currently greater
  x = max(x, xVol); 

  // un-comment this in to see straight value of xVol
  //ellipse(xVol, 300, 50, 50); 
  ellipse(x, 300, 50, 50);
}
````
    * Update to change adding ease() function	
* [Add a Reset Button](code/rect_hover) - Look in Slack for initial code - Modify this code to add a small Reset button to Projects. Ensure that the button is small and located at the bottom right of the canvas. It should work regardless of the size of the canvas.
* OPTIONAL [Interactive Monster - Follow Specifications as noted](homework/interactive-monster.md)

## Debrief

* What new things have you learned ?
* What topics are you still struggling with?
* What do you especially enjoy about this class?

## Resources

* [Code Examples](code)
* Daniel Shiffman Videos
	* [p5.js Variables Video](https://vimeo.com/138327548)
	* [p5.js Functions Video](https://vimeo.com/139587733)
	* [Intro to Conditionals Video](https://vimeo.com/138935676)
	* [More Conditionals Video](https://vimeo.com/138935678)

## Homework
* Complete week 3 exercises. Upload project code to Github and modify index.html
* Read Code Submission Expectations for Assessments](../../final-project.md)
