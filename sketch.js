var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var backgroundImg;

var flake = [];



function preload(){
  backgroundImg = loadImage("snow1.jpg");
  flakeImg = loadImage("snow4.webp");
  flakeIMg = loadImage("snow5.webp");
}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

 //snowflake1=createSprite((random(10,790)),100,50,50);
  //snowflake1.addImage(flakeImg);
  //snowflake1.scale = 0.08;
  //snowflake1.velocityY = (6);

  //snowflake2=createSprite((random(05,790)),100,50,50);
  //snowflake2.addImage(flakeIMg);
  //snowflake2.scale = 0.08;
  //snowflake2.velocityY = (6);

  for (var j = 75; j <=width; j=j+50) { 
    flake.push(new flake1(j,75));
    flake.addImage("flakeImg");
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    flake.push(new flake1(j,175));
    flake.addImage("flakeImg");

  }

  //create 3rd row of plinko objects
 for (var j = 75; j <=width; j=j+50)
  { 
    flake.push(new flake1(j,275));
    flake.addImage("flakeImg");

}

  
  //create 4th row of plinko objects
 for (var j = 50; j <=width-10; j=j+50) 
 {
  flake.push(new flake1(j,375));
  flake.addImage("flakeImg");

 }
 

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  drawSprites();
}
