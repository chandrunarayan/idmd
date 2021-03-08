[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Week of March 8th

## Past Work
* Review the Assignments Status
* Practice for Loops and While Loops
* Practice for showing Animation Buildup using Arrays


## Learning Objectives
* [Online Textbook reference Chapter 8.6 - 8.10](https://drive.google.com/file/d/18kfdShfj79ISxFTn-iw1ahFTtuFY-KF9/view?usp=sharing)
* Open your local copy you have previously downloaded to yout laptop. If not download above and open locally.
* Practice Motion: Tweening, Shaking, Timing
   * Tweening [Modify code below to do this!]()
 
   ```javascript
    let startX = 20; // Initial x coordinate
    let stopX = 160; // Final x coordinate
    let startY = 30; // Initial y coordinate
    let stopY = 80; // Final y coordinate
    let x = startX; // Current x coordinate
    let y = startY; // Current y coordinate
    let step = 0.005; // createCanvas of each step (0.0 to 1.0)
    let pct = 0.0; // Percentage traveled (0.0 to 1.0)

    function setup() {
        createCanvas(240, 120);
    }

    function draw() {
        background(0);
        if (pct < 1.0) {
            x = startX + ((stopX - startX) * pct);
            y = startY + ((stopY - startY) * pct);
            pct += step;
        }
        ellipse(x, y, 20, 20);
    }
//***** 
// MODIFY THIS CODE TO ADD ADDITIONAL POINTS TO TWEEN TO    
// BASED ON WHERE THE MOUSE IS CLICKED. START EACH ADDITIONAL
// TWEEN ONLY WHEN THE PREVIOUS TWEEN HAS COMPLETED. 
// HINT: USE mousePressed(), mouseX, mouseY  
//*****
   ```

   * Shaking [Modify code below to do this!]()
 
   ```javascript
    function setup() {
        createCanvas(600, 400);
    }

    function draw() {
        background(210);
        y2 = random(20, height-20);
        line(20, height/2, width-20, y2);
    }
//***** 
// MODIFY THIS CODE TO SHOW 10 VERTICAL LINES EQUALLY
// SPACED THAT ARE SHAKING IN BOTH X and Y COORDINATES. 
// INCREASE THE AMOUNT OF SHAKING BASED mouseX LOCATION
// MORE SHAKING IF mouseX IS GREATER  
// HINT: USE mouseX to MODIFY random() PARAMETERS
//*****      
   ```

   * Timing [Combine code below with modified Tweening code to do this!]()

   ```javascript
let timer = 2000;
    let savedTime, elapsedTime;
    let out = 'tick';

    function setup() {
        createCanvas(480, 120);
        background(204);
        savedTime = millis();
        textSize(20);
        text(out, width/2, height/2);
    }

    function draw() {
        elapsedTime = millis() - savedTime;
        //print(nf(elapsedTime,4,0));
        if (elapsedTime >= timer) {
            savedTime = millis();
            if (out == 'tick') {
                out = 'tock';
            } else {
                out = 'tick'
            }
            background(204)
            text(out, width/2, height/2);
        }
    }

   ```
