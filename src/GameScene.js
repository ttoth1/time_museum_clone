
// import { Scene } from "phaser";


// let player;
// let playerX = 30;
// let playerY = 851;
// let playerHealth = 100;
// let playerMaxHealth = 100;
// let items;
// let itemsArr = new Array(2);

// const maxVelocityX = 200; // maximum player velocity in x direction

// let enemy;
// let enemyX = 500;
// let enemyY = 150;
// const enemySpeed = 100; // speed of enemy movement
// const enemyLeft = 450; // left bound for enemy
// const enemyRight = 600;

// let platform;
// let movingPlatform;

// let health;
// let backGroundBar;
// let healthBar;
// let healthLabel;
// let gameBarX = 100;
// let ExitDoor;

// let gameOverText;

// let gameOverState = false;

// let cursor;
// let attackKey;


// let playerFacingRight = true;

// let diamond;

// var score = 0;
// var scoreText;
// let numItems = 0;

// let tempItem;

// const knockback = 20; // knockback is how many pixels the player moves away from enemy on collision
// let healthLossAmount = 10;

// class GameScene extends Scene {
//   constructor() {
//     super('level1')
//   }
//   preload() {
//     //this.load.image("logo", "assets/logo.png");

//     this.load.image("background", "Assets/World1.png");
//     this.load.spritesheet("player", "Assets/PlayerSpriteSheetHorizontal.png", {
//       frameWidth: 32,
//       frameHeight: 32,
//     });
//     this.load.spritesheet("Caveman1", "assets/Level1Enemies/Caveman1.png", {
//       frameWidth: 32,
//       frameHeight: 32,
//     });
//     this.load.image("platform", "Assets/platform.png");
//     // this.load.spritesheet("bullets", "Assets/walkingSpritesheet.png", {
//     //   frameWidth: 32,
//     //   frameHeight: 32,
//     // });
//     // this.load.spritesheet("health", "Assets/walkingSpritesheet.png", {
//     //   frameWidth: 32,
//     //   frameHeight: 32,
//     // });
//     this.load.image("diamond", "Assets/diamond.png");
//     this.load.image("greenHB", "Assets/greenHB.png");
//     this.load.image("redHB", "Assets/redHB.png");

//     this.load.image("CavemanRobes", "assets/items/CavemanRobes.png");
//     this.load.image("CureAllPotion", "assets/items/CureAllPotion.png");
//     this.load.image("DinosaurBone", "assets/items/DinosaurBone.png");
//     this.load.image("NES", "assets/items/NES.png");
//     this.load.image("PoisonedBerry", "assets/items/PoisonedBerry.png");
//     this.load.image("RubixCube", "assets/items/RubixCube.png");
//     this.load.image("SignedBCPoster", "assets/items/SignedBCPoster.png");
//     this.load.image("TalkingToothbrush", "assets/items/TalkingToothbrush.png");
//     this.load.image("ToyRobot", "assets/items/ToyRobot.png");
//     this.load.image("whiteTile", "assets/Blank.png");
//     this.load.image("whitePlatform", "assets/Blank2.png");


//   }
//   create() {
//     const background = this.add.image(0, 0, 'background').setScale(1).setScrollFactor(1);;
//     background.setOrigin(0, 0);
//     this.createPlatforms();
//     this.createPlayer();
//     this.createCollision();
//     this.createLong();
//     this.createEnemy(500, 150, "Caveman1");
//     // this.createCaveman(500, 150, "Caveman1");
//     this.CavemanRobesCreation(500, 200);
//     this.DinosaurBoneCreation(100, 100);
//     this.PoisonedBerryCreation(450, 400);
//     this.healthCreation();
//     this.ExitCreation();
//     attackKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

//     this.gameOverText = this.add.text(400, 300, 'Game Over.\nClick to\ntry again.', {
//       fontSize: '64px',
//       fill: '#000'
//     })
//     this.gameOverText.setOrigin(0.5);
//     this.gameOverText.visible = false;

//     this.cameras.main.startFollow(this.player);

//     this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
//     this.scoreText = this.add.text(500, 15, "Score: " + score, {
//       fontSize: "20px",
//       fill: "#000",
//     });
//     this.scoreText.setScrollFactor(0);

//   }
//   update() {
//     this.playerMovement();
//     this.enemyMovement();
//     // game.physics.arcade.collide(enemy, platform, patrolPlatform, null, this);
//     // if(this.player.y > 650){
//     //   this.gameOver();
//     // }
//   }
//   // createMovingPlatforms(){
//   //   this.movingPlatform = this.add.group();
//   //   this.movingPlatform.create(60, 100, "platform");
// //   patrolPlatform(enemy, platform) {
// //     // if enemy moving to right and has started to move over right edge of platform
// //     if (enemy.body.velocity.x > 0 && enemy.right > platform.right) {
// //         enemy.body.velocity.x *= -1; // reverse direction
// //     }
// //     // else if enemy moving to left and has started to move over left edge of platform
// //     else if (enemy.body.velocity.x < 0 && enemy.left < platform.left) {
// //         enemy.body.velocity.x *= -1; // reverse direction
// //     }
// // }
//   // }

//   createPlatforms() {
//     this.platform = this.physics.add.staticGroup();
//     //bottom platform
//     // this.platform.create(200, 582, "platform").setScale(1).refreshBody();
//     // this.platform.create(600, 582, "platform").setScale(1).refreshBody();

//     //Bottom Floors
//     this.platform.create(60, 200, "platform").setAlpha(0);
//     //this.platform.create(600, 300, "platform");
//     this.platform.create(100, 943, "platform").setAlpha(0);
//     this.platform.create(250, 943, "platform").setAlpha(0);
//     this.platform.create(400, 943, "platform").setAlpha(0);
//     this.platform.create(600, 943, "platform").setAlpha(0);
//     this.platform.create(1064, 975, "platform").setAlpha(0);
//     this.platform.create(1450, 975, "platform").setAlpha(0);
//     this.platform.create(1850, 975, "platform").setAlpha(0);
//     this.platform.create(2250, 975, "platform").setAlpha(0);
//     this.platform.create(2450, 975, "platform").setAlpha(0);
//     this.platform.create(3240, 944, "platform").setAlpha(0);
//     this.platform.create(3600, 944, "platform").setAlpha(0);
    

//     //Top Floors
//     this.platform.create(3450, 432, "platform").setAlpha(0);
//     this.platform.create(3100, 432, "platform").setAlpha(0);
//     this.platform.create(2800, 432, "platform").setAlpha(0);
//     this.platform.create(2400, 432, "platform").setAlpha(0);
//     this.platform.create(2280, 432, "platform").setAlpha(0);
//     //this.platform.create(1900, 432, "platform").setAlpha(0.5);

//     this.platform.create(1890, 530, "platform").setAlpha(0);
//     this.platform.create(1600, 530, "platform").setAlpha(0);
//     this.platform.create(1305, 432, "platform").setAlpha(0);
//     this.platform.create(905, 432, "platform").setAlpha(0);
//     this.platform.create(747, 432, "platform").setAlpha(0);
//     this.platform.create(600, 528, "platform").setAlpha(0);
//     this.platform.create(245, 432, "platform").setAlpha(0);
//     this.platform.create(200, 432, "platform").setAlpha(0);
//     this.platform.create(745, 432, "platform").setAlpha(0);
//     //this.platform.create(100, 400, "platform");
//     //this.platform.create(600, 500, "platform");

//     //Ceiling
//     this.platform.create(3435, 785, "platform").setAlpha(0);
//     this.platform.create(3275, 753, "platform").setAlpha(0);
//     this.platform.create(3243, 721, "platform").setAlpha(0);
//     this.platform.create(2840, 689, "platform").setAlpha(0);
//     this.platform.create(2440, 689, "platform").setAlpha(0);
//     this.platform.create(2040, 689, "platform").setAlpha(0);
//     this.platform.create(1640, 689, "platform").setAlpha(0);
//     this.platform.create(1240, 689, "platform").setAlpha(0);
//     this.platform.create(840, 689, "platform").setAlpha(0);
//     this.platform.create(2040, 689, "platform").setAlpha(0);
//     this.platform.create(2040, 689, "platform").setAlpha(0);
//     // this.platform.visible = false;
//     // this.plat1.setAlpha(.5);
//     this.cursor = this.input.keyboard.createCursorKeys();


//   }

//   createCollision() {
//     this.tile = this.physics.add.staticGroup();
//     //Bottom Tiles
//     this.tile.create(2705, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2737, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2769, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2801, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2833, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2865, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2929, 880, "whiteTile").setAlpha(0);
//     this.tile.create(2961, 880, "whiteTile").setAlpha(0);

//     //Floating Tiles
//     this.tile.create(2608, 848, "whiteTile").setAlpha(0);
//     this.tile.create(2576, 848, "whiteTile").setAlpha(0);
//     this.tile.create(2480, 816, "whiteTile").setAlpha(0);
//     this.tile.create(2448, 816, "whiteTile").setAlpha(0);
//     this.tile.create(2352, 784, "whiteTile").setAlpha(0);
//     this.tile.create(2320, 784, "whiteTile").setAlpha(0);
//     this.tile.create(2224, 784, "whiteTile").setAlpha(0);
//     this.tile.create(2192, 784, "whiteTile").setAlpha(0);
//     this.tile.create(2096, 848, "whiteTile").setAlpha(0);
//     this.tile.create(2064, 848, "whiteTile").setAlpha(0);
//     this.tile.create(1968, 816, "whiteTile").setAlpha(0);
//     this.tile.create(1936, 816, "whiteTile").setAlpha(0);
//     this.tile.create(1840, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1776, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1616, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1712, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1488, 816, "whiteTile").setAlpha(0);
//     this.tile.create(1392, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1328, 848, "whiteTile").setAlpha(0);
//     this.tile.create(1232, 816, "whiteTile").setAlpha(0);
//     this.tile.create(1168, 784, "whiteTile").setAlpha(0);
//     this.tile.create(1072, 848, "whiteTile").setAlpha(0);
//     this.tile.create(976, 816, "whiteTile").setAlpha(0);
//     this.tile.create(1552, 848, "whiteTile").setAlpha(0);
//     this.tile.create(880, 816, "whiteTile").setAlpha(0);




//     //Jumps
//     this.tile.create(3760, 848, "whiteTile").setAlpha(0);
//     this.tile.create(3760, 654, "whiteTile").setAlpha(0);
//     this.tile.create(3760, 463, "whiteTile").setAlpha(0);
//     this.tile.create(3695, 752, "whiteTile").setAlpha(0);
//     this.tile.create(3695, 560, "whiteTile").setAlpha(0);
//     this.tile.create(3664, 464, "whiteTile").setAlpha(0);
//     this.tile.create(3664, 432, "whiteTile").setAlpha(0);
    

//     //Top floor jump 1
//     this.tile.create(1936, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1904, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1968, 400, "whiteTile").setAlpha(0);
//     this.tile.create(2000, 400, "whiteTile").setAlpha(0);

//     //Top floor jump 2
//     this.tile.create(1744, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1712, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1680, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1648, 400, "whiteTile").setAlpha(0);
//     this.tile.create(1616, 400, "whiteTile").setAlpha(0);

//     this.tile.create(686, 818, "whiteTile").setAlpha(0);
//     this.tile.create(654, 818, "whiteTile").setAlpha(0);
//     this.tile.create(622, 818, "whiteTile").setAlpha(0);
//     this.tile.create(590, 818, "whiteTile").setAlpha(0);
//     this.tile.create(558, 818, "whiteTile").setAlpha(0);

//     //this.cursor = this.input.keyboard.createCursorKeys();
//   }

//   createLong() {
//     this.long = this.physics.add.staticGroup();

//     //Jump Corridor
//     this.long.create(3793, 880, "whitePlatform").setAlpha(0);
//     this.long.create(3793, 720, "whitePlatform").setAlpha(0);
//     this.long.create(3793, 560, "whitePlatform").setAlpha(0);
//     this.long.create(3793, 400, "whitePlatform").setAlpha(0);
//     this.long.create(3664, 720, "whitePlatform").setAlpha(0);
//     this.long.create(3664, 560, "whitePlatform").setAlpha(0);
//     this.long.create(3793, 260, "whitePlatform").setAlpha(0);
    
//     //More
//     this.long.create(2097, 528, "whitePlatform").setAlpha(0);
//     this.long.create(1520, 496, "whitePlatform").setAlpha(0);
//     this.long.create(561, 528, "whitePlatform").setAlpha(0);
//     this.long.create(429, 528, "whitePlatform").setAlpha(0);
//     this.long.create(-16, 336, "whitePlatform").setAlpha(0);
//     this.long.create(-16, 200, "whitePlatform").setAlpha(0);

//     this.long.create(3280, 240, "whitePlatform").setAlpha(0);
//     this.long.create(3248, 240, "whitePlatform").setAlpha(0);
//     this.long.create(718, 750, "whitePlatform").setAlpha(0);
//     this.long.create(528, 750, "whitePlatform").setAlpha(0);
//     this.long.create(-20, 840, "whitePlatform").setAlpha(0);
//     this.long.create(-16, 200, "whitePlatform").setAlpha(0);
//   }
//   createPlayer() {
//     this.player = this.physics.add.sprite(playerX, playerY, "player");
//     // this.player.body.collideWorldBounds = true;
//     this.physics.add.collider(this.player, this.platform);
//     this.physics.add.collider(this.player, this.tile);
//     this.physics.add.collider(this.player, this.long);
//     this.physics.add.collider(this.player, this.enemy);
//     this.player.setBounce(0.1);

//     this.anims.create({
//       key: "still",
//       frames: [{
//         key: "player",
//         frame: 1
//       }],
//       frameRate: 20,
//     });

//     this.anims.create({
//       key: "right",
//       frames: this.anims.generateFrameNumbers("player", {
//         start: 0,
//         end: 3
//       }),
//       frameRate: 10,
//       repeat: -1,
//     });


//     this.anims.create({
//       key: "jump",
//       frames: [{
//         key: "player",
//         frame: 5
//       }],
//       frameRate: 20,
//     });

//     this.anims.create({
//       key: "punch",
//       frames: this.anims.generateFrameNumbers("player", {
//         start: 7,
//         end: 12
//       }),
//       frameRate: 15,
//       repeat: -1,
//     });
//   }
//   createEnemy(x, y, ID) {
//     this.enemy = this.physics.add.sprite(x, y, ID);
//     this.enemy.body.collideWorldBounds = true;
//     this.physics.add.collider(this.enemy, this.tile);
//     this.physics.add.collider(this.enemy, this.long);
//     this.physics.add.collider(this.enemy, this.platform);
//     this.physics.add.collider(this.player, this.enemy, this.hitEnemy, null, this);
//     this.enemy.setBounce(0.1);
//     this.enemy.setVelocityX(enemySpeed);

//     this.anims.create({
//       key: "right",
//       frames: this.anims.generateFrameNumbers(ID, {
//         start: 4,
//         end: 7
//       }),
//       frameRate: 10,
//       repeat: -1,
//     });
//   }
//   diamondCreation(x, y, item_name) {
//     this.diamond = this.add.group();
//     this.diamond.enableBody = true;
//     this.diamond = this.physics.add.sprite(x, y, item_name);
//     this.diamond.setBounce(0.1);
//     this.diamond.body.collideWorldBounds = true;
//     this.physics.add.collider(this.diamond, this.platform);
//     this.physics.add.overlap(this.player, this.diamond, this.collectDiamond, null, this);
//     this.diamond.setScale(1);

//     this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
//     this.scoreText = this.add.text(500, 15, "Score: ", {
//       fontSize: "20px",
//       fill: "#000",
//     });
//     this.scoreText.setScrollFactor(0);
//   }
//   CavemanRobesCreation(x, y){
//     this.cavemanRobes = this.add.group();
//     this.cavemanRobes.enableBody = true;
//     this.cavemanRobes = this.physics.add.sprite(x, y, 'CavemanRobes');
//     this.cavemanRobes.setBounce(0.1);
//     this.cavemanRobes.body.collideWorldBounds = true;
//     this.physics.add.collider(this.cavemanRobes, this.platform);
//     this.physics.add.overlap(this.player, this.cavemanRobes, this.collectCavemanRobes, null, this);
//     this.cavemanRobes.setScale(1);
//   }
//   DinosaurBoneCreation(x, y){
//     this.dinosaurBone = this.add.group();
//     this.dinosaurBone.enableBody = true;
//     this.dinosaurBone = this.physics.add.sprite(x, y, 'DinosaurBone');
//     this.dinosaurBone.setBounce(0.1);
//     this.dinosaurBone.body.collideWorldBounds = true;
//     this.physics.add.collider(this.dinosaurBone, this.platform);
//     this.physics.add.overlap(this.player, this.dinosaurBone, this.collectDinosaurBones, null, this);
//     this.dinosaurBone.setScale(1);
//   }
//   PoisonedBerryCreation(x, y){
//     this.poisonedBerry = this.add.group();
//     this.poisonedBerry.enableBody = true;
//     this.poisonedBerry = this.physics.add.sprite(x, y, 'PoisonedBerry');
//     this.poisonedBerry.setBounce(0.1);
//     this.poisonedBerry.body.collideWorldBounds = true;
//     this.physics.add.collider(this.poisonedBerry, this.platform);
//     this.physics.add.overlap(this.player, this.poisonedBerry, this.collectPoisonedBerry, null, this);
//     this.poisonedBerry.setScale(1);
//   }

//   // multiItem(x, y, item){
//   //   this.tempItem = this.physics.add.sprite(i * 70, 0, item)
//   // }

//   healthCreation() {
//     this.backGroundBar = this.add.image(100, 20, "redHB");
//     // this.backGroundBar.fixedToCamera = true;
//     this.backGroundBar.setScrollFactor(0);

//     this.healthBar = this.add.image(gameBarX, 20, "greenHB");
//     // this.healthBar.fixedToCamera = true;
//     this.healthBar.setScrollFactor(0);

//     this.healthLabel = this.add.text(5, 30, "Health " + playerHealth, {
//       fontsize: "20px",
//       fill: "#ffffff",
//     });
//     // this.healthLabel.fixedToCamera = true;
//     this.healthLabel.setScrollFactor(0);
//   }

//   playerMovement() {
//     if (this.cursor.right.isDown) {
//       this.player.body.setVelocityX(maxVelocityX);
//       this.player.anims.play("right", true);
//       //if player was not facing right before, flip them to face right
//       if (!playerFacingRight) {
//         this.player.toggleFlipX();
//       }
//       playerFacingRight = true;
//       //if left arrow is pressed, move them left and animate also
//     } else if (this.cursor.left.isDown) {
//       this.player.body.setVelocityX(-maxVelocityX);
//       this.player.anims.play("right", true);
//       //if player was not facing left before, flip them to face left
//       if (playerFacingRight) {
//         this.player.toggleFlipX();
//       }
//       playerFacingRight = false;
//       //player punch
//     } else if(attackKey.isDown) {
//       console.log('A key pressed - punch');
//       this.player.anims.play("punch", true);
//    } else {
//       //if no keys are pressed, stop their x motion and stop animating
//       this.player.anims.play("still", true);
//       this.player.body.setVelocityX(0);
//     }
//     //if up arrow is pressed while character is standing on a surface, player jumps
//     if (this.cursor.up.isDown && this.player.body.onFloor() /*|| player.body.onWall()*/ ) {
//       this.player.setVelocityY(-250);
//       //player.anims.play('jump', true);
//     }
//     if (!this.player.body.onFloor()) {
//       this.player.anims.play("jump", true);
//     }


//   }
//   enemyMovement() {
//     if (this.enemy.x > enemyRight && this.enemy.body.velocity.x > 0) {
//       this.enemy.setVelocityX(-enemySpeed);
//       // this.enemy.anims.play("right", true);
//     } else if (this.enemy.x < enemyLeft && this.enemy.body.velocity.x < 0) {
//       this.enemy.setVelocityX(enemySpeed);
//     } else if (this.enemy.body.velocity.x == 0) {
//       this.enemy.setVelocityX(enemySpeed);
//     }
//   }
//   // platformMovement(){
//   //   console.log(this.movingPlatform)
//   // }
//   collectDiamond(player, diamond) {
//     diamond.disableBody(true, true);
//     score += 10;
//     this.scoreText.setText("Score: " + score);
//   }
//   collectCavemanRobes(player, cavemanRobes){
//     cavemanRobes.disableBody(true, true);
//     score += 10;
//     this.scoreText.setText("Score: " + score);
//     this.UpdateItems("CavemanRobes");
//   }
//   collectDinosaurBones(player, dinosaurBone){
//     dinosaurBone.disableBody(true, true);
//     score += 10;
//     this.scoreText.setText("Score: " + score);
//     this.UpdateItems("DinosaurBone");
//   }
//   collectPoisonedBerry(player, poisonedBerry){
//     poisonedBerry.disableBody(true, true);
//     score += 10;
//     this.scoreText.setText("Score: " + score);
//     this.UpdateItems("PoisonedBerry");
//   }

//   ExitCreation(){
//     this.ExitDoor = this.physics.add.sprite(760, 450, "player");
//     this.physics.add.collider(this.ExitDoor, this.platform);
//     this.physics.add.overlap(this.ExitDoor, this.player, this.Exit, null, this);
//   }
//   hitEnemy(player, enemy) {
//     if (this.player.y < this.enemy.y - 30) {
//       this.enemy.disableBody(true, true);
//     } else if (player.anims.isPlaying && player.anims.currentAnim.key === "punch" &&
//       ((playerFacingRight && player.x < enemy.x) ||
//         (!playerFacingRight && player.x >= enemy.x))) {
//       this.enemy.disableBody(true, true);
//       player.setVelocityX(0);
//     } else {
//       //if player touches enemy from the side, player loses health
//       playerHealth -= 10;
//       if (playerHealth >= 0) {
//         this.healthLabel.setText("Health: " + playerHealth);
//         //healthBar.setScale(playerHealth/playerMaxHealth, 1);
//       }
//       //move green health bar off screen for player health lost
//       this.healthBar.x -= 2 * (healthLossAmount);
//       // console.log(this.healthBar.x);
//       if (playerHealth <= 0) {
//         console.log("Call gameOver Scene here! Don't pause the physics");
//         this.player.setTint(0xff0000);
//         this.gameOver();
//       }
//       // health.disableBody(true, true);
//       // knockback player on collision with enemy from side and have enemy move away from player
//       if (this.player.x < this.enemy.x) {
//         this.player.x -= knockback;
//         this.enemy.setVelocityX(enemySpeed);
//       } else {
//         this.player.x += knockback;
//         this.enemy.setVelocityX(-enemySpeed);
//       }
//     }
//   }
//   gameOver(){
//     this.physics.pause();
//     this.gameOverState = true;
//     this.gameOverText.setScrollFactor(0);
//     this.gameOverText.visible = true;
//     this.input.on('pointerdown', () => this.scene.start('intro'));

//   }
//   Exit(){
//     console.log("collision");
//     if(numItems > 2){
//       this.scene.start('level2');
//     }
//   }
//   UpdateItems(item_name){
//     this.items = this.add.sprite(280 + (32*numItems), 20, item_name).setScrollFactor(0);
//     itemsArr[numItems] = this.items;
//     itemsArr[numItems].visible = true;
//     numItems++;
//     console.log('numItems: ' + numItems);
//   }
// }

// export default GameScene;


import { Scene } from "phaser";


let player;
// let playerX = 600;
// let playerY = 851;
// let playerY = 300;
let playerHealth = 100;
let playerMaxHealth = 100;
let items;
let itemsArr = new Array(2);

const maxVelocityX = 200; // maximum player velocity in x direction

let enemy;
let enemyX = 500;
let enemyY = 150;
const enemySpeed = 100; // speed of enemy movement
const enemyLeft = 400; // left bound for enemy
const enemyRight = 1500;

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

class GameScene extends Scene {
  constructor() {
    super('level1')
  }
  preload() {
    //this.load.image("logo", "assets/logo.png");

    this.load.image("background", "Assets/World1.png");
    this.load.spritesheet("player", "Assets/PlayerSpriteSheetHorizontal.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("Caveman1", "assets/Level1Enemies/Caveman1.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.image("platform", "Assets/platform.png");
    // this.load.spritesheet("bullets", "Assets/walkingSpritesheet.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    // this.load.spritesheet("health", "Assets/walkingSpritesheet.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    this.load.image("diamond", "Assets/diamond.png");
    this.load.image("greenHB", "Assets/greenHB.png");
    this.load.image("redHB", "Assets/redHB.png");

    this.load.image("CavemanRobes", "assets/items/CavemanRobes.png");
    this.load.image("CureAllPotion", "assets/items/CureAllPotion.png");
    this.load.image("DinosaurBone", "assets/items/DinosaurBone.png");
    this.load.image("NES", "assets/items/NES.png");
    this.load.image("PoisonedBerry", "assets/items/PoisonedBerry.png");
    this.load.image("RubixCube", "assets/items/RubixCube.png");
    this.load.image("SignedBCPoster", "assets/items/SignedBCPoster.png");
    this.load.image("TalkingToothbrush", "assets/items/TalkingToothbrush.png");
    this.load.image("ToyRobot", "assets/items/ToyRobot.png");
    this.load.image("whiteTile", "assets/Blank.png");
    this.load.image("whitePlatform", "assets/Blank2.png");


  }
  create() {
    const background = this.add.image(0, 0, 'background').setScale(1).setScrollFactor(1);;
    background.setOrigin(0, 0);
    this.createPlatforms();
    this.createCollision();
    this.createLong();
    this.createPlayer(100, 800);
    // this.createEnemy(200, 850, "Caveman1");
    // this.diamondCreation(1000, 900);
    this.createEnemy(1100, 200, "Caveman1")
    this.CavemanRobesCreation(700, 200);
    this.DinosaurBoneCreation(650, 200);
    this.PoisonedBerryCreation(400, 200);
    this.healthCreation();
    // this.createMovingPlatforms();
    this.ExitCreation();
    attackKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    // this.gameOverText = this.add.text(400, 300, 'Game Over', {
    //   fontSize: '64px',
    //   fill: '#000'
    // })
    // this.gameOverText.setOrigin(0.5);
    // this.gameOverText.visible = false;

    this.cameras.main.startFollow(this.player);


    this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
    this.scoreText = this.add.text(500, 15, "Score: " + score, {
      fontSize: "20px",
      fill: "#000",
    });
    this.scoreText.setScrollFactor(0);
  }
  update() {
    this.playerMovement();
    // this.enemyMovement();
    // this.platformMovement();
    if(this.player.y > 650){
      //this.gameOver();
    }
    console.log('player at: '+this.player.body.x+','+this.player.body.y);
    console.log('enemy at: '+this.enemy.body.x+','+this.enemy.body.y);
    console.log('bone at: '+this.dinosaurBone.body.x+','+this.dinosaurBone.body.y);

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
    this.platform.create(60, 200, "platform").setAlpha(0);
    //this.platform.create(600, 300, "platform");
    this.platform.create(100, 943, "platform").setAlpha(0);
    this.platform.create(250, 943, "platform").setAlpha(0);
    this.platform.create(400, 943, "platform").setAlpha(0);
    this.platform.create(600, 943, "platform").setAlpha(0);
    this.platform.create(1064, 975, "platform").setAlpha(0);
    this.platform.create(1450, 975, "platform").setAlpha(0);
    this.platform.create(1850, 975, "platform").setAlpha(0);
    this.platform.create(2250, 975, "platform").setAlpha(0);
    this.platform.create(2450, 975, "platform").setAlpha(0);
    this.platform.create(3240, 944, "platform").setAlpha(0);
    this.platform.create(3600, 944, "platform").setAlpha(0);
    

    //Top Floors
    this.platform.create(3450, 432, "platform").setAlpha(0);
    this.platform.create(3100, 432, "platform").setAlpha(0);
    this.platform.create(2800, 432, "platform").setAlpha(0);
    this.platform.create(2400, 432, "platform").setAlpha(0);
    this.platform.create(2280, 432, "platform").setAlpha(0);
    //this.platform.create(1900, 432, "platform").setAlpha(0.5);

    this.platform.create(1890, 530, "platform").setAlpha(0);
    this.platform.create(1600, 530, "platform").setAlpha(0);
    this.platform.create(1305, 432, "platform").setAlpha(0);
    this.platform.create(905, 432, "platform").setAlpha(0);
    this.platform.create(747, 432, "platform").setAlpha(0);
    this.platform.create(600, 528, "platform").setAlpha(0);
    this.platform.create(245, 432, "platform").setAlpha(0);
    this.platform.create(200, 432, "platform").setAlpha(0);
    this.platform.create(745, 432, "platform").setAlpha(0);
    //this.platform.create(100, 400, "platform");
    //this.platform.create(600, 500, "platform");

    //Ceiling
    this.platform.create(3435, 785, "platform").setAlpha(0);
    this.platform.create(3275, 753, "platform").setAlpha(0);
    this.platform.create(3243, 721, "platform").setAlpha(0);
    this.platform.create(2840, 689, "platform").setAlpha(0);
    this.platform.create(2440, 689, "platform").setAlpha(0);
    this.platform.create(2040, 689, "platform").setAlpha(0);
    this.platform.create(1640, 689, "platform").setAlpha(0);
    this.platform.create(1240, 689, "platform").setAlpha(0);
    this.platform.create(840, 689, "platform").setAlpha(0);
    this.platform.create(2040, 689, "platform").setAlpha(0);
    this.platform.create(2040, 689, "platform").setAlpha(0);
    // this.platform.visible = false;
    // this.plat1.setAlpha(.5);
    this.cursor = this.input.keyboard.createCursorKeys();


  }

  createCollision() {
    this.tile = this.physics.add.staticGroup();
    //Bottom Tiles
    this.tile.create(2705, 880, "whiteTile").setAlpha(0);
    this.tile.create(2737, 880, "whiteTile").setAlpha(0);
    this.tile.create(2769, 880, "whiteTile").setAlpha(0);
    this.tile.create(2801, 880, "whiteTile").setAlpha(0);
    this.tile.create(2833, 880, "whiteTile").setAlpha(0);
    this.tile.create(2865, 880, "whiteTile").setAlpha(0);
    this.tile.create(2929, 880, "whiteTile").setAlpha(0);
    this.tile.create(2961, 880, "whiteTile").setAlpha(0);

    //Floating Tiles
    this.tile.create(2608, 848, "whiteTile").setAlpha(0);
    this.tile.create(2576, 848, "whiteTile").setAlpha(0);
    this.tile.create(2480, 816, "whiteTile").setAlpha(0);
    this.tile.create(2448, 816, "whiteTile").setAlpha(0);
    this.tile.create(2352, 784, "whiteTile").setAlpha(0);
    this.tile.create(2320, 784, "whiteTile").setAlpha(0);
    this.tile.create(2224, 784, "whiteTile").setAlpha(0);
    this.tile.create(2192, 784, "whiteTile").setAlpha(0);
    this.tile.create(2096, 848, "whiteTile").setAlpha(0);
    this.tile.create(2064, 848, "whiteTile").setAlpha(0);
    this.tile.create(1968, 816, "whiteTile").setAlpha(0);
    this.tile.create(1936, 816, "whiteTile").setAlpha(0);
    this.tile.create(1840, 784, "whiteTile").setAlpha(0);
    this.tile.create(1776, 784, "whiteTile").setAlpha(0);
    this.tile.create(1616, 784, "whiteTile").setAlpha(0);
    this.tile.create(1712, 784, "whiteTile").setAlpha(0);
    this.tile.create(1488, 816, "whiteTile").setAlpha(0);
    this.tile.create(1392, 784, "whiteTile").setAlpha(0);
    this.tile.create(1328, 848, "whiteTile").setAlpha(0);
    this.tile.create(1232, 816, "whiteTile").setAlpha(0);
    this.tile.create(1168, 784, "whiteTile").setAlpha(0);
    this.tile.create(1072, 848, "whiteTile").setAlpha(0);
    this.tile.create(976, 816, "whiteTile").setAlpha(0);
    this.tile.create(1552, 848, "whiteTile").setAlpha(0);
    this.tile.create(880, 816, "whiteTile").setAlpha(0);




    //Jumps
    this.tile.create(3760, 848, "whiteTile").setAlpha(0);
    this.tile.create(3760, 654, "whiteTile").setAlpha(0);
    this.tile.create(3760, 463, "whiteTile").setAlpha(0);
    this.tile.create(3695, 752, "whiteTile").setAlpha(0);
    this.tile.create(3695, 560, "whiteTile").setAlpha(0);
    this.tile.create(3664, 464, "whiteTile").setAlpha(0);
    this.tile.create(3664, 432, "whiteTile").setAlpha(0);
    

    //Top floor jump 1
    this.tile.create(1936, 400, "whiteTile").setAlpha(0);
    this.tile.create(1904, 400, "whiteTile").setAlpha(0);
    this.tile.create(1968, 400, "whiteTile").setAlpha(0);
    this.tile.create(2000, 400, "whiteTile").setAlpha(0);

    //Top floor jump 2
    this.tile.create(1744, 400, "whiteTile").setAlpha(0);
    this.tile.create(1712, 400, "whiteTile").setAlpha(0);
    this.tile.create(1680, 400, "whiteTile").setAlpha(0);
    this.tile.create(1648, 400, "whiteTile").setAlpha(0);
    this.tile.create(1616, 400, "whiteTile").setAlpha(0);

    this.tile.create(686, 818, "whiteTile").setAlpha(0);
    this.tile.create(654, 818, "whiteTile").setAlpha(0);
    this.tile.create(622, 818, "whiteTile").setAlpha(0);
    this.tile.create(590, 818, "whiteTile").setAlpha(0);
    this.tile.create(558, 818, "whiteTile").setAlpha(0);

    //this.cursor = this.input.keyboard.createCursorKeys();
  }

  createLong() {
    this.long = this.physics.add.staticGroup();

    //Jump Corridor
    this.long.create(3793, 880, "whitePlatform").setAlpha(0);
    this.long.create(3793, 720, "whitePlatform").setAlpha(0);
    this.long.create(3793, 560, "whitePlatform").setAlpha(0);
    this.long.create(3793, 400, "whitePlatform").setAlpha(0);
    this.long.create(3664, 720, "whitePlatform").setAlpha(0);
    this.long.create(3664, 560, "whitePlatform").setAlpha(0);
    this.long.create(3793, 260, "whitePlatform").setAlpha(0);
    
    //More
    this.long.create(2097, 528, "whitePlatform").setAlpha(0);
    this.long.create(1520, 496, "whitePlatform").setAlpha(0);
    this.long.create(561, 528, "whitePlatform").setAlpha(0);
    this.long.create(429, 528, "whitePlatform").setAlpha(0);
    this.long.create(-16, 336, "whitePlatform").setAlpha(0);
    this.long.create(-16, 200, "whitePlatform").setAlpha(0);

    this.long.create(3280, 240, "whitePlatform").setAlpha(0);
    this.long.create(3248, 240, "whitePlatform").setAlpha(0);
    this.long.create(718, 750, "whitePlatform").setAlpha(0);
    this.long.create(528, 750, "whitePlatform").setAlpha(0);
    this.long.create(-20, 840, "whitePlatform").setAlpha(0);
    this.long.create(-16, 200, "whitePlatform").setAlpha(0);
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
  createEnemy(x, y, ID) {
    this.enemy = this.physics.add.sprite(x, y, ID);
    this.enemy.body.collideWorldBounds = true;
    this.physics.add.collider(this.enemy, this.tile);
    this.physics.add.collider(this.enemy, this.long);
    this.physics.add.collider(this.enemy, this.platform);
    this.physics.add.collider(this.player, this.enemy, this.hitEnemy, null, this);
    this.enemy.setBounce(0.1);
    // this.enemy.setVelocityX(enemySpeed);

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers(ID, {
        start: 4,
        end: 7
      }),
      frameRate: 10,
      repeat: -1,
    });
  }
  diamondCreation(x, y) {
    this.diamond = this.add.group();
    this.diamond.enableBody = true;
    this.diamond = this.physics.add.sprite(x, y, "diamond");
    this.diamond.setBounce(0.1);
    this.diamond.body.collideWorldBounds = true;
    this.physics.add.collider(this.diamond, this.platform);
    this.physics.add.overlap(this.player, this.diamond, this.collectDiamond, null, this);
    this.diamond.setScale(1);

    this.diamond = this.add.sprite(480, 20, "diamond").setScrollFactor(0);
    this.scoreText = this.add.text(500, 15, "Score: ", {
      fontSize: "20px",
      fill: "#000",
    });
    this.scoreText.setScrollFactor(0);
  }

  CavemanRobesCreation(x, y){
    this.cavemanRobes = this.add.group();
    this.cavemanRobes.enableBody = true;
    this.cavemanRobes = this.physics.add.sprite(x, y, 'CavemanRobes');
    this.cavemanRobes.setBounce(0.1);
    this.cavemanRobes.body.collideWorldBounds = true;
    this.physics.add.collider(this.cavemanRobes, this.platform);
    this.physics.add.overlap(this.player, this.cavemanRobes, this.collectCavemanRobes, null, this);
    this.cavemanRobes.setScale(1);
  }
  DinosaurBoneCreation(x, y){
    this.dinosaurBone = this.add.group();
    this.dinosaurBone.enableBody = true;
    this.dinosaurBone = this.physics.add.sprite(x, y, 'DinosaurBone');
    this.dinosaurBone.setBounce(0.1);
    this.dinosaurBone.body.collideWorldBounds = true;
    this.physics.add.collider(this.dinosaurBone, this.platform);
    this.physics.add.collider(this.dinosaurBone, this.tile);
    this.physics.add.collider(this.dinosaurBone, this.long);
    this.physics.add.overlap(this.player, this.dinosaurBone, this.collectDinosaurBones, null, this);
    this.dinosaurBone.setScale(1);
  }
  PoisonedBerryCreation(x, y){
    this.poisonedBerry = this.add.group();
    this.poisonedBerry.enableBody = true;
    this.poisonedBerry = this.physics.add.sprite(x, y, 'PoisonedBerry');
    this.poisonedBerry.setBounce(0.1);
    this.poisonedBerry.body.collideWorldBounds = true;
    this.physics.add.collider(this.poisonedBerry, this.platform);
    this.physics.add.overlap(this.player, this.poisonedBerry, this.collectPoisonedBerry, null, this);
    this.poisonedBerry.setScale(1);
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
      this.player.setVelocityY(-250);
      //player.anims.play('jump', true);
    }
    if (!this.player.body.onFloor()) {
      this.player.anims.play("jump", true);
    }


  }
  enemyMovement() {
    if (this.enemy.x > enemyRight && this.enemy.body.velocity.x > 0) {
      this.enemy.setVelocityX(-enemySpeed);
      // this.enemy.anims.play("right", true);
    } else if (this.enemy.x < enemyLeft && this.enemy.body.velocity.x < 0) {
      this.enemy.setVelocityX(enemySpeed);
      // this.enemy.anims.play("right", true);
    } else if (this.enemy.body.velocity.x == 0) {
      this.enemy.setVelocityX(enemySpeed);
    }
  }
  // platformMovement(){
  //   console.log(this.movingPlatform)
  // }
  collectDiamond(player, diamond) {
    diamond.disableBody(true, true);
    score += 10;
    this.scoreText.setText("Score: " + score);
  };
  collectCavemanRobes(player, cavemanRobes){
    cavemanRobes.disableBody(true, true);
    score += 10;
    this.scoreText.setText("Score: " + score);
    this.UpdateItems("CavemanRobes");
  }
  collectDinosaurBones(player, dinosaurBone){
    dinosaurBone.disableBody(true, true);
    score += 10;
    this.scoreText.setText("Score: " + score);
    this.UpdateItems("DinosaurBone");
  }
  collectPoisonedBerry(player, poisonedBerry){
    poisonedBerry.disableBody(true, true);
    score += 10;
    this.scoreText.setText("Score: " + score);
    this.UpdateItems("PoisonedBerry");
  }

  ExitCreation(){
    this.ExitDoor = this.physics.add.sprite(100, 250, "player");
    this.ExitDoor.visible = false;
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
    this.gameOverText = this.add.text(400, 300, 'Game Over', {
      fontSize: '64px',
      fill: '#000'
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
        this.scene.start('level2');
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
  

export default GameScene;
