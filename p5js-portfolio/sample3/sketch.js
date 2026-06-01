let x = 300, y = 200;
let cloud1X = 100, cloud2X = 450;
let hatYOffset = 0; 
let handAngle = 0; 
let isSaving = false;
let startTime = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(135, 206, 235);
  
  // 1. 구름 이동 (모양 복구: 왼쪽, 중앙, 오른쪽 타원)
  noStroke(); fill(255, 240);
  cloud1X = (cloud1X + 0.6) % (width + 150);
  cloud2X = (cloud2X - 0.4 < -150) ? width + 150 : cloud2X - 0.4;
  
  // 구름 1
  ellipse(cloud1X, 70, 60, 40); ellipse(cloud1X + 25, 70, 50, 50); ellipse(cloud1X + 50, 70, 60, 40);
  // 구름 2
  ellipse(cloud2X, 110, 80, 50); ellipse(cloud2X + 35, 110, 65, 65); ellipse(cloud2X + 70, 110, 80, 50);
  
  fill(50, 180, 100); rect(0, 300, 600, 100); // 바닥

  // 2. 군복 몸체
  fill(45, 65, 45); arc(x, y + 120, 280, 160, 0, PI);
  fill(30, 45, 30); circle(x - 70, y + 130, 25); circle(x + 40, y + 150, 20);
  fill(85, 75, 55); circle(x + 80, y + 135, 30); circle(x - 20, y + 160, 18);

  // 3. 마우스 클릭: 손 인사
  push();
  translate(x + 110, y + 100);
  if (mouseIsPressed) handAngle = sin(frameCount * 0.2) * 0.5;
  else handAngle = lerp(handAngle, 0, 0.1);
  rotate(handAngle);
  fill(255, 224, 189); rect(-15, -45, 30, 50, 10); 
  pop();

  // 4. 얼굴 및 안경 (볼터치 농도 조절)
  fill(255, 224, 189);
  ellipse(x - 90, y, 40, 60); ellipse(x + 90, y, 40, 60);
  ellipse(x, y, 180, 220);
  
  // 연해진 볼터치
  fill(255, 150, 150, 100); 
  circle(x - 55, y + 40, 20); circle(x + 55, y + 40, 20);

  fill(40); arc(x, y - 60, 185, 110, PI + 0.1, TWO_PI - 0.1, CHORD);
  stroke(0); strokeWeight(5); noFill();
  rect(x - 70, y - 25, 60, 50, 15); rect(x + 10, y - 25, 60, 50, 15);
  line(x - 10, y, x + 10, y);
  
  // 눈동자
  noStroke(); fill(40);
  circle(x - 40 + map(mouseX, 0, width, -8, 8), y + map(mouseY, 0, height, -5, 5), 11);
  circle(x + 40 + map(mouseX, 0, width, -8, 8), y + map(mouseY, 0, height, -5, 5), 11);

  // 5. 입 모양 (크기 하향 조절)
  fill(255, 120, 120);
  let m = (keyIsPressed && keyCode === UP_ARROW) ? 8 : 0;
  ellipse(x, y + 80, 30, 18 + m);

  // 6. 전투모 및 상병 계급장
  if (keyIsPressed && keyCode === DOWN_ARROW) hatYOffset = lerp(hatYOffset, -50, 0.1);
  else hatYOffset = lerp(hatYOffset, 0, 0.1);
  
  push();
  translate(x, y - 110 + hatYOffset);
  fill(45, 65, 45); rect(-85, -40, 170, 50, 10, 10, 0, 0); // 모자 본체
  fill(30, 45, 30); rect(-95, -5, 190, 12, 5); // 챙
  
  // 상병 계급장 (작대기 3개)
  stroke(220); strokeWeight(2);
  line(-15, -25, 15, -25);
  line(-15, -20, 15, -20);
  line(-15, -15, 15, -15);
  pop();

  if (isSaving) {
    fill(255, 0, 0); noStroke(); textAlign(LEFT);
    text("REC: " + nf((millis()-startTime)/1000, 1, 1) + "s / 10.0s", 20, 30);
  }
}

function keyPressed() {
  if ((key === 'f' || key === 'F') && !isSaving) {
    isSaving = true;
    startTime = millis();
    saveGif('soldier_rank_3', 10); 
    setTimeout(() => { isSaving = false; }, 10000);
  }
}