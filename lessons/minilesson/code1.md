### While reading this example remember the graphics canvas coordinates are defined as follows:

![alt text](canvas_coords.svg)

### Computer Graphics coordinate system and shapes that we will use

![alt text](graphics_coords.svg?width=600)

### The graphics canvas in the code below has width of 600 pixels and height of 200 pixels

```javascript
// Dynamic Sticks
// Learn to code visually!
// Anything following "//" are help comments !!

let loc = 0;  // set up a variable pixel location

function setup() {  // this function is run once.   
    // canvas size in pixels
    // width is set to 600, and height to 200
    createCanvas(600, 200); 

    // set the background color
    background("pink");  
    
    // limit the number of frames per second
    frameRate(10);

     // draw smooth lines
    smooth(); 

    // UNCOMMENT LINE BELOW TO SAY HELLO!
    //sayHello();
} 

function draw() {  // this function is run repeatedly.  
  // UNCOMMENT ONE LINE BELOW TO SEE WHAT HAPPENS!
  //drawSticks1();

  // UNCOMMENT ONE LINE BELOW TO RUN YOUR CUSTOM CODE!
  //drawSticks2();   
  
  // dynamically move location for next draw loop
  moveLoc();
}

function sayHello() {
    // SAY HELLO TO YOUR FRIENDS - MODIFY TEXT BELOW!! 
    // use input parameters: quoted text, x loc & y loc
    text("Hello friends!", 20, height/2);
}

function drawSticks1() {
    // set the thickness of the line. 
    strokeWeight(5);
    // set the color using input parameters:
    // shades of red, green, blue, transparency in order
    // random(255) gives a random number 0 to 255 for each color
    stroke(random(255), random(255), random(255), 100);
    
    // draw the line using input parameters:
    // 2 pairs of points: x1, y1, x2, y2 
    line(loc, 0, width/2, height); 
}

function drawSticks2() {
  // CAN YOU DRAW ANOTHER SET OF LINES FROM BOTTOM TO TOP?
  // OR FROM LEFT TO RIGHT ??
  // YOU WILL NEED COPY CONTENTS OF drawSticks1() FUNCTION 
  // BETWEEN OUTER BRACKETS BELOW AND MODIFY JUST 
  // THE "line" COMMAND!
  
}

function moveLoc() {
    // move loc over by 40 pixels
    // reset to 0 if width of canvas is exceeded!
    if (loc < width) {
        loc = loc + 40;
    } else {
        loc = 0; 
    }
}
```