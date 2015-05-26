# Entity Movement

## Scene To Open

`assets/scene/gameplay/01_entity_movement.fire`

## Description

How can you make game without moving sprites around? In this demo we use `Entity.animate` function to move an entity along a series of positions.

`Entity.animate` is a function that can animate any property in any component over time. We call this function with a series of key frames, each one specify a certain value for one of more properties. We also need to specify a normalized time mark for a key frame with 'ratio' property with a value from 0 to 1.

0 means at the very beginning of the animation process; 1 means the key frame is at the very end.

`Entity.animate` function also provides callback when the last key frame is reached. You can use this to connect multiple animate process or start whatever logic you plan in the script.

## Highlight Entity and Components

- `sheep: EntityMovement`: control the movement of sheep sprite using `Entity.animate` to change the `Fire.Transform.position` property value over time. We also exposed some properties to set the jump height and animation duration.

## Scripting

- [EntityMovement.js](/assets/script/EntityMovement.js)  Learn to use `Entity.animate` method to change a component property value over time. You can also change the value of position in any of the keyframes to see how it changes the movement of sheep.
