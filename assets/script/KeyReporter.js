/**
 * KeyReporter Component
 * display user pressed key on screen
 */
var Comp = Fire.Class({
    extends: Fire.Component,

    constructor: function() {
      // text to display keyboard input
      this.textContent = null;
    },

    onLoad: function() {
      this.textContent = this.getComponent('Fire.BitmapText');
    },

    // use this for initialization
    start: function () {
      var self = this;
      // Fire.Input.on will register a event listener
      Fire.Input.on('keydown', function(event){
        // display key pressed 
        self.textContent.text = '"' + Fire.KeyCode[event.keyCode] + '" pressed!';
        // normal keyboard control scheme
        switch (event.keyCode) {
          case Fire.KeyCode.A:
            self.textContent.text = "A pressed, move left!";
            break;
          case Fire.KeyCode.D:
            self.textContent.text = "D pressed, move right!";
            break;
          case Fire.KeyCode.W:
            self.textContent.text = "W pressed, move up!";
            break;
          case Fire.KeyCode.S:
            self.textContent.text = "S pressed, move down!";
            break;
        }
      });
    },

    // called every frame
    update: function () {

    }
});
