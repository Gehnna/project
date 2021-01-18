var background, backgroundimage
var obstacle, obstacleimage1
var obstacle1, obstacleimage2, obstacleimage3
var obstacle11, obstacle22, obstacle33, obstacle12
var bird, birdimage
var ob1, ob2
function preload(){
 backgroundimage = loadImage("flappy bird background.png") 
 obstacleimage1 = loadImage("fb 1.png")
 obstacleimage2 = loadImage("fb 2.png")
 obstacleimage3 = loadImage("fb 3.png")
 obstacle11 = loadImage("fb 11.png")
 obstacle22 = loadImage("fb 22.png")
 obstacle33 = loadImage("fb 33.png")
 birdimage = loadImage("bird.png")
}

function setup(){
  canvas = createCanvas(400, 400);
  background = createSprite(200, 200, 400, 400)
  bird = createSprite(50, 200, 10, 10)
  bird.addImage(birdimage)
  bird.scale = 0.4
  ob1 = new Group()
  ob2 = new Group()
  // obstacle1 = createSprite(50, 30, 10, 10)
  // obstacle1.addImage("o2", obstacleimage2)
  // obstacle1.scale = 0.2
}


function draw(){
  background.addImage(backgroundimage)
  background.scale = 3
  background.velocityX = -3
  bird.velocityX = 3 
if(background.x<0){
  background.x=background.width/2
}
if(keyIsDown(UP_ARROW)){
  //console.log("high")
  bird.y -= 5
}
if(keyIsDown(DOWN_ARROW)){
  //console.log("high")
  bird.y += 5
}
// if(keyIsDown(RIGHT_ARROW)){
//   //console.log("high")
//   bird.x += 5
//}
if(ob1.isTouching(bird)||ob2.isTouching(bird)){
ground.velocityX = 0
bird.velocityX = 0
ob1.destroyEach()
ob2.destroyEach()
}
if(bird.x>400){
  bird.x=50
  bird.y=200
}
spawnobstacles()
spawnobstacles1()
  drawSprites()
}
function spawnobstacles(){
  if(frameCount%60===0){
    var x1 = random(50, 350)
    obstacle = createSprite(x1, 350, 10, 10)
    // obstacle.addImage(obstacleimage2)
    // obstacle.scale = 0.2
    var b=Math.round(random(1, 3))
    console.log(b)
    switch(b){
      case 1:obstacle.addImage(obstacleimage1)
      obstacle.velocityX = -6
      obstacle.scale = 0.2
      break;
      case 2:obstacle.addImage(obstacleimage2)
      obstacle.velocityX = -6
      obstacle.scale = 0.2
      break;
      case 3:obstacle.addImage(obstacleimage3)
      obstacle.velocityX = -6
      obstacle.scale = 0.2
      break;
    }
    obstacle.lifetime = 150
    ob1.add(obstacle)
  }
}
function spawnobstacles1(){
  if(frameCount%60===0){
    var x1 = random(50, 350)
    obstacle12 = createSprite(x1, 30, 10, 10)
    // obstacle.addImage(obstacleimage2)
    // obstacle.scale = 0.2
    var b=Math.round(random(1, 3))
    console.log(b)
    switch(b){
      case 1:obstacle12.addImage(obstacle11)
      obstacle12.velocityX = -6
      obstacle12.scale = 0.2
      break;
      case 2:obstacle12.addImage(obstacle22)
      obstacle12.velocityX = -6
      obstacle12.scale = 0.2
      break;
      case 3:obstacle12.addImage(obstacle33)
      obstacle12.velocityX = -6
      obstacle12.scale = 0.2
      break;
    }
    obstacle12.lifetime = 150
    ob2.add(obstacle12)
  }
}