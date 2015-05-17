/**
 * TextManager Component
 * This component exposes some property for user to enter text and update
 * Fire.BitmapText component overtime.
 */

 var Comp = Fire.Class({
     extends: Fire.Component,
     constructor: function() {
         this.textIndex = 0; // index to access string in textList
         this.speaker = null; // BitmapText component reference
         this.count = 0; //number to display for counter
     },

     properties: {
       // in this array we store some string text to display in order
       textList: {
         default: [],
         type: String
       },
       // this is a number variable for counting
       counter: {
         default: null,
         type: Fire.BitmapText
       }
     },

     onLoad: function() {
       this.speaker = this.getComponent('Fire.BitmapText');
     },

     start: function() {
       // use repeat to repeatedly call a function in a certain interval
       this.repeat("updateText", 2);
     },

     updateText: function() {
       // set text for BitmapText
       this.speaker.text = this.textList[this.textIndex];
       this.textIndex += 1;
       // if we reach the end of textList, cancel repeat and start counting
       if (this.textIndex >= this.textList.length) {
         this.cancelRepeat("updateText");
         this.repeat("updateCounter", 0.05);
       }
     },

     updateCounter: function() {
       // use count instance variable for counting 1 to 100
       this.counter.text = this.count;
       this.count += 1;
       if (this.count > 100) {
         this.cancelRepeat("updateCounter");
         this.counter.text = "Done!";
       }
     }
});
