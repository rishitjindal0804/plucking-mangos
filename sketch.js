
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimg,boy ;
var treeimg,tree;
var man1,man2,man3,man4,man5;

function preload()
{

	boyimg=loadImage("boy.png");
treeimg=loadImage("tree.png");

}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	
	ground=new Ground()
	stone=new Stone(100,460,23)

man1=new Mango(100,460,23);
man2=new Mango(600,290,34);
man3=new Mango(855,325,35);
man4=new Mango(670,260,35);
man5=new Mango(730,200,35);

chai=new Chain(stone.body,{x:100,y:465});

tree=createSprite(775,370);
tree.addImage(treeimg);
scale= 0.42;

boy=createSprite(160,550)
boy.addImage(boyimg)
boy.scale=1.5

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

fill("black")
textSize(24)
  
detectCollision(stone,man1)
detectCollision(stone,man2)
detectCollision(stone,man3)
detectCollision(stone,man4)
detectCollision(stone,man5)

  drawSprites();


groun.display();
ston.display();
man1.display();
man2.display();
man3.display();
man4.display();
man5.display();

}

function mouseDragged(){
matter.body.setposition(stone.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){

	chai.fly();
}

