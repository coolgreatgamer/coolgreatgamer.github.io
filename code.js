var mcs = [];
let playerImg;
let player;
let playerSize =32;
let floor
let group;

let enemyImg;
let enemy;
let enemySize = 32;
let canvasSize = 600;
let mySound;
let Lavender_Town;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/doorbell');
}
let speed = 5;

function setup() {

  world.gravity.y = 10;
	floor = new Sprite(10, 500, 1500, 4, 's');
  floor = new Sprite(10, 400, 900, 4, 's');
  floor = new Sprite(10, 300, 700, 4, 's');
  floor = new Sprite(10, 200, 500, 4, 's');
  floor = new Sprite(10, 100, 300, 4, 's');
  floor = new Sprite(10, 50, 100, 4, 's');
  
  createCanvas(canvasSize, canvasSize);

  //group = new group()
	player = new Sprite(width/2, height/2, playerSize, playerSize);
  player.addImage(playerImg);
  //
  lava =new Sprite(width/2, 500, 1000000, 4);
  //lava.addImage(lavaImg);
  lava.mass = 2000;
  lava.collider = 'static';

  //
  enemy = new Sprite(100, 100, enemySize, enemySize);
  enemy.addImage(enemyImg);
  mcs.push(enemy);
}

//function makeEnemyFollow()
function makeEnemyFollow(value, index, array) 
{
  let item = value;
  
  if (player.position.x > item.position.x) {
    item.position.x = item.position.x + 1;
  }
  
  if (player.position.x < item.position.x) {
    item.position.x = item.position.x - 1;
  }

  
  if (player.position.y > item.position.y) {
    item.position.y = item.position.y + 5;
  }
  
  if (player.position.y < item.position.y) {
    item.position.y = item.position.y - 5;
  }
}

function draw() {
  mouse.visible = false;
  enemy.collide(lava, enemydie)
  function enemydie(enemy) {
    enemy.remove();
    //alert("enemy touched lava")
  }
  

  player.collide(lava, bruhdie);
  function bruhdie(player) {
    player.remove();
    alert("game over!")
  }  



  player.collide(enemy, lose);
  function lose(player) {
    player.remove();
    alert("game over!")
    //console.error(BrokenGameHaha);
  }  
//if you touch the enemy it will alert "nice try!"

  
  background("black");
  //drawSprites();
  
  //makeEnemyFollow();
 
  mcs.forEach(makeEnemyFollow);


  if (kb.presses('space')) {

    enemy = new Sprite(100, 100, enemySize, enemySize);
    enemy.addImage(enemyImg);

    //alert(enemy);

    mcs.push(enemy);    
  }

  if (kb.pressing('q')) enemy.rotation = 180;
  else enemy.rotation = 0;

  if (kb.pressing(RIGHT_ARROW)) {
    player.position.x += speed;
    if (player.position.x > canvasSize - playerSize / 2) {
      player.position.x = canvasSize - playerSize / 2;
      world.gravity.y = 10;
    }
  } 
  if (kb.pressing(LEFT_ARROW)) {
    player.position.x -= speed;
    if (player.position.x < playerSize / 2) {
      player.position.x = playerSize / 2;
      world.gravity.y = 10;
    }

  } 
  if (kb.pressing(DOWN_ARROW)) { 
    player.position.y += speed;
     //disabeled due to the type of game.
     world.gravity.y = 10;

     if (player.position.y > 600) {
      player.position.y = 600;
      
    }
  } 
  if (kb.pressing(UP_ARROW)) {
    world.gravity.y = 0;
    player.position.y -= speed;
    if (player.position.y < playerSize / 2) {
      player.position.y = playerSize / 2;
      
    }else {
    world.gravity.y = 10;    
    }

  }

if (contro.pressing('a')){     player.position.y += speed;
//disabeled due to the type of game.
world.gravity.y = 10;

if (player.position.y > 600) {
 player.position.y = 600;
 
}
alert("DOWN PRESSED")
}

;//down




if (contro.pressing('b')){     player.position.x += speed;
if (player.position.x > canvasSize - playerSize / 2) {
  player.position.x = canvasSize - playerSize / 2;
  world.gravity.y = 10};
}
//right



if (contro.pressing('x')){     player.position.x -= speed;
if (player.position.x < playerSize / 2) {
  player.position.x = playerSize / 2;
  world.gravity.y = 10;
}
}

;//left



if (contro.pressing('y')){     world.gravity.y = 0;
player.position.y -= speed;
if (player.position.y < playerSize / 2) {
  player.position.y = playerSize / 2;
  
}else {
world.gravity.y = 10;    
}
}
;//up




  if (kb.pressing('=')) {
  stop()
  alert("good job you broke game")
  console.error(BrokenGameHaha);
}






    if (enemy.position.x > 600) {
      enemy.position.x = 600;
    }

    if (enemy.position.x < 0) {
      enemy.position.x = 0;
    }

  
    if (enemy.position.y < 0) {
      enemy.position.y = 0;
    }
 
}







function preload() {
  playerImg = loadImage("player.png")
  enemyImg = loadImage("enemy.png")
  lavaImg = loadImage("lava.png")
  //soundFormats('mp3', 'ogg');
  Lavender_Town = loadSound('Lavender_Town.mp3');
  //Lavender_Town.play([0.5])
}


function keyPressed() {
if (kb.pressing('a')) {
	Lavender_Town.play([0.5])
  alert("uhh nice job finding this idk")
  alert("don't press = ")


}
}







