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

let speed = 5;

function setup() {
  world.gravity.y = 5;
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
  lava =new Sprite(width/2, height/2, 16, 64);
  lava.addImage(lavaImg);
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
  enemy.collide(lava, enemydie)
  function enemydie(enemy) {
    enemy.remove();
    alert("enemy touched lava")
  }



  player.collide(enemy, lose);
  function lose(player) {
    player.remove();
    alert("nice try!")
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

  if (kb.pressing(RIGHT_ARROW)) {
    player.position.x += speed;
    if (player.position.x > canvasSize - playerSize / 2) {
      player.position.x = canvasSize - playerSize / 2;
      world.gravity.y = 5;
    }
  } 
  if (kb.pressing(LEFT_ARROW)) {
    player.position.x -= speed;
    if (player.position.x < playerSize / 2) {
      player.position.x = playerSize / 2;
      world.gravity.y = 5;
    }

  } 
  if (kb.pressing(DOWN_ARROW)) { 
    player.position.y += speed;
     //disabeled due to the type of game.
     world.gravity.y = 0

     if (player.position.y > 600) {
      player.position.y = 600;
      
    }
  } 
  if (kb.pressing(UP_ARROW)) {
    player.position.y -= speed;
    if (player.position.y < playerSize / 2) {
      player.position.y = playerSize / 2;
      world.gravity.y = 5;
    }
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

}


function keyPressed() {

}







