
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone;
var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height-60,1200,25);

	tree = new Tree(500,175,500,350);

	boy = new Boy(60,400,200,150);

	mango1 = new Mango(700,230,35,30);
	mango2 = new Mango(800,280,45,30);
	mango3 = new Mango(600,290,45,45);
	mango4 = new Mango(750,250,35,35);
	mango5 = new Mango(800,230,40,30);
	mango6 = new Mango(870,290,40,45);
	mango7 = new Mango(680,300,45,35);
	mango8 = new Mango(950,310,50,45);

	stone = new Stone(400,400,40,40);

	//sling = new Sling(stone.body,{x:100, y:430});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  ground.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  stone.display();
  //sling.display();

  drawSprites();
 
}
function mouseDragged(){
   Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

//function mouseReleased(){sling.fly();}


