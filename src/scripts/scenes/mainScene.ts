import ExampleObject from '../objects/exampleObject';

export default class MainScene extends Phaser.Scene {
  private exampleObject: ExampleObject;
  background: Phaser.GameObjects.Image;
  ship1: Phaser.GameObjects.Image;
  ship2: Phaser.GameObjects.Image;
  ship3: Phaser.GameObjects.Image;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.background = this.add.image(0,0,"background");
    this.background.setOrigin(0,0);

    this.ship1 = this.add.image(this.scale.width/2 -50, this.scale.height/2, "ship");
    this.ship2 = this.add.image(this.scale.width/2, this.scale.height/2, "ship2");
    this.ship3 = this.add.image(this.scale.width/2+50, this.scale.height/2, "ship3");
    
    this.exampleObject = new ExampleObject(this, 0, 0);
    
    this.add.text(20,20, "Playing game", { 
      font: "25px Arial", 
      fill: "yellow"
    });
  
  }

  update() {
    this.moveShip(this.ship1, 1);
    this.moveShip(this.ship2, 2);
    this.moveShip(this.ship3, 3);
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
}
