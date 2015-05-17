/**
 * DynamicTextMng Component
 * This component exposes some property for user to enter text and update
 * Fire.Text component overtime.
 */

 var Comp = Fire.Class({
     extends: Fire.Component,
     constructor: function() {
         this.textIndex = 0; // index to access string in textList
         this.title = null; // Fire.Text component reference
     },

     properties: {
       // in this array we store some string text to display in order
       textList: {
         default: [],
         type: String
       }
     },

     onLoad: function() {
       this.title = this.getComponent('Fire.Text');
     },

     start: function() {
       // use repeat to repeatedly call a function in a certain interval
       this.repeat("updateText", 0.5);
     },

     updateText: function() {
       // set text for BitmapText
       this.title.text = this.textList[this.textIndex];
       this.textIndex += 1;
       // if we reach the end of textList, cancel repeat and start counting
       if (this.textIndex >= this.textList.length) {
         this.cancelRepeat("updateText");
         this.title.text = "Done!";
       }
     }
});
