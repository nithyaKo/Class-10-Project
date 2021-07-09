
var seaImg
var shipImg1

var sea
var ship

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png")



}

function setup(){
  createCanvas(400,400);
 background ("blue")
 

  sea = createSprite(400,200)
  ship = createSprite(130,200,30,30)

  sea.addImage(seaImg)
  ship.addAnimation("movingship",shipImg1)
  
  sea.scale=.3
  ship.scale=.25

  sea.velocityX=-3
}

function draw() {
  background("blue");
 
  if (sea.x < 0){
    sea.x = sea.width/8;
    console.log(sea.x) 
    console.log(sea.width/8)
  }
    

    drawSprites()
  }