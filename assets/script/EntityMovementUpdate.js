/**
 * EntityMovementUpdate Component
 * What we want to achieve is the same as EntityMovment Component, but this time we will move the entity
 * by set position in update each frame.
 */

var Comp = Fire.Class({
    extends: Fire.Component,
    constructor: function() {
        // instance variable to store the SpriteAnimation component in this entity
        this.anim = null;
        // boolean to quickly check which entity animation we are doing
        this.isPlayingRun = false;
        this.isPlayingJump = false;
        // start position of sheep
        this.startPos = null;
        // timer to track how long the current entity animation elapsed
        this.animTimer = 0;
    },

    properties: {
        // properties to set run and jump animation duration
        runDuration: 2,
        jumpDuration: 1,
        // set jump height
        jumpHeight: 250
    },

    onLoad: function() {
        // get SpriteAnimation component
        this.anim = this.getComponent(Fire.SpriteAnimation);
        // store sheep starting position
        this.startPos =  this.transform.position;
    },

    start: function() {
        // when game starts, switch entity movement on by set the boolean to true
        this.isPlayingRun = true;
        // play sprite animation as it goes
        this.anim.play('run');
    },

    update: function() {
        // ratio is a normalized float value represents where we at from start position to end position
        var ratio;
        // we only do position updates when the run movement switch is on
        if(this.isPlayingRun) {
            // calculate ratio using current timer value and total animation duration
            ratio = this.animTimer/this.runDuration;
            // lerp is a helper function to linearly interpolates between two Vec2 values
            // It interpolates between 'from' and 'to' by amount 'ratio'.
            this.transform.position = this.startPos.lerp(Fire.Vec2.zero, ratio);
            // increase timer each frame, Time.deltaTime is the time in seconds it took to complete the last frame
            this.animTimer += Fire.Time.deltaTime;
            // when timer is greater than total duration, we call it an end to this movement
            if (this.animTimer >= this.runDuration) {
                // reset timer
                this.animTimer = 0;
                this.isPlayingRun = false;
                // switch on jump movement
                this.isPlayingJump = true;
                // set start position for jump
                this.startPos = this.transform.position;
                // get SpriteAnimationState for a certain clip
                var jumpAnimState = this.anim.getAnimState('jump')
                // calculate the animation speed according to how long we want the duration
                jumpAnimState.speed = jumpAnimState.length/this.jumpDuration;
                this.anim.play('jump');
            }
        }

        if (this.isPlayingJump) {
            ratio = this.animTimer/this.jumpDuration;
            // if ratio is smaller than half the whole progress, we should move up
            if (ratio <= 0.5) {
                this.transform.position = this.startPos.lerp( Fire.v2(0, this.jumpHeight), ratio);                
            } else { // if ratio is over half way, we should now move towards the ground
                this.transform.position = Fire.v2(0, this.jumpHeight).lerp(this.startPos, ratio);
            }
            this.animTimer += Fire.Time.deltaTime;
            if (this.animTimer >= this.jumpDuration) {
                this.isPlayingRun = false;
                this.isPlayingJump = false;
                // once all movement completes, play down to the ground sprite animation
                this.anim.play('down');
            }
        }

    }
});
