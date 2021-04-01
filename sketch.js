
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var box, box1, box2, box3;
var ball;

function preload()
{
	boxImg = loadImage("dustbingreen.png");
	ballImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1500, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(225, 10);
	box1 = new Box1(10, 275);
	box2 = new Box2(10, 275);

	ball = new Ball(100, 250, 100);

	box3 = createSprite(1100, 400, 425, 0);
	box3.addImage(boxImg);
	box3.scale = 0.8;

	ground = new Ground (600, 550, 1500, 20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  box.display();
  box1.display();
  box2.display();

  ball.display();

  ground.display();

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:600, y:-600});
	}
}






