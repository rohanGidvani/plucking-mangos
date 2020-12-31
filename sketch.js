
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeimg;
var boy,boyimg

function preload()
{
	treeimg = loadImage("Plucking mangoes/tree.png");	
	boyimg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground = new Ground(200,600,1200,10);
	tree = createSprite(624,400,20,200);
    tree.addImage(treeimg);
    tree.scale = 0.4;
    boy = createSprite(140,545,30,120)
	boy.addImage(boyimg);
	boy.scale = 0.09;
	stoneobj = new Stone(95,500,10);
	mango1 = new Mango(620,340,10)
	mango2 = new Mango(530,320,10)
	mango3 = new Mango(580,280,10)
	mango4 = new Mango(700,290,10)
	mango5 = new Mango(780,300,10)
	mango6 = new Mango(630,230,10)
	mango7 = new Mango(470,300,10)
	mango8 = new Mango(720,220,10)
	mango9 = new Mango(540,220,10)
	mango10 = new Mango(660,360,10)
	mango11 = new Mango(570,320,10)
	mango12 = new Mango(750,380,10)
	launcher = new Launcher(stoneobj.body,{x:95,y:500});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(204,204,204);
  textSize(25)
  fill("blue")
  text("Press Space To Try Again",20,40);
  ground.display();
  tree.display();
  boy.display()
  stoneobj.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  launcher.display()

  detectCollision(stoneobj,mango1);
  detectCollision(stoneobj,mango2);
  detectCollision(stoneobj,mango3);
  detectCollision(stoneobj,mango4);
  detectCollision(stoneobj,mango5);
  detectCollision(stoneobj,mango6);
  detectCollision(stoneobj,mango7);
  detectCollision(stoneobj,mango8);
  detectCollision(stoneobj,mango9);
  detectCollision(stoneobj,mango10);
  detectCollision(stoneobj,mango11);
  detectCollision(stoneobj,mango12);
  

 
}
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneobj.body,{x:95,y:500})
		launcher.attach(stoneobj.body)
	}
}
function detectCollision(lstone,lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false)
}
}



