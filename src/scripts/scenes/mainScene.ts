//mport ExampleObject from '../objects/exampleObject';
import {Beam} from '../objects/beam';
import { Explosion } from '../objects/explosion';
export default class MainScene extends Phaser.Scene {
  //private exampleObject: ExampleObject;
  background: Phaser.GameObjects.TileSprite;
  ship1: Phaser.GameObjects.Sprite;
  ship2: Phaser.GameObjects.Sprite;
  ship3: Phaser.GameObjects.Sprite;
  powerUps: Phaser.Physics.Arcade.Group;
  player: Phaser.Physics.Arcade.Sprite;
  cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
  spacebar: Phaser.Input.Keyboard.Key;
  projectile: Phaser.GameObjects.Group;
  beam: Phaser.GameObjects.Sprite;
  enemies: Phaser.Physics.Arcade.Group;
  scoreLabel: Phaser.GameObjects.Text;
  scoreCount: number;
  scoreCountLabel: Phaser.GameObjects.Text;
  playerSpeed = 200;
  
  constructor() {
    super({ key: 'MainScene' });
  }

  
  create() {
    this.background = this.add.tileSprite(0,0, this.game.scale.width, this.game.scale.height,"spacegif");
    this.background.setOrigin(0,0);

    var graphics = this.add.graphics();
    graphics.fillStyle(0x000000, 1);
    graphics.beginPath();
    graphics.moveTo(0,0);
    graphics.lineTo(this.scale.width, 0);
    graphics.lineTo(this.scale.width, 20);
    graphics.lineTo(0,20);
    graphics.lineTo(0,0);
    graphics.closePath();
    graphics.fillPath();
    this.scoreLabel = this.add.text(0,0, "Score: ");
    this.scoreCount = 0;
    this.scoreCountLabel = this.add.text(60,0, this.scoreCount.toString());

    this.ship1 = this.add.sprite(this.scale.width/2 -50, this.scale.height/2, "ship");
    this.ship2 = this.add.sprite(this.scale.width/2, this.scale.height/2, "ship2");
    this.ship3 = this.add.sprite(this.scale.width/2+50, this.scale.height/2, "ship3");
    
    this.powerUps = this.physics.add.group();

    var maxObjects = 4;
    for (var i = 0; i <= maxObjects; i++) {
      var powerUp = this.physics.add.sprite(16,16,"power-up");
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0,0, this.game.scale.width, this.game.scale.height);
      
      if (Math.random() > 0.5) {
        powerUp.play("red");
      } else {
        powerUp.play("grey");
      }

      powerUp.setVelocity(100,100);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    }

    //added ships
    this.ship1.play("ship1_anim");
    this.ship2.play("ship2_anim");
    this.ship3.play("ship3_anim");
    //added enemies
    this.enemies = this.physics.add.group();
    this.enemies.add(this.ship1);
    this.enemies.add(this.ship2);
    this.enemies.add(this.ship3);
    //ships are interactive
    this.ship1.setInteractive();
    this.ship2.setInteractive();
    this.ship3.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

    //this.exampleObject = new ExampleObject(this, 0, 0);
    
    this.player = this.physics.add.sprite(this.scale.width/2 - 8, this.scale.height - 64, "player");
    this.player.play("thrust");
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.projectile = this.add.group();

    //adding collisions
    this.physics.add.overlap(this.projectile, this.enemies, this.hitEnemy, function(){}, this);
    this.physics.add.overlap(this.player, this.enemies, this.hurtPlayer, function(){}, this);
    this.physics.add.overlap(this.player, this.powerUps, this.pickPowerUp, function(){}, this);
    this.physics.add.collider(this.projectile, this.powerUps, function(projectile, powerUp) {
      projectile.destroy();
      powerUp.destroy();
    });
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);

    this.background.tilePositionY -= 0.5;
    this.background.tilePositionX -= 0.5;
    this.movePlayerManager();

    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      if(this.player.active) {
        this.shootBeam();
      }
    }
    
    for(var i = 0; i < this.projectile.getChildren().length; i++) {
      var beam = this.projectile.getChildren()[i];
      beam.update();
    }
  }
  movePlayerManager() {
    if(this.cursorKeys.left?.isDown){
      this.player.setVelocityX(-this.playerSpeed);
    } 
    else if(this.cursorKeys.right?.isDown){
      this.player.setVelocityX(this.playerSpeed);
    }

    if(this.cursorKeys.up?.isDown){
      this.player.setVelocityY(-this.playerSpeed);
    }
    else if(this.cursorKeys.down?.isDown){
      this.player.setVelocityY(this.playerSpeed);
    }
  }
  moveShip(ship,speed) {
    ship.y += speed;
    if (ship.y > this.scale.height) {
      this.resetShipPos(ship);
    } 
  }
  resetShipPos(ship) {
    ship.y = 0;
    var randomX = Phaser.Math.Between(0, this.scale.width);
    ship.x = randomX;
  }
  destroyShip(pointer, gameObject) {
    gameObject.setTexture("explosion");
    gameObject.play("explosion_anim");
  }
  shootBeam() {
    let beam = new Beam(this);
  }
  pickPowerUp(player, powerUp) {
    powerUp.disableBody(true,true);
    this.playerSpeed += 20;
  }
  hurtPlayer(player, enemy) {
    this.scoreCount -= 15;
    this.scoreCountLabel.setText(this.scoreCount.toString());
    this.resetShipPos(enemy);
    this.playerSpeed = 200;
    var explosion = new Explosion(this, player.x, player.y);
    player.disableBody(true,true);
    this.time.addEvent({
      delay: 1000,
      callback: this.resetPlayer,
      callbackScope: this,
      loop: false
    });
  }
  hitEnemy(projectile, enemy){
    
    var explosion = new Explosion(this, enemy.x, enemy.y);
    
    projectile.destroy();
    this.resetShipPos(enemy);
    this.scoreCount += 15;
    this.scoreCountLabel.setText(this.scoreCount.toString());
  }
  resetPlayer(){
    var x = this.scale.width /2 -8;
    var y = this.scale.height + 64;
    this.player.enableBody(true, x, y, true, true);
  }
}
