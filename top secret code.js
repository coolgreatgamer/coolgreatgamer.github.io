var mcs = [];
let player, floor;
let playerImg;
let enemy;
let enemyImg

function setup() {

  enemy = new Sprite(100, 100, 32, 32);
  enemyImg = loadImage("enemy.png")
  enemy.addImage(enemyImg);  
  playerImg = loadImage("player.png")
  
	new Canvas(500, 240);
	world.gravity.y = 15;
	player = new Sprite(50, 0);
	
  player.addImage(playerImg);
  floor = new Sprite(250, 200, 1000, 40, 'static');
}

function draw() {
	clear();
	if (mouse.presses()) {
		player.vel.y = -4;
		player.vel.x = 3;
	}

	camera.x = player.x;

  if (kb.presses('d')) {

  enemy = new Sprite(100, 100, 32, 32);
  enemy.addImage(enemyImg);

  //alert(enemy);`

  mcs.push(enemy);    
  }
}
mcs.forEach(makeEnemyFollow);

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

