/**
 * Button Component
 * a simple button that fires a event
 * and switch color and sprite (over time) for normal and pressed state
 */

var Button = Fire.Class({
  extends: Fire.Component,
  constructor: function() {
    // button background SpriteRenderer,
    // prefix with underscore indicates it should be used privately
    this._btnRender = null;
    // original scale
    this._origScale = 1;
    // public event for button event listeners
    this.onPressed = null;
  },
  //
  properties: {
    // BitmapText for button label
    btnText: {
      default: null,
      type: Fire.BitmapText
    },

    // color and sprite for button normal state
    normalColor: Fire.Color.white,
    normalSprite: {
      default: null,
      type: Fire.Sprite
    },
    // pressed state
    pressedColor: Fire.Color.white,
    pressedSprite: {
      default: null,
      type: Fire.Sprite
    },
    // when pressed, multiply button transform scale by this value
    pressedScale: 1,
    // animation duration for button state transition
    animDuration: 0.5
  },
  // method to handle mousedown event
  onMouseDown: function(event) {
    // if we have set a different sprite for pressed state, switch it on
    if (this.pressedSprite) {
      this._btnRender.sprite = this.pressedSprite;
    }
    // animate scale and color property
    this.entity.animate([{
      "Fire.Transform": {
        // property whose value to animate
        "scale": this._origScale
      },
      "Fire.SpriteRenderer": {
        "color": this.normalColor
      },
      offset: 0
    }, {
      "Fire.Transform": {
        "scale": this._origScale.mul(this.pressedScale)
      },
      "Fire.SpriteRenderer": {
        "color": this.pressedColor
      },
      offset: 1
    }], {
      duration: this.animDuration
    });

    // fire onPressed event for any receiver
    if (this.onPressed) {
      this.onPressed(event);
    }
  },
  // method to handle mouseup event
  onMouseUp: function(event) {

    // if we have set a sprite for normal state, switch it on
    if (this.normalSprite) {
      this._btnRender.sprite = this.normalSprite;
    }
    // animate scale and color
    this.entity.animate([{
      "Fire.Transform": {
        // property whose value to animate
        "scale": this.transform.scale
      },
      "Fire.SpriteRenderer": {
        "color": this.pressedColor
      },
      offset: 0
    }, {
      "Fire.Transform": {
        "scale": this._origScale
      },
      "Fire.SpriteRenderer": {
        "color": this.normalColor
      },
      offset: 1
    }], {
      duration: this.animDuration
    });


  },

  onLoad: function() {
    if (!this._btnRender) {
      this._btnRender = this.entity.getComponent(Fire.SpriteRenderer);
    }
    if (this.normalSprite) {
      this._btnRender.sprite = this.normalSprite;
    }
    this._origScale = this.transform.scale;
  },
  // 载入时
  start: function() {
    this.entity.on('mousedown', this.onMouseDown.bind(this));
    this.entity.on('mouseup', this.onMouseUp.bind(this));
  },
  // 销毁时
  onDestroy: function() {
    this.entity.off('mousedown', this.onMouseDown.bind(this));
    this.entity.off('mouseup', this.onMouseUp.bind(this));
  },

  changeText: function(newText) {
    this.btnText.text = newText;
  }
});
