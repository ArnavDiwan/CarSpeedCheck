var border1, border2, border3;
var wall1, wall2, wall3, wall4;
var car1, car2, car3, car4;
var speed1, weight1;
var speed2, weight2;
var speed3, weight3;
var speed4, weight4;

function setup() {
  createCanvas(1600,400);
  speed1 = random(55, 90);
  weight1 = random(400, 1500);

  speed2 = random(55, 90);
  weight2 = random(400, 1500);

  speed3 = random(55, 90);
  weight3 = random(400, 1500);

  speed4 = random(55, 90);
  weight4 = random(400, 1500);

  car1 = createSprite(50, 50, 30, 50);
  car2 = createSprite(50, 150, 30, 50);
  car3 = createSprite(50, 250, 30, 50);
  car4 = createSprite(50, 350, 30, 50);

  border1 = createSprite(800, 100, 1600, 20);
  border2 = createSprite(800, 200, 1600, 20);
  border3 = createSprite(800, 300, 1600, 20);

  wall1 = createSprite(1500, 50, 50, 50);
  wall2 = createSprite(1500, 150, 50, 50);
  wall3 = createSprite(1500, 250, 50, 50);
  wall4 = createSprite(1500, 350, 50, 50);

  car1.velocityX = speed1;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;

  
  if (keyDown ("space")){

    car1.velocityX = 0;
    car2.velocityX = 0;
    car3.velocityX = 0;
    car4.velocityX = 0;


  }

  


}

function draw() {
  background(0, 0, 0); 
  
  
  if(wall1.x - car1.x < (car1.width + wall1.width) /2){

    
    var deformation1 = 0.5 * weight1 * speed1 * speed1/22509
    
    if (deformation1 > 180){

      wall1.shapeColor = color(155,0,0);

    }
    
    if (deformation1 < 180 && deformation1 > 100){

      wall1.shapeColor = color(230,230,0);

    }

    if(deformation1 < 100){

      wall1.shapeColor=color(0,255,0);

    }

  }

  if(wall2.x - car2.x < (car2.width + wall2.width) /2){

   
    var deformation2 = 0.5 * weight2 * speed2 * speed2/22509
    
    if (deformation2 > 180){

      wall2.shapeColor = color(155,0,0);

    }
    
    if (deformation2 < 180 && deformation2 > 100){

      wall2.shapeColor = color(230,230,0);

    }

    if(deformation2 < 100){

      wall2.shapeColor=color(0,255,0);

    }

  }

  if(wall3.x - car3.x < (car3.width + wall3.width) /2){

   
    var deformation3 = 0.5 * weight3 * speed3 * speed3/22509
    
    if (deformation3 > 180){

      wall3.shapeColor = color(155,0,0);

    }
    
    if (deformation3 < 180 && deformation3 > 100){

      wall3.shapeColor = color(230,230,0);

    }

    if(deformation3 < 100){

      wall3.shapeColor=color(0,255,0);

    }

  }

  if(wall4.x - car4.x < (car4.width + wall4.width) /2){

   
    var deformation4 = 0.5 * weight4 * speed4 * speed2/22509
    
    if (deformation4 > 180){

      wall4.shapeColor = color(155,0,0);

    }
    
    if (deformation4 < 180 && deformation4 > 100){

      wall4.shapeColor = color(230,230,0);

    }

    if(deformation4 < 100){

      wall4.shapeColor=color(0,255,0);

    }

  }

  

  


  drawSprites();
}