var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1200,400);

  fixedRect = createSprite(900,200,40,400);
  fixedRect.shapeColor = "brown";

  movingRect = createSprite(300,200,50,20);
  movingRect.shapeColor = "yellow";
  
}

function draw() {
  background(0); 

  movingRect.velocityX = 
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}