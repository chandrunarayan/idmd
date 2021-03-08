[_Bush School IDMD Spring Semester 2021_](https://chandrunarayan.github.io/idmd/)

# Week of March 8th

## Past Work
* Review the Assignments Status
* Practice for Loops and While Loops
* Practice for showing Animation Buildup using Arrays


## Learning Objectives
* [Online Textbook reference Chapter 8.6 - 8.10](https://drive.google.com/file/d/18kfdShfj79ISxFTn-iw1ahFTtuFY-KF9/view?usp=sharing)
* Open your local copy you have previously downloaded to yout laptop. If not download above and open locally.
* Practice Motion Tweening, Shaking, Timing
   * Tweening
 
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
            y = startY + ((stopY - startX) * pct);
            pct += step;
        }
        ellipse(x, y, 20, 20);
    }

   ```
   * Shaking
 
   ```javascript
    function setup() {
        createCanvas(600, 400);
    }

    function draw() {
        background(210);
        y2 = random(40, height-40);
        line(20, height/2, width-20, y2);
    }  
   ```

   * Timing

   ```javascript
    var time1 = 2000;
    var time2 = 4000;
    var x = 0;

    function setup() {
        createCanvas(480, 120);
    }

    function draw() {
        var currentTime = millis();
        background(204);
        if (currentTime > time2) {
            x -= 0.5;
            if (x < 0) {
                time1 = millis();
                time2 = time1 + 2000;
            }
        } else if (currentTime > time1) {
            x += 2;
        }
            
        ellipse(x, 60, 90, 90);
    }
   ```



## Week 7 Exercises
* [Exercise - Exploding Bubbles](code/exploding_bubbles.md)
* [Shaking Sticks](code/shakingsticks)