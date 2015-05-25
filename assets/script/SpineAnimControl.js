/**
 * SpineAnimControl Component
 * when a spine character and animation set is imported,
 * you can control the animations using Fire.Spine.Skeleton component api
 */
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
    },

    properties: {
      //
      interval: 2
    },

    onLoad: function() {
      this.skeleton = this.getComponent('Fire.Spine.Skeleton');
    },

    // use this for initialization
    start: function () {
      var self = this;
      self.skeleton.setAnimation(0, 'idle', true);
      self.skeleton.addAnimation(0, 'run', true, self.interval);
    },

    // called every frame
    update: function () {

    }
});
