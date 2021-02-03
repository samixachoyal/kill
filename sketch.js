const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg;
var ground;
var hero;
var flys;

function preload() {

backImg=loadImage("GamingBackground.png")

}

function setup() {
  createCanvas(1900, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,650,900,20)
hero = new Hero(300,400,250)
flys= new Fly(hero,{x:100,y:100})

}

function draw() {
  background(backImg);
  Engine.update(engine);
hero.display();
  ground.display();
  flys.display();

}

