//Create variables here
var dog1_img, dog2_img;
var dog, happyDog; 
var database;
var foodS, foodStock;
function preload()
{
  dog1_img=loadImage("images/dogImg.png")
  dog2_img=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog=createSprite(250,250,50,50)
  dog.addImage(dog1_img)
  dog.scale=0.2

  database=firebase.database()

  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dog2_img)
  }

  drawSprites();
  //add styles here
textSize(15)
fill("white")
stroke(10)
text("NOTE: PRESS UP_ARROW KEY TO FEED DRAGO MILK!", 50,20)

}

function readStock(data){
  foods=data.val()
}

function writeStock(x){

if(x<=0){
  x=0
}
else{
  x=x-1
}

database.ref('/').update({
  food:x
})
}

