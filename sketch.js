const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    pig1= new pig(300,300);
    box2 = new Box(400,300,50,50);
    ground = new Ground(600,height,1200,20);
    log1= new log(300,250,280,PI/2);

    box3 = new Box(200,200,50,50);
    pig2= new pig(300,200);
    box4 = new Box(400,200,50,50);
    log2= new log(300,150,280,PI/2);
    box5 = new Box(300,100,50,50);
    log3 = new log(260,100,80,PI/7);
    log4 = new log(330,100,90,-PI/7);
    bird1 =new bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    pig1.display();
    box2.display();
    ground.display();
    log1.display();

    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    bird1.display();
    box5.display();
    log3.display();
    log4.display();
}