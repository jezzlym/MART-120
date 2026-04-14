var txtSz = 30;
var movement1 = 2;
var movement2 = 3;
var movement3 = 0.5;
var movement4 = 1;
var movement5 = 0.1;
var movement6 = 0.1;
var lefteyeX = 160;
var righteyeX = 240;
var mouthY = 265;
var hairY = 165;
var pointX = 225;
var pointY = 245;

var txtCount = 0;
var txtszDirection = 2;

function setup() {
  createCanvas(400, 400);
  movement3 = floor(random() * 10) + 1;
  movement1 = floor(random() * 10) + 1;
}

function draw() {
  background(181, 69, 86);

  fill(255, 255, 255);
  textSize(12);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);

  //hairbg

  noStroke();
  fill(0, 0, 0);
  rect(120, hairY, 160, 150);

  if (hairY >= 170 || hairY <= 155) {
    movement4 *= -1;
  }

  hairY += movement4;


  //skin base
  fill(210, 180, 140);
  noStroke();
  ellipse(200, 200, 160, 190);
  ellipse(120, 210, 50, 50);
  ellipse(280, 210, 50, 50);
  rect(175, 280, 50, 50);
  circle(200, 330, 50);
  ellipse(200, 400, 200, 190)

  //clothes
  stroke(255, 255, 250)
  fill(255, 255, 250)
  square(140, 355, 120)
  line(140, 355, 140, 323)
  line(260, 355, 260, 323)

  //eyes
  fill(255, 255, 250)
  stroke(0, 0, 0)
  strokeWeight(3)
  circle(160, 200, 40)
  circle(240, 200, 40)

  //pupils
  noStroke()
  fill(0, 0, 0)
  circle(lefteyeX, 200, 20)
  circle(righteyeX, 200, 20)
  fill(210, 180, 140)
  rect(135, 150, 130, 45)

  if (lefteyeX >= 170 || lefteyeX <= 150) {
    movement1 *= -1;
  }

  lefteyeX += movement1;

  if (righteyeX >= 250 || righteyeX <= 230) {
    movement2 *= -1;
  }
  righteyeX += movement2;

  //lashes
  strokeWeight(3)
  stroke(0, 0, 0)
  line(160, 220, 160, 225)
  line(240, 220, 240, 225)
  line(140, 210, 135, 213)
  line(260, 210, 265, 213)
  line(180, 210, 185, 213)
  line(220, 210, 215, 213)

  //MOLE
  point(pointX, pointY)
  if (pointX >= 235 || pointX <= 215) {
    movement5 *= -1;
  }

  pointX += movement5;

  if (pointY >= 255 || pointY <= 235) {
    movement6 *= -1;
  }

  pointY += movement6;

  line(135, 195, 180, 195)
  line(220, 195, 265, 195)


  //nose mouth
  noStroke()
  fill(175, 110, 81)
  triangle(200, 245, 200, 225, 210, 245)


  stroke(0, 0, 0)
  strokeWeight(2)
  line(200, mouthY, 215, mouthY)

  if (mouthY >= 270 || mouthY <= 255) {
    movement3 *= -1;
  }

  mouthY += movement3;

  //hairfront
  noStroke()
  fill(0, 0, 0)
  arc(200, 185, 160, 160, PI, 0)
  fill(210, 180, 140);
  triangle(120, 185, 200, 145, 280, 185)

  //title
  fill(255, 255, 255)
  textSize(txtSz)
  txtSz += txtszDirection;
  txtCount++;
  if (txtCount > 5) {
    txtszDirection *= -1;
    txtCount = 0;
  }
  text('Jesslyn', 145, 50)



}

