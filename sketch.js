
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var plano;
var circle;
var square;
var rectangle;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	var plano_options = {
		isStatic:true
	};

	var circle_options = {
		restitution: 0.1,

		frictionAir: 0.08
	}

	var square_options = {
		restitution: 1.7,

		frictionAir: 0.1
	}

	var rectangle_options = {
		restitution: 0,

		frictionAir: 0.02
	}


	plano = Bodies.rectangle(400, 695, 800 ,10, plano_options);
	World.add(world, plano);

	circle = Bodies.circle(220, 350, 20, circle_options);
	World.add(world, circle);

	square = Bodies.rectangle(400, 350, 50,50, square_options);
	World.add(world, square);

	
	rectangle = Bodies.rectangle(620, 350, 100,50, rectangle_options);
	World.add(world, rectangle);
	
	
	ellipseMode(RADIUS);
	rectMode(CENTER);
}


function draw() {
  
  background(0);
  background("BLUE");

  Engine.update(engine);

  fill("purple");
  rect(plano.position.x, plano.position.y, 800,10);

  fill("orange");
  ellipse(circle.position.x, circle.position.y, 20, 20);

  fill("red");
  rect(square.position.x, square.position.y, 50,50);

  fill("green");
  rect(rectangle.position.x, rectangle.position.y, 100,50);
    
  
  drawSprites();
 
}



