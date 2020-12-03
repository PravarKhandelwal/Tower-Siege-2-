const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
  polygon_img = loadImage("polygon.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground(450,390,900,20);
  stand1 = new Ground(270,350,250,20);
  stand2 = new Ground(600,200,300,20);

 
  box1 = new Box(225,340,30,40);
  box2 = new Box(240,340,30,40);
  box3 = new Box(255,340,30,40);
  box4 = new Box(270,340,30,40);
  box5 = new Box(285,340,30,40);
  box6 = new Box(300,340,30,40);
  box7 = new Box(315,340,30,40);
  

  box8 = new Box(240,305,30,40);
  box9 = new Box(255,305,30,40);
  box10 = new Box(270,305,30,40);
  box11= new Box(285,305,30,40);
  box12= new Box(300,305,30,40);

  box13= new Box(255,295,30,40);
  box14= new Box(270,295,30,40);
  box15= new Box(285,295,30,40);

  box16= new Box(270,285,30,40);



  boxB1 = new Box(560,150,30,40);
  boxB2 = new Box(575,150,30,40);
  boxB3 = new Box(590,150,30,40);
  boxB4 = new Box(605,150,30,40);
  boxB5 = new Box(620,150,30,40);

  boxB6 = new Box(575,135,30,40);
  boxB7 = new Box(590,135,30,40);
  boxB8 = new Box(605,135,30,40);

   boxB9 = new Box(590,120,30,40);
 
   polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);

        slingshot = new SlingShot(this.polygon,{x: 100,y:200})

}
function draw() {
  background(56,44,44);
  ground.display();
  stand1.display(); 
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();
  


  boxB1.display();
  boxB2.display();
  boxB3.display();
  boxB4.display();
  boxB5.display();

  boxB6.display();
  boxB7.display();
  boxB8.display();

  boxB9.display();

 imageMode(CENTER);
 image(polygon_img,polygon.position.x,polygon.position.y,50,50);

 slingshot.display();

}

function mouseDraggd()
{
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  slingshot.fly();
}


