//circle variables
var x = 50;
var y = 50;
//mouse obstacle variables
var x1 = 50;
var y1 = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  //xy coord
  fill(255, 255, 255);
  textSize(12);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);

  //exit
  fill(0, 0, 0);
  rect(367, 20, 30, 50);
  stroke(255, 0, 0);
  fill(255, 0, 0);
  textSize(15);
  text('EXIT', 365, 15);

  //circle (rip off pacman :)
  noStroke();
  fill(255, 255, 100);
  circle(x, y, 50);

  //circle movement

  if (keyIsDown(68)) {
    x += 5;
  }
  else if (keyIsDown(65)) {
    x -= 5;
  }
  else if (keyIsDown(87)) {
    y -= 5;
  }
  else if (keyIsDown(83)) {
    y += 5;
  }

  //ghost 1
  fill(255, 255, 255);
  circle(340, 150, 50);

  //Obstacle wall shape
  fill(0, 0, 0);
  rect(200, 0, 30, 200);

  //ghost 2 -appear on click
  fill(255, 255, 255);
  circle(x1, y1, 50);

  //winning stuff
  if (x >= 365 && y <= 70) {
    textSize(40);
    fill(0, 255, 0);
    text('WINNER WINNER', 50, 200);


  }


}
//ghost 2 function
function mousePressed() {
  x1 = mouseX;
  y1 = mouseY;
}


