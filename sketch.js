var ground
var trex
var trexanim
var groundimage
var cloud
var cloudimage
var obstacle
var ob1
var ob2
var ob3
var ob4
var ob5
var ob6



function preload() {
  
  trexanim=loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundimage=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
  ob1=loadImage("obstacle1.png")
  ob2=loadImage("obstacle2.png")
  ob3=loadImage("obstacle3.png")
  ob4=loadImage("obstacle4.png")
  ob5=loadImage("obstacle5.png")
  ob6=loadImage("obstacle6.png")
  
  
  
  
  
}


function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,10,10);
  trex.addAnimation("running", trexanim)
  trex.scale=0.5;
  ground = createSprite(300,195,600,10)
  ground.addImage("ground", groundimage)
  ground.velocityX=-6
  
 
  
  
}


function draw() {
  background("white");
  
  
  if(keyDown("space") && trex.y >= 160){
    trex.velocityY = -9 ;
    }
  
  trex.velocityY=trex.velocityY+0.5;
  if (ground.x < 0){
    ground.x = ground.width/2;
    }
  
  trex.collide(ground);
  
  clouds();
  spawnObstacles();  
  
  drawSprites();
}

function clouds() {
  
  if(World.frameCount % 60 === 0) {
  var cloud = createSprite(400, 200, 20, 10);
  cloud.addImage("clouds", cloudimage)
  cloud.depth = trex.depth
  trex.depth += 1;
  cloud.scale=1.5;
  cloud.y=random(0,60);
  cloud.velocityX = -3;
  //clouds.add(cloud);
  }
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
  obstacle = createSprite(600,180,20,30);
  var x = Math.round(random(1,6));
  obstacle.velocityX = -6;
  obstacle.scale = 0.5;
  
  switch(x) {
    case 1: obstacle.addImage(ob1);
    break;
    case 2: obstacle.addImage(ob2);
    break;
    case 3:obstacle.addImage(ob3);
    break;
    case4 : obstacle.addImage(ob4);
    break;
    case5 : obstacle.addImage(ob5);
    break;
    case6 : obstacle.addImage(ob6);
    break;
    default: 
    break;
  }
  }
}