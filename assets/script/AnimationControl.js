var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.spriteAnim = null;
      this.animation = null;
    },

    properties: {
        // foo: {
        //     default: null,
        //     type: Fire.Entity,
        //     serializable: true, // [optional], default is true
        //     visible: true,      // [optional], default is true
        //     displayName: 'Foo', // [optional], default is property name
        //     readonly: false,    // [optional], default is false
        // },
        // ...
    },

    onLoad: function() {
      this.spriteAnim = this.getComponent('Fire.SpriteAnimation');
      this.animation = this.getComponent('Fire.Animation');
    },

    // use this for initialization
    start: function () {
      var self = this;
      self.spriteAnim.play('run');
      self.animation.play('sheepRunIn');
      Fire.log('run duration: ' + self.animation.getAnimationState('sheepRunIn').duration);
      self.invoke(function() {
        self.animation.play('sheepJump');
        self.spriteAnim.play('jump');
        self.invoke(function() {
          self.animation.play('sheepRunOut');
          self.spriteAnim.play('run');
          self.invoke(function() {
            self.spriteAnim.stop();
            Fire.log('Animation sequence play finished!');
          }, self.animation.getAnimationState('sheepRunOut').duration);
        }, self.animation.getAnimationState('sheepJump').duration);
      }, self.animation.getAnimationState('sheepRunIn').duration);
    },

    // called every frame
    update: function () {

    }
});
