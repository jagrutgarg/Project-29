const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(820,235,100,100);
    box2 = new Box(850,235,100, 100);
    box3 = new Box(880,235,100, 100);
    box4 = new Box(910,235,100, 100);
    box5 = new Box(790,235,100, 100);
    box6 = new Box(820,200,100, 100);
    box7 = new Box(850,200,100, 100);
    box8 = new Box(880,200,100, 100);
    box9 = new Box(850,150,100, 100);
    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background("violet");
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    bird.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    slingshot.display();  
    text(mouseX + "," + mouseY, 50,50);  
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}