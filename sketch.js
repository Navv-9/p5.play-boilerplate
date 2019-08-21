const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;
  var options= {
    isStatic: true
  }
  ground= Bodies.rectangle(200,350,400,20,options);
World.add(world,ground);
var ball_options= {
  restitution: 1.0
}
ball= Bodies.circle(400,100,40,ball_options);
World.add(world,ball);

}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  rect(ground.position.x,ground.position.y,400,20) ;
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
  drawSprites();
}
