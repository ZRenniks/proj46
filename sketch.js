var person, dog
var personImg, dogImg
var ground
var cloudOne, cloudTwo, cloudThree

function preload() {
personImg = loadImage("humanWalk.png");
dogImg = loadImage("dogWalk.png");

}

function setup() {
  createCanvas(800,400);
  person = createSprite(100, 300, 50, 50);
  person.addImage(personImg)
  person.scale = 0.3
  dog = createSprite(320, 350, 50, 50);
  dog.addImage(dogImg)
  dog.scale = 0.1
  ground = createSprite(400,400,800,30)
  // cloudOne = createSprite(800,100)
}
function spawnClouds(){
  if(World.frameCount%60 === 0){
    var cloud = createSprite(800,100,80,20)
    cloud.y = Math.round(random(0,150))
    cloud.velocityX = -3
    cloud.lifeTime = 200
    
  }
  
}
function draw() {


  if (keyDown(UP_ARROW)){
    dog.velocityY = -10
  }
  if (keyDown("space")){
    person.velocityY = -10
  }
dog.velocityY = dog.velocityY + 0.8
person.velocityY = person.velocityY + 0.8


dog.collide(ground)

person.collide(ground)
background("skyblue");  
  spawnClouds();
  drawSprites();
}