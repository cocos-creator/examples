/**
 * CharacterController Component
 * control movement and animation state swich
 */
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      this.skeleton = null;
      this.inputState = {
        left: false,
        right: false,
        jump: false
      };
      this.animState = null;
      this.speed = Fire.Vec2.zero;
      this.walkPositionY = 0;
    },

    properties: {
      moveAccel: 20,
      jumpSpeed: 500,
      gravity: 10,
      brake: 0.3,
      runSpeed: 200,
      maxRunSpeed: 500,
      inputDisplay: {
        default: null,
        type: Fire.Text
      }
    },

    onLoad: function() {
      this.skeleton = this.getComponent('Fire.Spine.Skeleton');
      this.walkPositionY = this.transform.position.y;
    },

    // use this for initialization
    start: function () {
      var self = this;
      // track 0 for body movement
      self.skeleton.setAnimation(0, 'idle', true);
      self.animState = 'idle';
      self.skeleton.setMix('idle', 'walk', 0.05);
      self.skeleton.setMix('walk', 'run', 0.2);
      self.skeleton.setMix('run', 'walk', 0.2);
      self.skeleton.setMix('walk', 'idle', 0.1);

      // handle input state
      Fire.Input.on('keydown', function(event) {
        switch(event.keyCode) {
          case Fire.KeyCode.A:
            self.inputState.left = true;
            break;
          case Fire.KeyCode.D:
            self.inputState.right = true;
            break;
          case Fire.KeyCode.Space:
            self.inputState.jump = true;
            break;
          case Fire.KeyCode.J:
            self.inputState.shoot = true;
            break;
        }
        self.updateInputDisplay();
      });

      Fire.Input.on('keyup', function(event) {
        switch(event.keyCode) {
          case Fire.KeyCode.A:
            self.inputState.left = false;
            break;
          case Fire.KeyCode.D:
            self.inputState.right = false;
            break;
          case Fire.KeyCode.Space:
            self.inputState.jump = false;
            break;
          case Fire.KeyCode.J:
            self.inputState.shoot = false;
            break;
        }
        self.updateInputDisplay();
      });
    },

    // called every frame
    update: function () {
      var self = this;
      // get move speed
      if (self.animState !== 'jump') {
        if (self.inputState.left) {
          self.speed.x -= self.moveAccel;
        }
        if (self.inputState.right) {
          self.speed.x += self.moveAccel;
        }
        if (!self.inputState.left && !self.inputState.right) {
          if (Math.abs(self.speed.x) < 1 ) {
            self.speed = Fire.v2(0, self.speed.y);
          } else {
            self.speed = Fire.v2(self.speed.lerp(Fire.Vec2.zero, self.brake).x, self.speed.y);
          }
        }
      }


      if (self.speed.x > 0) {
        self.speed = Fire.v2(Math.min(self.speed.x, self.maxRunSpeed), self.speed.y);
        self.transform.scale = Fire.v2(0.5, 0.5);
      } else if (self.speed.x < 0) {
        self.transform.scale = Fire.v2(-0.5, 0.5);
        self.speed = Fire.v2(Math.max(self.speed.x, -self.maxRunSpeed), self.speed.y);
      }

      if (self.inputState.jump && self.animState !== 'jump') {
        self.speed = Fire.v2(self.speed.x, self.jumpSpeed);
        self.skeleton.setAnimation(0, 'jump', false);
        self.animState = 'jump';
      }

      if (self.animState === 'jump') {
        self.speed = Fire.v2(self.speed.x, self.speed.y - self.gravity * Fire.Time.deltaTime);
      } else {
        self.updateAnimationState();
      }

      // update position
      self.transform.position = self.transform.position.add(self.speed.mul(Fire.Time.deltaTime));
      if (self.transform.position.y <= self.walkPositionY) {
        self.transform.position = Fire.v2(self.transform.position.x, self.walkPositionY);
        self.updateAnimationState();
      }
    },

    updateInputDisplay: function() {
      this.inputDisplay.text = "Input State: \nLeft: " + this.inputState.left +
        "\nRight: " + this.inputState.right + "\nJump: " + this.inputState.jump;
    },

    updateAnimationState: function() {
      var self = this;
      var speedMagnitude = Math.abs(self.speed.x);
      // Fire.log(speedMagnitude);
      if (speedMagnitude >= self.runSpeed ) {
        if (self.animState !== 'run') {
          self.skeleton.setAnimation(0, 'run', true);
          self.animState = 'run';
        }
      } else if (speedMagnitude < self.runSpeed && speedMagnitude > 1) {
        if (self.animState !== 'walk') {
          self.skeleton.setAnimation(0, 'walk', true);
          self.animState = 'walk';
        }
      } else if (speedMagnitude === 0) {
        if (self.animState !== 'idle') {
          self.skeleton.setAnimation(0, 'idle', true);
          self.animState = 'idle';
        }
      }
    }


});
