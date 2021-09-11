var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("tomOne.png");
    tomImg2=loadAnimation("tomTwo.png","tomThree.png");
    tomImg3= loadAnimation("tomFour.png");
    jerryImg1=loadAnimation("jerryOne.png");
    jerryImg2= loadAnimation("jerryTwo.png","jerryThree.png");
    jerryImg3=loadAnimation("jerryFour.png");

}

function setup(){
  canvas = createCanvas(1000,800);
  tom=createSprite(870,600,20,20);
  tom.addAnimation("gatoSentado",tomImg1);
  tom.scale=0.2;

  jerry=createSprite(130,600,20,20);
  jerry.addAnimation("ratón",jerryImg1);
  jerry.scale=0.2;
    

}

function draw() {

  background(bg);
  keyPressed();
  if(tom.x-jerry.x<(tom.width-jerry.width)/2){
    tom.velocityX=0;
    jerry.addAnimation("ratónFinal",jerryImg3);
    tom.addAnimation("gatoFinal",tomImg3);
    jerry.changeAnimation("ratónFinal");
    tom.changeAnimation("gatoFinal");
    tom.x=270;
  }
 

  drawSprites();
}


function keyPressed(){
  if(keyDown("left")){
    jerry.addAnimation("ratónMolestando",jerryImg2);
    jerry.changeAnimation("ratónMolestando");
    jerry.frameDelay=25;

    tom.velocityX=-5;
    tom.addAnimation("gatoMoviendose",tomImg2);
    tom.changeAnimation("gatoMoviendose");
  }
    
}