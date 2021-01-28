## Additional Code for creative visual effects

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