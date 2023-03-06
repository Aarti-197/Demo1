var box;

function setup() {
  createCanvas(400, 400);

  box = createSprite(100,100,30,30);
}

function draw() {
  background(220);

  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x +10;
  }

  drawSprites();
}