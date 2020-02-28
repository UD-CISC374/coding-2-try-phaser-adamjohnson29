class Beam extends Phaser.GameObjects.Sprite {
    body: Phaser.Physics.Arcade.Body;
    constructor(scene){
        var x = scene.player.x;
        var y = scene.player.y - 16;
        super(scene, x, y, "beam");
        scene.add.existing(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;
    }
}