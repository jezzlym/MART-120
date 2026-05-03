
//key binding variables
var s = 83;
var w = 87;
var a = 65;
var d = 68;
//enemy variables
var enemyXspeed;
var enemyYspeed;
//varibles array
var myX = [50,50,30];
var myY = [50,50,50];

function setup() {
  createCanvas(400, 400);
  //enemy speed
  enemyXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  enemyYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

}

function draw() {
  background(50);

  drawBorders(10);

  drawEnemy();

  checkBounds();

  //xy coord
  fill(255, 255, 255);
  textSize(12);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);

  makePlayer();

  movement();

  drawObstacle();
  winner();
  ghostCreate();
  exit();
}
//end of draw function

//create player
function makePlayer() {
  noStroke();
  fill(255, 255, 100);
  circle(myX[0], myY[0], 50);
}

//ghost 2 create function
function ghostCreate() {
  noStroke();
  fill(255, 255, 255);
  circle(myX[1], myY[1], 50);
}

//ghost 2 onclick
function mousePressed() {
  myX[1] = mouseX;
  myY[1] = mouseY;
}

//winning function
function winner() {
  if (myX[0] >= 365 && myY[0] <= 70) {
    textSize(40);
    fill(0, 255, 0);
    text('WINNER WINNER', 50, 200);
  }

}

//circle movement
function movement() {
  if (keyIsDown(d)) {
    myX[0] += 5;
  }
  else if (keyIsDown(a)) {
    myX[0] -= 5;
  }
  else if (keyIsDown(w)) {
    myY[0] -= 5;
  }
  else if (keyIsDown(s)) {
    myY[0] += 5;
  }
}

//draw obstacles
function drawObstacle() {
  //Obstacle wall shape
  fill(0, 0, 0);
  rect(200, 0, 30, 200);
}


//enemy spawn + movement
function drawEnemy() {
  noStroke();
  fill(255, 0, 0);
  circle(myX[2], myY[2], 50);
  myX[2] += enemyXspeed;
  myY[2] += enemyYspeed;
}


function exit() {
  //exit
  fill(0, 0, 0);
  rect(367, 20, 30, 50);
  stroke(255, 0, 0);
  fill(255, 0, 0);
  textSize(15);
  text('EXIT', 365, 15);
}

function drawBorders(thickness) {
  fill(0, 0, 0);
  noStroke();
  rect(0, 0, width, thickness);
  rect(0, 0, thickness, height);
  rect(0, height - thickness, width, thickness);
  rect(width - thickness, 0, thickness, height);

}

function checkBounds() {
  if (myX[2] > height) {
    myX[2] = 0;
  }
  if (myX[2] < 0) {
    myX[2] = height;
  }
  if (myY[2] > width) {
    myY[2] = 0;
  }
  if (myY[2] < 0) {
    myY[2] = width;
  }
}


