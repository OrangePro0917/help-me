const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var wall1;

var wall2;

var ball;
var score = 0


var basketImg, basket

function preload() {


  basketImg = loadImage("basket.png")
}

function setup() {
  createCanvas(1600, 700);

  engine = Engine.create();
  world = engine.world;

  var options = { isStatic: true };
  ground = Bodies.rectangle(0, 650, 1600, 20, options);
  World.add(world, ground);

  var options_ball = {
    restitution: 0.3,
    friction: 0,
    density: 1.2,
  };
  ball = Bodies.circle(200, 100, 50, options_ball);
  World.add(world, ball);

 
  

  var options2 = { isStatic: true };
  wall1 = Bodies.rectangle(1350, 600, 20, 120, options2);
  World.add(world, wall1);

  var options3 = { isStatic: true };
  wall2 = Bodies.rectangle(1100, 600, 20, 120, options3);
  World.add(world, wall2);

  ground = Bodies.rectangle(width / 2, 670, width, 20, options3);
  World.add(world, ground);

  basket = Bodies.rectangle(200, 300, 50, 50, options3)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.run(engine);
}

function draw() {
  background(0);

  rect(ground.position.x, ground.position.y, 1600, 115);

  rect(basket.position.x, basket.position.y, 50, 50)

  if(Matter.SAT.collides(ball, basket))
  {

    var positions = [-40, -60, -70, -20];
    var position = Math.random(positions); 

  }
  

  ellipse(ball.position.x, ball.position.y, 20);

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 2, y: 500 });
  }

  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 250, y:2 });
  }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: -250, y: 2 });
  }
}




