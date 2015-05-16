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
        // instance variable to store the SpriteAnimation component in this entity
        this.anim = null;
    },

    properties: {
        interval: { // the interval between each delayed action
            default: 2000
        }
    },

    onLoad: function() {
        // get SpriteAnimation component
        this.anim = this.getComponent('Fire.SpriteAnimation');
    },

    //  use this for initialization
    start: function () {
        // store component instance to self
        var self = this;
        // use invoke to delay a function call
        self.invoke(function() {
          self.anim.stop();
          self.invoke(function(){
            self.anim.play('run');
            // you can also invoke a instance method name,
            // the second parameter is the delay before function call
            self.invoke('playHit', self.interval);
          }, self.interval);
        }, self.interval);
    },

    // define instance method for invoke
    playHit: function () {
        this.anim.play('hit');
    }
});
