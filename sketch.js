const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(1350,635);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(650,500,300,10);
    ground2 = new Ground(1000,400,250,10);

    box1 = new Box1(650,450,50,50);
    box2 = new Box1(700,450,50,50);
    box3 = new Box1(750,450,50,50);
    box4 = new Box1(600,450,50,50);
    box5 = new Box1(550,450,50,50);

    box6 = new Box2(675,390,50,50);
    box7 = new Box2(725,390,50,50);
    box8 = new Box2(625,390,50,50);
    box9 = new Box2(575,390,50,50);

    box10 = new Box1(650,330,50,50);
    box11 = new Box1(700,330,50,50);
    box12 = new Box1(600,330,50,50);

    box13 = new Box2(625,270,50,50);
    box14 = new Box2(675,270,50,50);

    box15 = new Box1(650,210,50,50);

    box16 = new Box2(1025,350,50,50);
    box17 = new Box2(975,350,50,50);
    box18 = new Box2(925,350,50,50);
    box19 = new Box2(1075,350,50,50);

    box20 = new Box1(1000,290,50,50);
    box21 = new Box1(950,290,50,50);
    box22 = new Box1(1050,290,50,50);

    box23 = new Box2(1025,230,50,50);
    box24 = new Box2(975,230,50,50);

    box25 = new Box1(1000,170,50,50);

    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:400});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ground1.display();
    ground2.display();

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
    box17.display();
    box18.display();
    box19.display();
    
    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();

    box25.display();

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body)
    }
}