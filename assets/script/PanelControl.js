/**
 * PanelControl Component
 * when click on a button, do something with the panel
 */
var Comp = Fire.Class({
  extends: Fire.Component,

  constructor: function() {
    // original height of the panel
    this.origHeight = null;
  },

  properties: {
    button: {
      default: null,
      type: require('Button')
    },
    background: { //panel background
      default: null,
      type: Fire.SpriteRenderer
    },
    expandedHeight: 500, // height expand to
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
    // disable text and image in panel
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
      ratio: 0
    }, {
      "Fire.SpriteRenderer": {
        "customHeight": self.expandedHeight
      },
      ratio: 1
    }], {
      duration: 0.5
    }).on('stop', function() {
      // fade in text in panel, start with 0 alpha value
      self.textContent.entity.active = true;
      self.textContent.color = Fire.Color.transparent;
      self.textContent.entity.animate([{
        "Fire.BitmapText": {
          "color": Fire.color(1, 1, 1, 0)
        },
        ratio: 0
      }, {
        "Fire.BitmapText": {
          "color": Fire.Color.white
        },
        ratio: 1
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
      ratio: 0
    }, {
      "Fire.SpriteRenderer": {
        "customHeight": self.origHeight
      },
      ratio: 1
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
      ratio: 0
    }, {
      "Fire.BitmapText": {
        "color": Fire.color(1, 1, 1, 0)
      },
      ratio: 1
    }], {
      duration: 0.3
    }).on('stop', function(){
      self.textContent.entity.active = false;
    });
  }
});
