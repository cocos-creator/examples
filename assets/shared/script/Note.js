/**
 * Note
 * Defines a note component so we can write some notes in the scene.
 */

var Comp = Fire.Class({
    extends: Fire.Component,
    
    properties: {
        //the only property we need has a type of string 
        text: {
            default: '', //for value types, specify a default value is enough to let Fireball know it's type
            multiline: true //multiline text support
        }
    }

});
