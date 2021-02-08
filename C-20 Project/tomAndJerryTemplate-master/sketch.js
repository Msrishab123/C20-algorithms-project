var TomCat, TomCatI1, TomCatI2, TomCatAnm;
var MouseJerry, MouseJerryI1, MouseJerryI2, MouseJerryAnm;
var Garden,GardenI;

function preload() {
GardenI = loadImage("garden.png")
TomcatI1 = loadImage("cat1.png")
TomCatI2 = loadImage("cat4.png");
MouseJerryI1 =loadImage("mouse1.png");
MouseJerryI2 = loadImage("mouse4.png");
TomCatAnm = loadAnimation("cat2.png", "cat3.png");
MouseJerryAnm = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(400,400);
    
    Garden = createSprite(1000,800);
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
    MouseJerry.addImage ("MouseImage", MouseJerryI2)
}    

    drawSprites();
}


function keyPressed(){

if (keyCode === LEFT_ARROW){
 TomCat.velocityX = -5;
 TomCat.changeAnimation("cat running", TomCatAnm)
}}
