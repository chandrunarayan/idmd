##  Modify Moving Ball sketch to do the following:

1.  Adjust dynamically to size of canvas. Also adjust dynamically for a variable containing the radius of ball
1.  Display a custom image of your favorite pet or object filling the background  of the canvas. Image should be properly formatted so that it is not skewed i.e “aspect ratio” of width to height of image should match the “aspect ratio” of the dimensions of the original image.
1.  Stop at each border - do not go beyond. Use the max() and min() functions to do so
1.  React to arrow keys left, right, up and down
1.  Display the Text “Hit Wall!” using a custom font centered on the ball when you hit a border
1.  Submit to Github by end of today!

Initial code for Moving Ball, Displaying Custom Image, and Displaying Text using a Custom Font is below

### Moving Ball Starter Code
```javascript
var x = 100;
var y = 75;
function setup() {
  createCanvas(500, 500);
  background(120);
}
function draw() {
  background(120);
  fill(0, 255, 0);
  ellipse(x, y, 150, 150);
  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      x +=10;
    } else if (keyCode == LEFT_ARROW) {
      x = max(75, x - 10);
    }
  }
}
```
### Displaying Image Starter Code
```javascript
// 400 × 320
var cat;
var catWidth = 400;
var aspectRatio = 320 / 400;
function preload() {
  cat = loadImage("kitty.png");
}
function setup() {
  createCanvas(800, 800);
}
function draw() {
}
function mousePressed() {
  background(255);
  image(cat, mouseX, mouseY, catWidth, catWidth * aspectRatio);
}
```
### Custom Font Starter Code
```javascript
function setup() {
  createCanvas(500, 500);
  textSize(40);
  textFont("Yeon Sung")
}
function draw() {
  background(255);
  text("Hello IDMD Visual Artists!!", 30, 100);
}
```
### Custom Font index.html for font above
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Untitled</title>
    <link href="https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap" rel="stylesheet">
    <script src="libraries/p5.js" type="text/javascript"></script>
    <script src="libraries/p5.dom.js" type="text/javascript"></script>
    <script src="libraries/p5.sound.js" type="text/javascript"></script>
    <script src="sketch.js" type="text/javascript"></script>
    <style> body {padding: 0; margin: 0;} canvas {vertical-align: top;} </style>
  </head>
  <body>
  </body>
</html>
```