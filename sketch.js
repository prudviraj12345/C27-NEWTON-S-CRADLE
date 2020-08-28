
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bob1,bob2,bob4 ,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(300,350,20);
	bob2 = new Bob(350,350,20);
	bob3 = new Bob(400,350,20);
	bob4 = new Bob(450,350,20);
	bob5 = new Bob(500,350,20);


	ground = new Roof(400,100,600,40)

	rope1 = new Rope(bob1.body,ground.body,-40*2,0);
	rope2 = new Rope(bob2.body,ground.body,-20*2,0);
	rope3 = new Rope(bob3.body,ground.body,-0*2,0);
	rope4 = new Rope(bob4.body,ground.body,20*2,0);
	rope5 = new Rope(bob5.body,ground.body,40*2,0);





	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);


 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 

 ground.display();
 rope1.display();

 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();





 
 

}



