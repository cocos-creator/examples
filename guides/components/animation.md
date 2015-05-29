# Simple Animation

## Scene To Open

`assets/scene/components/06_animation.fire`

## Description

This is a simple example of Animation editor. Animation editor let your change any component property value over time, with a visual editor that can showcase your value curve.

This editor is still in early stage, missing a lot of functions. But you can follow the example to make simple animations without coding!

Check out sheep entity as a start.

## Highlight Entity and Components

- `sheep: Fire.Animation`: Use this component to reference Animation clip asset and drive property value change over time! It's Inspector interface is similar to Fire.SpriteAnimation.
- `sheep: AnimationControl`: In this component we show how to play Animation in script.


## Practice

- In Assets view, create a new animation clip in `assets/animation` folder. Right click and select `Create/New Animation Clip`.
- Add this clip to your Animation component's 'Animation' list.
- Focus on Animation view, now you can choose this new animation clip from drop down menu and you can add curve to manipulate property values as you wish!
