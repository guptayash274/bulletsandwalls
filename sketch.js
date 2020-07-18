var bullet;
var wall;

var speed,thickness;
var weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  speed=random(55,90);
  weight=random(55,90);
  thickness = random(22,83)

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  if(bullet.x - wall.x < wall.width/2 + bullet.width/2 && wall.x - bullet.x < bullet.width/2 +wall.width/2 
    &&bullet.y - wall.y < wall.height/2 + bullet.height/2 && wall.y - bullet.y < bullet.height/2 +wall.height/2){
  wall.shapeColor = "red"
  bullet.shapeColor = "red"
    }
    else{
    bullet.shapeColor = "green"
    wall.shapeColor = "green"

    }
  drawSprites();
}