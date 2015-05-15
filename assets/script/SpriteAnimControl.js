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
        this.invoke('stopAnim', this.interval);
    },
    
    stopAnim: function () {
        this.anim.stop();
        this.invoke('playRun', this.interval);
    },
    
    playRun: function () {
        this.anim.play('run');  
        this.invoke('playHit', this.interval);
    },
    
    playHit: function () {
        this.anim.play('hit');
    }
});
