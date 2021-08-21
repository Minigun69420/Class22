function setup() {
  createCanvas(800,400);
myEng = Matter.Engine.create()
myWorld = myEng.world
Box1 = Matter.Bodies.rectangle(400,200,50,50,{restitution:0.8})
Matter.World.add(myWorld, Box1)
var Static={
isStatic: true
}
Ground = Matter.Bodies.rectangle(400,380,800,20,Static)
Matter.World.add(myWorld,Ground)

}

function draw() {
  background("blue")  
  rectMode(CENTER)
  Matter.Engine.update(myEng)
rect(Box1.position.x,Box1.position.y,50,50);
rect(Ground.position.x,Ground.position.y,800,20)
}