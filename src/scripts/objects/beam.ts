import {Scene} from "phaser";
export class Beam extends Phaser.GameObjects.Sprite {
    body: Phaser.Physics.Arcade.Body;
    projectile: Phaser.Physics.Arcade.Group;
    constructor(scene){
        var x = scene.player.x;
        var y = scene.player.y - 16;
        super(scene, x, y, "beam");
        scene.add.existing(this);
        scene.projectile.add(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = -250;

    }

    update(){
        if(this.y < 32) {
            this.destroy();
        }
    }  
}