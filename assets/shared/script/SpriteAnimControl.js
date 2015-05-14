/**
 * SpriteAnimControl Component
 * This component shows how to play and stop SpriteAnimation with a script.
 * The default animation is played automatically as soon as game start, 
 * then we delay a few seconds and stop the animation, then play it again, 
 * then play another animation.
 */

var Comp = Fire.Class({
    extends: Fire.Component,
    
    constructor: function() {
        //instance variable to store the SpriteAnimation component in this entity
        this.anim = null;
    },
    
    properties: {
        interval: { //the interval between each delayed action
            default: 2000
        }
    },
    
    onLoad: function() {
        //get SpriteAnimation component
        this.anim = this.getComponent('Fire.SpriteAnimation');
    },
    
    // use this for initialization
    start: function () {
        var self = this;
        setTimeout(function() {
            //stop the current playing animation
            self.anim.stop();
            setTimeout(function() {
                //play an animation by its SpriteAnimationState name, 
                //which by default is the same as the clip asset name
                self.anim.play('run');
                setTimeout(function() {
                    //play another animation
                    self.anim.play('hit');
                }, self.interval);
            }, self.interval);
        }, self.interval);        
    }
});
