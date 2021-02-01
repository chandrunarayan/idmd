[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Lesson Plan

## Reminders
* Discuss issues with Weekly submissions
  * Assignments graded and returned
  * Discuss submissions to Github 

## Review and Exercises 

### Re-Introduction
* Did you write a statement about yourself and modify your TOC ?
* Do you know [my office hours](https://bush.myschoolapp.com/app/faculty#academicclass/110760511/0/bulletinboard) ?
* Do you how your [work will be evaluated](../../syllabus.md) ?
* Did you get an invitation to the [IDMD Slack IM](https://cpjava2020.slack.com/) ?
* What's working and not working - [post a message in Slack](https://cpjava2020.slack.com/) !
* You may benefit by using an actual mouse in this class - Please ask me if you do not have one

### Pair Programming
* [Tilden](https://tildenkeffeler.github.io/idmd-portfolio) - [Max](https://maxalhadeff.github.io/idmd-portfolio)
* [Owen](https://owenprendergast.github.io/idmd-portfolio) - [Eli](https://el1weise.github.io/idmd-portfolio)

* [Student Work in Paired Teams](../../student-work.md) Please help each other!
* for a primer on index.html modifications [see this](../week1/add_p5js_project_to_index.md)
* Comment/Fix/clean your code; help each other!

## Textbook Chapter 3 - Draw Review
  * [Getting Started with P5JS - Download your book and open locally on laptop](https://drive.google.com/drive/folders/1_zq8eZnKCsoD5Y-22_pZfTbOgZg2dwmB)
  * [Open P5JS Editor, Login and be ready work thorough examples](https://editor.p5js.org)

##  Additional Code Review Topics
* Conditional statement structure
* Logical operators (and, or)
* Events
* Variables: mouseX, mouseY, mouseIsPressed, width, height, frameCount
* Functions: random, dist, mousePressed, mouseReleased, translate, rotate

### Class Exercises to try
* Rotating square

	```javascript
	// inspired by http://genekogan.com/

	function setup() {
		createCanvas(350, 350);
		// draw rect from CENTER
		// rectMode(CENTER);
	}

	function draw() {
		background(240);

		// move the origin to the pivot point
		translate(150, 150); 

		// then rotate the grid around the pivot point by a
		// number of degrees equal to the frame count of the sketch
		rotate(radians(frameCount));

		// and draw the square at the origin
		fill(0);
		rect(0, 0, 100, 100);
	}
	```

* Rotating rect

	```javascript
	function setup() {
		createCanvas(400, 400);
		background(240);
		rectMode(CENTER);
	}

	function draw() {
		//if (frameCount % 25 == 0) {
			//fill(random(255), random(255), random(255));
			//fill(0);
			translate(200, 200);
			rotate(radians(frameCount));
			rect(0, 0, 300, 20);
		//}
	}
	```

* Drawing with ellipses

	```javascript
	function setup() {
	  createCanvas(500, 500);
	  background(255, 0, 0);
	}

	function draw() {
	  ellipse(mouseX, mouseY, 25, 25);
	}

	function mousePressed() {
	  fill(random(255), random(255), random(255));
	}
	```

* Drawing with lines

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

* Rect hover

	```javascript
	function setup() {
	  createCanvas(400, 400);
	  noStroke();
	}

	function draw() {
	  background(204);
	  rect(100, 200, 180, 160);
	  
	  if (mouseX > 100 && mouseX < 280 && mouseY > 200 && mouseY < 360) {
	    fill(0);
	  } else {
	    fill(255);
	  }
	}
	```

* Growing circle

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
	    w = w + 1; 
	  } else {
	    w = 50;  
	  }
	}
	```

* Add restart button to Projects

	```javascript
	function setup() {
	createCanvas(400, 400);
	noStroke();
	}

	function draw() {
	background(220);
	let s = 'Reset';  
	if (mouseX > 100 && mouseX < 150 && mouseY > 200 && mouseY < 220) {
		render_hovered_button(s, 100, 200)
	} else {
		render_dormant_button(s,100, 200)
	} 
	}

	function render_hovered_button(s, x, y) {
		fill(0);
		rect(x, y, 50, 20);
		fill(255)
		// Add some code here if isMousePressed then reset sketch variables
		if(mouseIsPressed) {
		fill(200)
		resetVariables();
		} else {
		fill(255)
		}
	text(s, x+7, y+3, 50, 20);
	}

	function render_dormant_button(s, x, y) {
		fill(255);
		rect(x, y, 50, 20);
		fill(0)
		text(s, x+7, y+3, 50, 20);
	}

	function resetVariables() {
	// reset the variables ti inital sketch values
	print("resetting sketch variables")
	}


	```

