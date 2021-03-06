
import { Scene } from "phaser";


let player;

// //moving character around
// let playerX = 402;
// let playerY = 200;
let playerHealth = 100;
let playerMaxHealth = 100;
let items;
let itemsArr = new Array(2);

const maxVelocityX = 200; // maximum player velocity in x direction

let enemy;
let enemyX = 800;
let enemyY = 250;
const enemySpeed = 100; // speed of enemy movement
const enemyLeft = 700; // left bound for enemy
const enemyRight = 900;

let platform;
let movingPlatform;

let health;
let backGroundBar;
let healthBar;
let healthLabel;
let gameBarX = 100;
let ExitDoor;

let gameOverText;

let gameOverState = false;

let cursor;
let attackKey;


let playerFacingRight = true;

let diamond;

var score = 0;
var scoreText;
let numItems = 0;

let tempItem;

const knockback = 20; // knockback is how many pixels the player moves away from enemy on collision
let healthLossAmount = 10;

class GameScene2 extends Scene {
  constructor() {
    super('level2')
  }
  preload() {
    //this.load.image("logo", "assets/logo.png");

    this.load.image("bg2", "assets/world2.png");
    this.load.spritesheet("player", "assets/PlayerSpriteSheetHorizontal.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("Caveman1", "assets/Level1Enemies/Caveman1.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("Man3", "assets/Level2Enemies/Man3.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image("platform", "assets/platform.png");
    this.load.image("platformSmall", "assets/platformSmall.png");
    this.load.image("wall", "assets/wall.png");
    // this.load.spritesheet("bullets", "assets/walkingSpritesheet.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    // this.load.spritesheet("health", "assets/walkingSpritesheet.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    this.load.image("diamond", "assets/diamond.png");
    this.load.image("greenHB", "assets/greenHB.png");
    this.load.image("redHB", "assets/redHB.png");

    this.load.image("CavemanRobes", "assets/Items/CavemanRobes.png");
    this.load.image("CureAllPotion", "assets/Items/CureAllPotion.png");
    this.load.image("DinosaurBone", "assets/Items/DinosaurBone.png");
    this.load.image("NES", "assets/Items/NES.png");
    this.load.image("PoisonedBerry", "assets/Items/PoisonedBerry.png");
    this.load.image("RubixCube", "assets/Items/RubixCube.png");
    this.load.image("SignedBCPoster", "assets/Items/SignedBCPoster.png");
    this.load.image("TalkingToothbrush", "assets/Items/TalkingToothbrush.png");
    this.load.image("ToyRobot", "assets/Items/ToyRobot.png");
    this.load.image("whiteTile", "assets/Blank.png");
    this.load.image("whitePlatform", "assets/Blank2.png");


  }
  create() {
    const background = this.add.image(0, 0, 'bg2').setScale(1).setScrollFactor(1);;
    background.setOrigin(0, 0);
    // const doorOut = this.add.image(800, 80, 'whiteTile');
    this.createPlatforms();
    this.createCollision();
    this.createLong();
    this.createPlayer(450, 1792+16);
    // this.createPlayer(650, 250);
    // this.createEnemy(1100, 200);
    this.createEnemy();
    this.CureAllPotionCreation(750, 250);
    this.ToyRobotCreation(120, 100);
    this.TalkingToothbrushCreation(670, 1200);
    this.healthCreation();
    this.ExitCreation();
    attackKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    // this.gameOverText = this.add.text(400, 300, 'Game Over.\nClick to\ntry again.', {
    //   fontSize: '64px',
    //   fill: '#FFF'
    // })
    // this.gameOverText.setOrigin(0.5);
    // this.gameOverText.visible = false;

    this.cameras.main.startFollow(this.player);

    this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
    this.scoreText = this.add.text(500, 15, "Items remaining: " + (3-numItems), {
      fontSize: "20px",
      fill: "#FFF",
    });
    this.scoreText.setScrollFactor(0);

  }
  update() {
    this.playerMovement();
    // this.enemyMovement();
    console.log('player at: '+this.player.body.x+','+this.player.body.y);
    // console.log('toyRobot at: '+this.toyRobot.body.x+','+this.toyRobot.body.y);
    // console.log('talkingToothbrush at: '+this.talkingToothbrush.body.x+','+this.talkingToothbrush.body.y);
    // console.log('cureAllPotion at: '+this.cureAllPotion.body.x+','+this.cureAllPotion.body.y);

    // this.platformMovement();
    // if(this.player.y > 650){
    //   this.gameOver();
    // }
  }
  // createMovingPlatforms(){
  //   this.movingPlatform = this.add.group();
  //   this.movingPlatform.create(60, 100, "platform");

  // }
  createPlatforms() {
    this.platform = this.physics.add.staticGroup();
    //bottom platform
    // this.platform.create(200, 582, "platform").setScale(1).refreshBody();
    // this.platform.create(600, 582, "platform").setScale(1).refreshBody();

    //Bottom Floors
    let plat1 = this.platform.create(200, 1840, "platform").setAlpha(0);
    let plat2 = this.platform.create(600, 1840, "platform").setAlpha(0);
    let plat3 = this.platform.create(1000, 1840, "platform").setAlpha(0);


    let plat4 = this.platform.create(176, 1745, "platformSmall").setAlpha(0);
    let plat5 = this.platform.create(720, 1745, "platformSmall").setAlpha(0);
    let plat6 = this.platform.create(464, 1650, "platformSmall").setAlpha(0);
    let plat7 = this.platform.create(175, 1520, "platformSmall").setAlpha(0);
    let plat8 = this.platform.create(465, 1488, "platformSmall").setAlpha(0);
    let plat9 = this.platform.create(752, 1519, "platformSmall").setAlpha(0);
    let plat10 = this.platform.create(336, 1392, "platformSmall").setAlpha(0);
    let plat11 = this.platform.create(688, 1360, "platformSmall").setAlpha(0);
    let plat12 = this.platform.create(464, 1232, "platformSmall").setAlpha(0);
    let plat13 = this.platform.create(55, 1135, "platform").setAlpha(0);
    let plat14 = this.platform.create(112, 1008, "platformSmall").setAlpha(0);

    //long platfrom distance offsets left (61)
    let plat15 = this.platform.create(431, 878, "platformSmall").setAlpha(0);
    let plat16 = this.platform.create(370, 878, "platformSmall").setAlpha(0);
    let plat17 = this.platform.create(492, 878, "platformSmall").setAlpha(0);

    let plat18 = this.platform.create(751, 784, "platformSmall").setAlpha(0);
    let plat19 = this.platform.create(812, 784, "platformSmall").setAlpha(0);
    let plat20 = this.platform.create(690, 784, "platformSmall").setAlpha(0);

    let plat21 = this.platform.create(399, 688, "platformSmall").setAlpha(0);
    let plat22 = this.platform.create(460, 688, "platformSmall").setAlpha(0);
    let plat23 = this.platform.create(338, 688, "platformSmall").setAlpha(0);

    let plat24 = this.platform.create(143, 560, "platformSmall").setAlpha(0);
    let plat25 = this.platform.create(204, 560, "platformSmall").setAlpha(0);
    let plat26 = this.platform.create(82, 560, "platformSmall").setAlpha(0);

    let plat27 = this.platform.create(463, 463, "platformSmall").setAlpha(0);
    let plat28 = this.platform.create(524, 463, "platformSmall").setAlpha(0);
    let plat29 = this.platform.create(402, 463, "platformSmall").setAlpha(0);

    let plat30 = this.platform.create(751, 336, "platformSmall").setAlpha(0);
    let plat31 = this.platform.create(812, 336, "platformSmall").setAlpha(0);
    let plat32 = this.platform.create(690, 336, "platformSmall").setAlpha(0);

    let plat33 = this.platform.create(367, 272, "platformSmall").setAlpha(0);
    let plat34 = this.platform.create(428, 272, "platformSmall").setAlpha(0);
    let plat35 = this.platform.create(306, 272, "platformSmall").setAlpha(0);

    let plat36 = this.platform.create(144, 175, "platformSmall").setAlpha(0);

    let plat37 = this.platform.create(304, 112, "platformSmall").setAlpha(0);
    let plat38 = this.platform.create(464, 112, "platformSmall").setAlpha(0);

    let plat39 = this.platform.create(775, 112, "platform").setAlpha(0);

    let plat40 = this.platform.create(200, -17, "platform").setAlpha(0);
    let plat41 = this.platform.create(600, -17, "platform").setAlpha(0);
    let plat42 = this.platform.create(1000, -17, "platform").setAlpha(0);
  

    //border walls
    let platLeftWall = this.platform.create(-18, 0, "wall").setAlpha(0);
    let platLeftWall2 = this.platform.create(-18, 2000, "wall").setAlpha(0);

    let platRightWall = this.platform.create(975, 0, "wall").setAlpha(0);
    let platRightWall2 = this.platform.create(975, 2000, "wall").setAlpha(0);
    
    

  
    // this.platform.visible = false;
    // this.plat1.setAlpha(0);
    this.cursor = this.input.keyboard.createCursorKeys();


  }

  createCollision() {
    this.tile = this.physics.add.staticGroup();
    //Bottom Tiles
    //let tile1 = this.tile.create(65, 145, "whiteTile").setAlpha(0);
    

    //this.cursor = this.input.keyboard.createCursorKeys();
  }

  createLong() {
    this.long = this.physics.add.staticGroup();

    //Jump Corridor
    //let long1 = this.long.create(-16, 830, "whitePlatform").setAlpha(0);
   
    
  }

  createPlayer(x, y) {
    this.player = this.physics.add.sprite(x, y, "player");
    // this.player.body.collideWorldBounds = true;
    this.physics.add.collider(this.player, this.platform);
    this.physics.add.collider(this.player, this.tile);
    this.physics.add.collider(this.player, this.long);
    this.physics.add.collider(this.player, this.enemy);
    this.player.setBounce(0.1);

    this.anims.create({
      key: "still",
      frames: [{
        key: "player",
        frame: 1
      }],
      frameRate: 20,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 3
      }),
      frameRate: 10,
      repeat: -1,
    });


    this.anims.create({
      key: "jump",
      frames: [{
        key: "player",
        frame: 5
      }],
      frameRate: 20,
    });

    this.anims.create({
      key: "punch",
      frames: this.anims.generateFrameNumbers("player", {
        start: 7,
        end: 12
      }),
      frameRate: 15,
      repeat: -1,
    });
  }
  createEnemy() {
    this.enemy = this.physics.add.sprite(enemyX, enemyY, "Man3");
    this.enemy.body.collideWorldBounds = false;
    this.physics.add.collider(this.enemy, this.platform);
    this.physics.add.collider(this.player, this.enemy, this.hitEnemy, null, this);
    this.enemy.setBounce(0.1);
    // this.enemy.setVelocityX(enemySpeed);
  }
  // createCaveman(x, y, )
  // diamondCreation(x, y, item_name) {
  //   this.diamond = this.add.group();
  //   this.diamond.enableBody = true;
  //   this.diamond = this.physics.add.sprite(x, y, item_name);
  //   this.diamond.setBounce(0.1);
  //   this.diamond.body.collideWorldBounds = true;
  //   this.physics.add.collider(this.diamond, this.platform);
  //   this.physics.add.overlap(this.player, this.diamond, this.collectDiamond, null, this);
  //   this.diamond.setScale(1);

  //   this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
  //   this.scoreText = this.add.text(500, 15, "Score: ", {
  //     fontSize: "20px",
  //     fill: "#000",
  //   });
  //   this.scoreText.setScrollFactor(0);
  // }
  CureAllPotionCreation(x, y){
    this.cureAllPotion = this.add.group();
    this.cureAllPotion.enableBody = true;
    this.cureAllPotion = this.physics.add.sprite(x, y, 'CureAllPotion');
    this.cureAllPotion.setBounce(0.1);
    this.cureAllPotion.body.collideWorldBounds = false;
    this.physics.add.collider(this.cureAllPotion, this.platform);
    this.physics.add.collider(this.cureAllPotion, this.tile);
    this.physics.add.collider(this.cureAllPotion, this.long);
    this.physics.add.overlap(this.player, this.cureAllPotion, this.collectCureAllPotion, null, this);
    this.cureAllPotion.setScale(1);
  }
  ToyRobotCreation(x, y){
    this.toyRobot = this.add.group();
    this.toyRobot.enableBody = true;
    this.toyRobot = this.physics.add.sprite(x, y, 'ToyRobot');
    this.toyRobot.setBounce(0.1);
    this.toyRobot.body.collideWorldBounds = false;
    this.physics.add.collider(this.toyRobot, this.platform);
    this.physics.add.collider(this.toyRobot, this.tile);
    this.physics.add.collider(this.toyRobot, this.long);
    this.physics.add.overlap(this.player, this.toyRobot, this.collectToyRobot, null, this);
    this.toyRobot.setScale(1);
  }
  TalkingToothbrushCreation(x, y){
    this.talkingToothbrush = this.add.group();
    this.talkingToothbrush.enableBody = true;
    this.talkingToothbrush = this.physics.add.sprite(x, y, 'TalkingToothbrush');
    this.talkingToothbrush.setBounce(0.1);
    this.talkingToothbrush.body.collideWorldBounds = false;
    this.physics.add.collider(this.talkingToothbrush, this.platform);
    this.physics.add.collider(this.talkingToothbrush, this.tile);
    this.physics.add.collider(this.talkingToothbrush, this.long);
    this.physics.add.overlap(this.player, this.talkingToothbrush, this.collectTalkingToothbrush, null, this);
    this.talkingToothbrush.setScale(1);
  }

  // multiItem(x, y, item){
  //   this.tempItem = this.physics.add.sprite(i * 70, 0, item)
  // }

  healthCreation() {
    this.backGroundBar = this.add.image(100, 20, "redHB");
    // this.backGroundBar.fixedToCamera = true;
    this.backGroundBar.setScrollFactor(0);

    this.healthBar = this.add.image(gameBarX, 20, "greenHB");
    // this.healthBar.fixedToCamera = true;
    this.healthBar.setScrollFactor(0);

    this.healthLabel = this.add.text(5, 30, "Health " + playerHealth, {
      fontsize: "20px",
      fill: "#ffffff",
    });
    // this.healthLabel.fixedToCamera = true;
    this.healthLabel.setScrollFactor(0);
  }

  playerMovement() {
    if (this.cursor.right.isDown) {
      this.player.body.setVelocityX(maxVelocityX);
      this.player.anims.play("right", true);
      //if player was not facing right before, flip them to face right
      if (!playerFacingRight) {
        this.player.toggleFlipX();
      }
      playerFacingRight = true;
      //if left arrow is pressed, move them left and animate also
    } else if (this.cursor.left.isDown) {
      this.player.body.setVelocityX(-maxVelocityX);
      this.player.anims.play("right", true);
      //if player was not facing left before, flip them to face left
      if (playerFacingRight) {
        this.player.toggleFlipX();
      }
      playerFacingRight = false;
      //player punch
    } else if(attackKey.isDown) {
      console.log('A key pressed - punch');
      this.player.anims.play("punch", true);
   } else {
      //if no keys are pressed, stop their x motion and stop animating
      this.player.anims.play("still", true);
      this.player.body.setVelocityX(0);
    }
    //if up arrow is pressed while character is standing on a surface, player jumps
    if (this.cursor.up.isDown && this.player.body.onFloor() /*|| player.body.onWall()*/ ) {
      this.player.setVelocityY(-300);
      //player.anims.play('jump', true);
    }
    if (!this.player.body.onFloor()) {
      this.player.anims.play("jump", true);
    }


  }
  enemyMovement() {
    if (this.enemy.x > enemyRight && this.enemy.body.velocity.x > 0) {
      this.enemy.setVelocityX(-enemySpeed);
    } else if (this.enemy.x < enemyLeft && this.enemy.body.velocity.x < 0) {
      this.enemy.setVelocityX(enemySpeed);
    } else if (this.enemy.body.velocity.x == 0) {
      this.enemy.setVelocityX(enemySpeed);
    }
  }
  // platformMovement(){
  //   console.log(this.movingPlatform)
  // }
  // collectDiamond(player, diamond) {
  //   diamond.disableBody(true, true);
  //   score += 10;
  //   this.scoreText.setText("Score: " + score);
  // }
  collectCureAllPotion(player, cureAllPotion){
    cureAllPotion.disableBody(true, true);
    this.UpdateItems("CureAllPotion");
    this.scoreText.setText("Items remaining: " + (3-numItems));
  }
  collectToyRobot(player, toyRobot){
    toyRobot.disableBody(true, true);
    this.UpdateItems("ToyRobot");
    this.scoreText.setText("Items remaining: " + (3-numItems));
  }
  collectTalkingToothbrush(player, talkingToothbrush){
    talkingToothbrush.disableBody(true, true);
    this.UpdateItems("TalkingToothbrush");
    this.scoreText.setText("Items remaining: " + (3-numItems));
  }

  ExitCreation(){
    this.ExitDoor = this.physics.add.image(850, 50, "whiteTile");
    this.ExitDoor.setTint(0x000000);

    // this.ExitDoor.visible = false;
    this.physics.add.collider(this.ExitDoor, this.platform);
    this.physics.add.overlap(this.ExitDoor, this.player, this.Exit, null, this);
  }
  hitEnemy(player, enemy) {
    if (this.player.y < this.enemy.y - 30) {
      this.enemy.disableBody(true, true);
    } else if (player.anims.isPlaying && player.anims.currentAnim.key === "punch" &&
      ((playerFacingRight && player.x < enemy.x) ||
        (!playerFacingRight && player.x >= enemy.x))) {
      this.enemy.disableBody(true, true);
      player.setVelocityX(0);
    } else {
      //if player touches enemy from the side, player loses health
      playerHealth -= 10;
      if (playerHealth >= 0) {
        this.healthLabel.setText("Health: " + playerHealth);
        //healthBar.setScale(playerHealth/playerMaxHealth, 1);
      }
      //move green health bar off screen for player health lost
      this.healthBar.x -= 2 * (healthLossAmount);
      // console.log(this.healthBar.x);
      if (playerHealth <= 0) {
        console.log("Call gameOver Scene here! Don't pause the physics");
        this.player.setTint(0xff0000);
        this.gameOver();
      }
      // health.disableBody(true, true);
      // knockback player on collision with enemy from side and have enemy move away from player
      if (this.player.x < this.enemy.x) {
        this.player.x -= knockback;
        this.enemy.setVelocityX(enemySpeed);
      } else {
        this.player.x += knockback;
        this.enemy.setVelocityX(-enemySpeed);
      }
    }
  }
  gameOver(){
    this.physics.pause();
    this.gameOverState = true;
    this.gameOverText = this.add.text(400, 300, 'Game Over.\nClick to\ntry again.', {
      fontSize: '64px',
      fill: '#FFF'
    })
    this.gameOverText.setOrigin(0.5);
    // this.gameOverText.visible = false;
    this.gameOverText.setScrollFactor(0);
    this.gameOverText.visible = true;
    this.input.on('pointerdown', () => this.scene.start('intro'))

  }
  Exit(){
    console.log("collision");
    if(numItems > 2){
      this.scene.start('End');
    }
  }
  UpdateItems(item_name){
    this.items = this.add.sprite(280 + (32*numItems), 20, item_name).setScrollFactor(0);
    itemsArr[numItems] = this.items;
    itemsArr[numItems].visible = true;
    numItems++;
    console.log('numItems: ' + numItems);
  }
}

export default GameScene2;