function setup() {
  createCanvas(600, 400);
  noLoop();
}

function draw() {
  background(135, 206, 235);
  
  noStroke();
  fill(255);
  ellipse(100, 80, 60, 40); ellipse(130, 80, 50, 50); ellipse(160, 80, 60, 40);
  ellipse(450, 120, 80, 50); ellipse(480, 120, 60, 60); ellipse(510, 120, 80, 50);
  
  fill(50, 180, 100);
  rect(0, 300, 600, 100);

  let x = 300;
  let y = 200;

  fill(60, 85, 60);
  arc(x, y + 120, 280, 160, 0, PI);
  
  fill(40, 60, 40);
  circle(x - 80, y + 130, 20); circle(x + 50, y + 150, 15);
  fill(90, 70, 40);
  circle(x + 90, y + 135, 25); circle(x - 30, y + 160, 18);

  fill(255, 224, 189);
  ellipse(x - 90, y, 40, 60);
  ellipse(x + 90, y, 40, 60);
  ellipse(x, y, 180, 220);

  fill(40);
  arc(x, y - 60, 185, 110, PI + 0.1, TWO_PI - 0.1, CHORD);

  stroke(0);
  strokeWeight(5);
  noFill();
  rect(x - 70, y - 25, 60, 50, 15);
  rect(x + 10, y - 25, 60, 50, 15);
  line(x - 10, y, x + 10, y);

  noStroke();
  fill(40);
  circle(x - 40, y, 12);
  circle(x + 40, y, 12);

  fill(255, 150, 150, 150);
  circle(x - 55, y + 40, 25);
  circle(x + 55, y + 40, 25);

  fill(255, 120, 120);
  ellipse(x, y + 75, 32, 22);
  ellipse(x, y + 85, 42, 30);
  
  stroke(150, 50, 50);
  strokeWeight(2);
  line(x - 12, y + 80, x + 12, y + 80);
}