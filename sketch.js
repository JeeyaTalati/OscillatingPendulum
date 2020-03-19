const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world,ball,log,chain;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
   
  var logoptions = {
    isStatic:true
  }
  log = Bodies.rectangle(200,100,200,20,logoptions);
  World.add(world,log);
  ball = Bodies.circle(220,200,40);
  World.add(world,ball);
var chainoptions ={
  bodyA:ball,
  bodyB:log,
  stiffness:1,
  length:100
}
chain=Constraint.create(chainoptions);
World.add(world,chain);
}

function draw() {
  background(0);
  Engine.update(engine);
  fill ("red");  
  rectMode(CENTER);
  rect(log.position.x,log.position.y,200,20);
  fill ("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40);
  strokeWeight (10);
  stroke("white");
  line (ball.position.x,ball.position.y,log.position.x,log.position.y);
}
function keyPressed(){
  if (keyCode===32){
    ball.position.x=mouseX;
ball.position.y=mouseY;
  }
  else if (keyCode===10){
    ball.position.x=220;
    ball.position.y=200;
  }
}