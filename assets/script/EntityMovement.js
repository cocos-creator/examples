/**
 * EntityMovement Component
 * This component use Entity.animate function to move sheep sprite along a series of positions.
 * Also use animate's callback function to play SpriteAnimation when animate stops.
 */

var Comp = Fire.Class({
    extends: Fire.Component,
    constructor: function() {
        // instance variable to store the SpriteAnimation component in this entity
        this.anim = null;
    },

    properties: {
        // properties to set run and jump animation duration
        runDuration: 2,
        jumpDuration: 1,
        jumpHeight: 250
    },

    onLoad: function() {
        // get SpriteAnimation component
        this.anim = this.getComponent(Fire.SpriteAnimation);
    },
    //  start animation sequence when game starts
    start: function () {
        // store component instance to self
        var self = this;
        // set the position we set in scene view to be the starting position
        var startPos = this.transform.position;
        // play run sprite animation
        self.anim.play('run');
        // start animate on this entity and create an AnimationNode as handle
        // so you can control it later
        var animNode1 = this.entity.animate(
            // first parameter is an array of key frames
            [
                // Component name as first property
                {
                    "Fire.Transform": {
                        // property whose value to animate
                        "position": startPos // set startPos as the first key frame property's value
                    },
                    // We also need to specify a normalized time mark for a key frame
                    // with 'offset' property with a value from 0 to 1.
                    // 0 means at the very beginning of the animation process;
                    // 1 means the key frame is at the very end.
                    offset: 0
                },
                {
                    "Fire.Transform": {
                        "position": Fire.Vec2.zero // set Vec2.zero as the last key frame property's value
                    },
                    offset: 1
                }
            ],
            {
                // delay the animation for a bit
                delay: 0.5,
                // the total duration of the animation in seconds
                duration: self.runDuration
            }
        );
        // add a 'stop' event callback handler to the AnimationNode we just created
        animNode1.on('stop', function() {
            // get SpriteAnimationState for a certain clip
            var jumpAnimState = self.anim.getAnimState('jump');
            // calculate the animation speed according to how long we want the duration
            jumpAnimState.speed = jumpAnimState.length/self.jumpDuration;
            // start play jump sprite animation
            self.anim.play('jump');
            // animate entity to perform a jump movement
            self.entity.animate([{
                "Fire.Transform": {
                    "position": Fire.Vec2.zero
                },
                offset: 0 // start key frame
              },{
                "Fire.Transform": {
                    "position": Fire.v2(0, self.jumpHeight)
                },
                offset: 0.5 // the key frame in the middle
              },{
                "Fire.Transform": {
                    "position": Fire.Vec2.zero
                },
                offset: 1 // the last key frame at the end
              }
            ], {
                duration: self.jumpDuration
            }).on('stop', function() {
                // when jump finishes, play down to the ground sprite animation
                self.anim.play('down');
            });
        });
    },

    //  called every frame
    update: function () {

    }
});
