var player,playerImg;
var coin ,coinImage, obstacle, obstacleImage;
var scoresGroup, obstacleGroup;
var ground;
var score = 0;

function preload(){
  
 
  coinImage = loadImage("coin.jpg");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
  player = createSprite(100,300);
//  monkey.addAnimation("running",monkey_running);
 // monkey.scale = 0.1;
  
  ground = createSprite(1000,600,1400,20);
  ground.velocityX = -6;
  

  scoresGroup = createGroup();
  obstacleGroup = createGroup();
  
  
  
}


function draw() {
  createCanvas(1340,630);
  background("skyblue");
  
  if(player.isTouching(scoresGroup)){
  score = score + 1 ;
  }
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score,160,50)
  
  
  
  if(keyWentDown("space") || player.y > 300){
    player.velocityY = -8;
  }
  
  player.velocityY = player.velocityY + 1;
  
  if(ground.width/2){
     ground.x = 650;
  }

  player.collide(ground);
  
  scores();
  obstacles();
  
 
  drawSprites();
}

function scores(){
 if(frameCount % 80 === 0){
   coin = createSprite(400,Math.round(random(120,200)));
   coin.addImage(coinImage);
   coin.scale = 0.1;
   coin.velocityX = -6;
   coin.lifetime = 100;
   
   scoresGroup.add(coin);
 }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(400,300);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -8;
    obstacle.lifetime = 100;
    
    obstacleGroup.add(obstacle);
  }
  
}



