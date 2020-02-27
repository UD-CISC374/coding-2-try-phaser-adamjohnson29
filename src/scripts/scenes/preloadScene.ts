export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.load.image("morty_bg", "assets/morty_bg.jpg");
  }

  create() {
    this.add.text(20,20, "Loading game...");
    this.scene.start('MainScene');
  }
}
