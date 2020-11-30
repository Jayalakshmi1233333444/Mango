//okay, let me check
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stone,ground,tree,boy,mango1,mango2,mango3,mango4,mango5,elastic;
function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);

//maam are you there
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone=new Stone(226,300,20);
ground=new Ground(width/2,height,1200,50);
// tree=new Tree(400,400,400,400)
 
// mango1=new Mango(width-20,420,50);
// mango2=new Mango(width-200,350,50);
// mango3=new Mango(width-290,430,50);
// mango4=new Mango(width-150,460,50);
// mango5=new Mango(width-80,370,50);
elastic=new Elastic(stone.body,{x:230,y:565});
console.log(stone)
	Engine.run(engine);
 
//   console.log(tree.y
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("white");
 
 
 ground.display();
//  tree.display();
//boy.display();
 stone.display();
 image(boy,200,530,200,200)
//  mango1.display();
//  mango2.display();
//  mango3.display();
//  mango4.display();
//  mango5.display();
 elastic.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
	elastic.fly();
}

