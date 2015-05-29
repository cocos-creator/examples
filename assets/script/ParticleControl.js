var Comp = Fire.Class({
    extends: Fire.Component,
    constructor: function() {
      this.particle = null;
    },

    onLoad: function() {
      this.particle = this.getComponent('Fire.ParticleSystem');
    },

    // use this for initialization
    start: function () {
      var self = this;
      Fire.Input.on('keydown', function(event) {
        self.particle.stop();
        self.particle.play();
      });

    },

    // called every frame
    update: function () {

    }
});
