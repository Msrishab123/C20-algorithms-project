var TomCat, TomCatI1, TomCatI2, TomCatAnm;
var MouseJerry, MouseJerryI1, MouseJerryI2, MouseJerryAnm;
var Garden,GardenI;
var canvas;

function preload() {
GardenI = loadImage("images/garden.png")
TomcatI1 = loadImage("images/cat1.png")
TomCatI2 = loadImage("images/cat4.png");
MouseJerryI1 =loadImage("images/mouse1.png");
MouseJerryI2 = loadImage("images/mouse4.png");
TomCatAnm = loadAnimation("images/cat2.png", "images/cat3.png");
MouseJerryAnm = loadAnimation("images/mouse2.png", "images/mouse3.png");

}

function setup(){
 canvas = createCanvas(400,400);
    
    Garden = createSprite(200,200);
    Garden.addImage("GardenImage", GardenI);
    
    TomCat = createSprite(200,200,50,50);
    TomCat.addImage("CatImage", TomCatI1);

    MouseJerry = createSprite (150,250,50,50);
    MouseJerry.addImage("MouseImage", MouseJerryI1);
}

function draw() {

    background(255);

 if(TomCat.x  - MouseJerry.x < (TomCat.width - MouseJerry.width)/2){
    Tomcat.velocityX = 0;
    TomCat.addImage ("Cat Image", TomCatI2);
    MouseJerry.addImage ("MouseImage", MouseJerryI2);
}    

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW){
 TomCat.velocityX = -5;
 if (keyCode === LEFT_ARROW){
    TomCat.velocityX = -5;
    TomCat.changeAnimation("cat running", TomCatAnm)
    MouseJerry.changeAnimation("mouse teasing", MouseJerryAnm);
   }
   
}}
