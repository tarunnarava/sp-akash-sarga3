/// change all car name and image of carname to spacecraft 


var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bg,Spaceships, Spaceship1, Spaceship2, Spaceship3, Spaceship4;

var aster,kepler,asterGroup,asteroid1,asteroid2,asteroid1img,asteroid2img,asteroid3,asteroid3img,asteroid4,asteroid4img;

var track, Spaceship1_img, Spaceship2_img, Spaceship3_img, Spaceship4_img;

function preload(){
                   
  track = loadImage("images/ground.png");
  Spaceship1_img = loadImage("images/Spaceship1.png");
  Spaceship2_img = loadImage("images/Spaceship2.png");
  Spaceship3_img = loadImage("images/Spaceship3.png");
  Spaceship4_img = loadImage("images/Spaceship4.png");
  ground = loadImage("images/ground.png");
  asteroid1img=loadImage("images/asteroid.png");
  asteroid2img=loadImage("images/asteroid2.png");
  asteroid3img=loadImage("images/asteroid3.png");
  asteroid4img=loadImage("images/asteroid4.png");
  bg=loadImage("images/bg.jpg");
  kepler=loadImage("images/kepler.png");

}


function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



  asterGroup=createGroup();

}


function draw(){
  background(bg);
  if(playerCount === 4){
   
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
  


}
