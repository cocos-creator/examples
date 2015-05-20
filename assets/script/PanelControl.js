/**
 * PanelControl Component
 * when click on a button, do something with the panel
 */
var Comp = Fire.Class({
  extends: Fire.Component,

  constructor: function() {
    this.origHeight = null;
    //this._expandPanelAnimNode = null;
  },

  properties: {
    button: {
      default: null,
      type: require('Button')
    },
    background: {
      default: null,
      type: Fire.SpriteRenderer
    },
    expandedHeight: 500,
    textContent: {
      default: null,
      type: Fire.BitmapText
    },
    star: {
      default: null,
      type: Fire.Entity
    }
  },

  onLoad: function() {
    this.origHeight = this.background.customHeight;
    this.textContent.entity.active = false;
    this.star.active = false;
  },

  // use this for initialization
  start: function() {
    this.button.onPressed = this.expandPanel.bind(this);
  },

  expandPanel: function() {
    var self = this;
    self.background.entity.animate([{
      "Fire.SpriteRenderer": {
        "customHeight": self.origHeight
      },
      offset: 0
    }, {
      "Fire.SpriteRenderer": {
        "customHeight": self.expandedHeight
      },
      offset: 1
    }], {
      duration: 0.5
    }).on('stop', function() {
      self.textContent.entity.active = true;
      self.textContent.color = Fire.Color.transparent;
      self.textContent.entity.animate([{
        "Fire.BitmapText": {
          "color": Fire.color(1, 1, 1, 0)
        },
        offset: 0
      }, {
        "Fire.BitmapText": {
          "color": Fire.Color.white
        },
        offset: 1
      }], {
        duration: 0.3
      });
      self.button.changeText('Collapse');
      self.star.active = true;
      self.button.onPressed = self.collapsePanel.bind(self);
    });
  },

  collapsePanel: function() {
    var self = this;
    self.star.active = false;
    self.background.entity.animate([{
      "Fire.SpriteRenderer": {
        "customHeight": self.expandedHeight
      },
      offset: 0
    }, {
      "Fire.SpriteRenderer": {
        "customHeight": self.origHeight
      },
      offset: 1
    }], {
      duration: 0.5
    }).on('stop', function(){
      self.button.changeText('Expand');
      self.button.onPressed = self.expandPanel.bind(self);
    });

    self.textContent.entity.animate([{
      "Fire.BitmapText": {
        "color": Fire.Color.white
      },
      offset: 0
    }, {
      "Fire.BitmapText": {
        "color": Fire.color(1, 1, 1, 0)
      },
      offset: 1
    }], {
      duration: 0.3
    }).on('stop', function(){
      self.textContent.entity.active = false;
    });
  }
});
