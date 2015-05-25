/**
 * SpineAnimControl Component
 * when a spine character and animation set is imported,
 * you can control the animations using Fire.Spine.Skeleton component api
 */
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
      this.isShooting = false;
    },

    properties: {
      //
      interval: 2,
      stateText: {
        default: null,
        type: Fire.BitmapText
      }
    },

    onLoad: function() {
      this.skeleton = this.getComponent('Fire.Spine.Skeleton');
    },

    // use this for initialization
    start: function () {
      var self = this;
      self.skeleton.setAnimation(0, 'idle', true);
      self.skeleton.addAnimation(0, 'walk', true, self.interval);
      self.skeleton.addAnimation(0, 'run', true, self.interval*2);

      // when any key is pressed, toggle shooting
      Fire.Input.on('keydown', function(event) {
        if (this.isShooting) {
          self.skeleton.clearTrack(1);
          this.isShooting = false;
        } else {
          // start a new animation track '1' and play shoot on this track
          self.skeleton.setAnimation(1, 'shoot', true);
          this.isShooting = true;
        }
      });
    },

    // called every frame
    update: function () {
      // update animation state display
      this.stateText.text = this.skeleton.getCurrent(0).animation.name;
    }
});
