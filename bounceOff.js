var movingrect;
var fixedrect;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 100, 80, 50);
  movingrect=createSprite(400,700,50,80);

  fixedrect.shapeColor="purple";
  movingrect.shapeColor="purple";
  
  fixedrect.debug=true;
  movingrect.debug=true;
  
  fixedrect.velocityY=+5;
  movingrect.velocityY=-5
}

function draw() {
  background(0);  
  //movingrect.x=mouseX;
  //movingrect.y=mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2)
{
    movingrect.velocityX=movingrect.velocityX*-1
    fixedrect.velocityX=fixedrect.velocityX*-1
}
 if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
 fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){   
      
    movingrect.velocityY=movingrect.velocityY*-1
    fixedrect.velocityY=fixedrect.velocityY*-1
    
  }
  

  

  drawSprites();
}
