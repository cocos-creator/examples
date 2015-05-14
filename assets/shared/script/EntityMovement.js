/**
 * EntityMovement Component
 */
var Comp = Fire.Class({
    extends: Fire.Component,
    constructor: function() {
        this.anim = null;
    },
    
    properties: {
        runDuration: 2,
        jumpDuration: 1
    },
    
    onLoad: function() {//
        this.anim = this.getComponent(Fire.SpriteAnimation);
    },
    // use this for initialization
    start: function () {
        var self = this;
        var startPos = this.transform.position;
        self.anim.play('run');
        var animNode1 = this.entity.animate([{
                "Fire.Transform": {
                    "position": startPos
                },
                offset: 0
            },{
                "Fire.Transform": {
                    "position": Fire.Vec2.zero
                },
                offset: 1
            }
        ], {
            delay: 0.5,
            duration: self.runDuration
        });
        animNode1.on('stop', function() {
            var jumpAnimState = self.anim.getAnimState('jump')
            jumpAnimState.speed = jumpAnimState.length/self.jumpDuration;
            self.anim.play('jump');
            self.entity.animate([{
                "Fire.Transform": {
                    "position": Fire.Vec2.zero
                },
                offset: 0
              },{
                "Fire.Transform": {
                    "position": Fire.v2(0, 250)
                },
                offset: 0.5
              },{
                "Fire.Transform": {
                    "position": Fire.Vec2.zero
                },
                offset: 1                  
              }
            ], {
                duration: self.jumpDuration
            }).on('stop', function() {
                self.anim.play('down');
            });
        });
    },

    // called every frame
    update: function () {
        
    }
});
