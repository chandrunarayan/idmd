[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

## Weeks of - 4/19 and 4/26

## Learning Objectives
* Learn about Objects
* Code Arrays of Objects
* Object Interactions
* Object animations
* Catch up and help with Assignments
* Final Project selection including Objects, Arrays, Sliders, Noise, Color, Text and Images


## Lesson Plan

1. Introduce Objects 

```javascript
class Bubble {
  
  constructor() {
    this.x = 25;
    this.y = height-25;
  }
  
  display() {
    ellipse(this.x, this.y, 50, 50);
  }
  
  move() {
  }
}

let bubb;
function setup() {
  createCanvas(400, 400);
  bubb = new Bubble();
}

function draw() {
  background(220);
  bubb.display();
}
```
        * Update Code above to move bubble to top-right, add color, change size
        * Can you add another bubble starting from bottom-right and moving top-left?
        * Can you stop moving the bubble when your mouse hovers on the bubble?

<iframe src="https://editor.p5js.org/cnarayan/embed/wS7fLxFGo" width="600" height="600" scrolling="no"></iframe>

## Final Project
Complete Final Project based on custom specification designed for each student. The capabilities to demonstrate will be picked from the list below. The final project should contain at least 8 out of the 10 elements listed.

2. Put Bubbles in Arrays - create lots of bubbles!
3. Create a button to add Bubble with random inital location, direction and speed
4. Use slider to set timer for bursting bubbles, fade bubbles to disappear in the last few seconds. 
1. Provide instructions to operate sketch outside the canvas.
4. Bounce Bubble off canvas borders
3. Code Bubble mouse interactions, freeze, burst etc
3. Code interaction with Bubbles based on specific property ofthe bubble such as color, size, etc. Initiate action via a special button.
1. Make custom shapes instead of Bubbles!
1. "Point" your custom shape in the direction of movement
5. Create a Perlin Noise background for your sketch

## Reminders 
### Complete pending assignments and projects

| Type | Format | Details |  Due
|  :--- |  :--- |  :--- |  :---
|  Project  |  Assignment |  Complete one of two projects [Data Viz](https://chandrunarayan.github.io/idmd/lessons/week5/homework/data-visualization) or [Creative Animation](https://chandrunarayan.github.io/idmd/lessons/week5/homework/creative-animation.html) |  3/15/2021 OVERDUE!
|  Exercise  |  Assignment |  Complete [Week 8 Exercises](https://chandrunarayan.github.io/idmd/lessons/week8/) |  4/1/2021 OVERDUE!
|  Exercise  |  Assignment |  Complete [Week 9 Exercises](https://chandrunarayan.github.io/idmd/lessons/week9/) |  4/5/2021 OVERDUE!
|  Project  |  Assignment |  Complete Perlin Noise Effects Project integrating [Week 8](https://chandrunarayan.github.io/idmd/lessons/week8/) & [Week 9](https://chandrunarayan.github.io/idmd/lessons/week9/) techniques| 4/8/2021 OVERDUE
|  Project  |  Assignment |  [Complete Final Project as specified for each student](https://chandrunarayan.github.io/idmd/lessons/week11/#final-project-ideas)| 5/10/2021 



