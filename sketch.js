var canvas, backgroundImg;
var position;
var gameState=0
var PlayerCount
var database

var form, player, game


function setup(){
  database = firebase.database();
  canvas=createCanvas(400,400);
game= new Game();
game.getState();
game.start();
}

function draw(){

}

