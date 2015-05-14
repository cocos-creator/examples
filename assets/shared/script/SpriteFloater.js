/**
 * SpriteFloater Component
 * This component will position the sprite to one of the four corners of the screen
 * You can specify the location with position and margin property.
 */

// define a enum type for specifying which corner sprite should be
var FloatPosition = Fire.defineEnum({
  TopLeft: -1,
  TopRight: -1,
  BotLeft: -1,
  BotRight: -1
});

// SpriteFloater component definition
var Comp = Fire.Class({
    extends: Fire.Component,
    constructor: function () {
      // instance variables
      this.size = null; // the sprite's size in pixel
    },
    properties: {
        // which corner should the sprite stay
        position: {
          default: FloatPosition.TopRight, // default value
          type: FloatPosition // type
        },
        // the distance between sprite's edge to screen edge, in pixel
        margin: {
          default: Fire.v2(20,20), // this will be a Vec2 value with x and y
        }
        //  ...
    },
    
    // initialization of instance variables, you can't do this in constructor since we need to load the scene first
    onLoad: function() {
      var sr = this.getComponent(Fire.SpriteRenderer); // get the SpriteRenderer component on this entity
      this.size = new Fire.Vec2(sr.renderWidth, sr.renderHeight); // get size of the sprite
      this.positionSprite(); // position the sprite to desired corner
    },

    //  called every frame
    update: function () {
      this.positionSprite(); // update sprite position every frame, you can comment this out if you only need to set the position at beginning.
    },

  	// calculate the position for sprite and 
    positionSprite: function() {
      // get the camera size to calculate the screen edge coordinate
      var camera = Fire.Camera.main;
      // use camera size and Fire.Screen.size to calculate actual screenSize in pixel
      var screenSize = Fire.Screen.size.mul(camera.size / Fire.Screen.size.y);
      // declare a spritePosition variable
      var spritePosition = Fire.Vec2.zero;
      // calculate spritePosition according to this.position and this.margin properties
      switch(this.position) {
        case FloatPosition.TopLeft:
          spritePosition = Fire.v2(-screenSize.x/2 + this.size.x/2 + this.margin.x, screenSize.y/2 - this.size.y/2 - this.margin.y);
          break;
        case FloatPosition.TopRight:
          spritePosition = Fire.v2(screenSize.x/2 - this.size.x/2 - this.margin.x, screenSize.y/2 - this.size.y/2 - this.margin.y);
          break;
        case FloatPosition.BotLeft:
          spritePosition = Fire.v2(-screenSize.x/2 + this.size.x/2 + this.margin.x, -screenSize.y/2 + this.size.y/2 + this.margin.y);
          break;
        case FloatPosition.BotRight:
          spritePosition = Fire.v2(screenSize.x/2 - this.size.x/2 - this.margin.x, -screenSize.y/2 + this.size.y/2 + this.margin.y);
          break;
      }
      // set the position for the entity
      this.transform.position = spritePosition;
    },
});
