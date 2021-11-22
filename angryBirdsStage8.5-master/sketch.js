const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;
var box1,box2,box3;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-30,1200,20);
    box1=new Box(1000,350,80,80);
    box2=new Box(1000,270,80,80);
    box3=new Box(1000,190,80,80);
box4=new Box(200,200,50,50);
    rope=new Rope(box4.body,{x:500,y:50});

    

    
}

function draw(){
  
        background("white");
    
        
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
       box1.display();
       box2.display();
       box3.display();
       box4.display();
       rope.display();


}

/*function mouseDragged(){
     if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && gameState==="launched"){
       slingshot.attach(bird.body);
       Matter.Body.setPosition(bird.body,{x:200,y:50});
       bird.trajectory=[];
       gameState="onSling";
    }
}*/

