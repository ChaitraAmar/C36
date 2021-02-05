var form,player,game,gameState=0,playerCount,database

function setup(){
  database = firebase.database();
  
  createCanvas(400,400);
game=new Game ();
game.getState();
game.start();


}

function draw(){
   
}

