var S = 15;
var x, y;
var a = 0.6;
var b = 1;
var dt = 0.08;

function setup() {
  createCanvas(400, 400);
  x = random(-S, S);
  y = random(-S, S);
}

function draw() {
  fill(100, 150, 40);

  if (mouseIsPressed) {
    x = (mousex - width / 2) / S;
    y = (mouseY - height / 2) / S;

  }
  StepDE(dt);
  drawParticle();


}

function StepDE(dt) {
  var dx = sin(a * y) * dt;
  var dy = cos(b * x) * dt;

  x += dx;
  y += dy;
}

function drawParticle() {
  push();
  translate(width / 2, height / 2, );
  scale(width/24,height/24);
  strokeWeight(0.1);
  ellipse(x,y,0.5,0.5);
  pop();


}

}
