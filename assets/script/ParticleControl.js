var Comp = Fire.Class({
    extends: Fire.Component,

    properties: {
      particle: {
        default: null,
        type: Fire.ParticleSystem
      }
    },

    // use this for initialization
    start: function () {
      var self = this;
      Fire.Input.on('keydown', function(event) {
        self.particle.stop();
        self.particle.reset();
      });

    },

    // called every frame
    update: function () {

    }
});
