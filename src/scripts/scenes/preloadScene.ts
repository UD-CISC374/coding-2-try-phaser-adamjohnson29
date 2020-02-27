export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
  }

  create() {
    this.add.text(20,20, "Loading game...");
    this.scene.start('MainScene');
  }
}