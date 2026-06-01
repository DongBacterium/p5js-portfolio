function setup() {
  createCanvas(600, 400);
  saveGif('space_art_subtle', 5);
}

function draw() {
  background(0);
  noStroke();

  let t = frameCount * 0.02;
  let sizeOsc = sin(t); 

  // 밝혀진 우주 배경 (은은한 호흡 효과)
  fill("#00003A"); 
  ellipse(300, 200, 700 + sizeOsc * 5, 500 + sizeOsc * 5);

  fill("#483D8B"); 
  ellipse(300, 200, 500 + sizeOsc * 3, 350 + sizeOsc * 3);


  // 다양한 도형으로 혼돈 표현 (움직임 범위를 대폭 줄여 잔잔한 부유감 연출)
  // 1. 슬레이트 그레이 (미세하게 좌우로 부유하는 삼각형)
  fill("#708090"); 
  let drift1 = sin(t * 0.5) * 4;
  triangle(40 + drift1, 60, 100 + drift1, 130, 20 + drift1, 150);

  // 2. 라이트 스틸 블루 (크기가 부드럽게 변하는 사각형)
  fill("#B0C4DE"); 
  rect(500, 80, 70 + cos(t * 0.5) * 6, 30 + sin(t * 0.5) * 3);

  // 3. 그레이 (정점이 미세하게 왜곡되는 삼각형)
  fill("#808080"); 
  let warp1 = cos(t * 0.4) * 3;
  triangle(450 + warp1, 300 - warp1, 500, 350 + warp1, 490 - warp1, 250);

  // 4. 딤 그레이 (물결치듯 살짝 찌러지는 사각형)
  fill("#696969"); 
  let deform = sin(t * 0.5) * 2;
  quad(100, 290, 130 + deform, 320, 170, 330 + deform, 140, 310);

  // 5. 라이트 스틸 블루 (상하로 천천히 흔들리는 사각형)
  fill("#B0C4DE"); 
  let bob = cos(t * 0.4) * 4;
  quad(90, 200 + bob, 100, 230 + bob, 110, 130 + bob, 120, 200 + bob);

  // 6. 슬레이트 블루 (색상이 은은하게 감도는 삼각형)
  let cBase1 = color("#6A5ACD");
  let cDark1 = color("#3A2A8D");
  fill(lerpColor(cBase1, cDark1, map(sin(t * 0.5), -1, 1, 0.2, 0.8)));
  triangle(200, 150, 250, 250, 200, 250);

  // 7. 라이트 그레이 (좌우로 살짝 진동하는 사각형)
  fill("#D3D3D3"); 
  let swing = sin(t * 0.6) * 3;
  quad(300 + swing, 20, 290 - swing, 50, 320 + swing, 30, 350 - swing, 20);

  // 8. 실버 (좁은 타원 궤도를 도는 원)
  fill("#C0C0C0"); 
  ellipse(520 + cos(t * 0.4) * 6, 200 + sin(t * 0.4) * 4, 20, 20);


  // 중심의 빛 (의미를 부여하는 존재 - 시선 집중을 위해 기존 동적 효과 유지)
  let glowMap = map(sin(t * 2.5), -1, 1, 0, 1);
  
  let c1 = color("#FFD166");
  let c1Bright = color("#FFF3B0");
  fill(lerpColor(c1, c1Bright, glowMap));
  circle(300, 200, 130 + sizeOsc * 15);

  let c2 = color("#F4A460");
  let c2Bright = color("#FFC493");
  fill(lerpColor(c2, c2Bright, glowMap));
  circle(300, 200, 100 + sizeOsc * 10);

  let c3 = color("#FFEBCD");
  let c3Bright = color("#FFFFFF");
  fill(lerpColor(c3, c3Bright, glowMap));
  circle(300, 200, 60 + sizeOsc * 5);


  // 빛이 퍼져나가는 모습
  noFill();
  strokeWeight(2);

  let wave1 = (millis() * 0.05) % 180;
  stroke("#FFA500");
  circle(300, 200, 120 + wave1);

  let wave2 = ((millis() * 0.05) + 60) % 180;
  stroke("#FF8C00");
  circle(300, 200, 120 + wave2);

  let wave3 = ((millis() * 0.05) + 120) % 180;
  stroke("#FF6347");
  circle(300, 200, 120 + wave3);


  // 우주에 떠있는 작은 별 (깜빡임 세기와 속도를 늦춰 정신없는 느낌 제거)
  noStroke();
  let starAlpha = map(sin(t * 0.8), -1, 1, 120, 255); // 최소 투명도를 높여 안정감 부여
  fill(255, starAlpha);
  
  circle(100, 50, 3);
  circle(200, 100, 3);
  circle(400, 60, 3);
  circle(550, 150, 3);
  circle(50, 350, 3);
  circle(550, 350, 3);
}