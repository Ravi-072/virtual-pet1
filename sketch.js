var dog1,dog2,sadDog,happyDog;
var database;
var foodS,foodStock;

function preload(){
sadDog = loadImage("dogImg.png");
happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
	createCanvas(1000,600);

var dog1 = createSprite(800,500,150,150);
 dog1.addImage(sadDog);
 dog1.scale = 0.25;
}

function draw() {  
background("green");

if(keyWentDown(UP_ARROW)){
  var dog2 = createSprite(800,500,150,150);
  dog2.addImage(happyDog);
  dog2.scale = 0.25
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  textSize(13);
  text("note : press up_arrow key to feed milk to jerry ",130,10,300,20);

}