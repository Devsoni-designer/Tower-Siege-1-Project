const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ball;
var polygon_img;
var slingshot;
var stand1;

function preload()
{
    polygon_img = loadImage("polygon.png");
}

function setup()
{
    createCanvas(1600,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();

    ground1 = new Ground(830,325,320,10);

    block1 = new Block(715,295,40,55);
    block2 = new Block(750,295,40,55);
    block3 = new Block(790,295,40,55);
    block4 = new Block(830,295,40,55);
    block5 = new Block(870,295,40,55);
    block6 = new Block(910,295,40,55);
    block7 = new Block(950,295,40,55);

    //level2
    block8 = new Block(750,240,40,55);
    block9 = new Block(790,240,40,55);
    block10 = new Block(830,240,40,55);
    block11 = new Block(870,240,40,55);
    block12 = new Block(910,240,40,55)

    //level3
    block13 = new Block(790,185,40,55)
    block14 = new Block(830,185,40,55)
    //block15 = new Block(870,185,40,55)

    //level4
    //block16 = new Block(830,125,40,55);

    stand1 = new Stand(450,490,600,30);
    stand2 = new Stand(1050,490,600,30);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new SlingShot(this.ball,{x:100,y:200});

    Engine.run(engine);

}

function draw()
{
    background(56,44,44);

    Engine.update(engine);

    stand1.display();
    stand2.display();

    //level1
    ground1.display();

    fill ("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill ("lightyellow");
    block8.display()
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill ("yellow");
    block13.display();
    block14.display();
    //block15.display();

    fill ("blue")
    //block16.display();

    imageMode(CENTER);
    image(polygon_img,ball.position.x,ball.position.y,40,40);

    slingshot.display();

}


function mouseDragged()
{

    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});

}

function mouseReleased()
{

    slingshot.fly();
}

function keyPressed()
{

    if(keyCode===32)
    {
        slingshot.attach(this.ball);
    }

}

