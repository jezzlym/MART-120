//circle variables
var x = 50;
var y = 50;
//mouse obstacle variables
var x1 = 50;
var y1 = 50;
//key binding variables
var s = 83;
var w = 87;
var a = 65;
var d = 68;
//enemy variables
var enemyX = 30;
var enemyY = 50;
var enemyXspeed;
var enemyYspeed;

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
  circle(x, y, 50);
}

//ghost 2 create function
function ghostCreate() {
  noStroke();
  fill(255, 255, 255);
  circle(x1, y1, 50);
}

//ghost 2 onclick
function mousePressed() {
  x1 = mouseX;
  y1 = mouseY;
}

//winning function
function winner() {
  if (x >= 365 && y <= 70) {
    textSize(40);
    fill(0, 255, 0);
    text('WINNER WINNER', 50, 200);
  }

}

//circle movement
function movement() {
  if (keyIsDown(d)) {
    x += 5;
  }
  else if (keyIsDown(a)) {
    x -= 5;
  }
  else if (keyIsDown(w)) {
    y -= 5;
  }
  else if (keyIsDown(s)) {
    y += 5;
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
  circle(enemyX, enemyY, 50);
  enemyX += enemyXspeed;
  enemyY += enemyYspeed;
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
  if (enemyX > height) {
    enemyX = 0;
  }
  if (enemyX < 0) {
    enemyX = height;
  }
  if (enemyY > width) {
    enemyY = 0;
  }
  if (enemyY < 0) {
    enemyY = width;
  }
}


