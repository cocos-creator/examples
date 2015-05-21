# Sprite Animation

## Scene To Open

`assets/scene/components/02_static_sprite.fire`

## Description

To create a basic sprite animation setup, you need a sprite entity with `Fire.SpriteRenderer` then add a `Fire.SpriteAnimation` component to the entity.

You also need to prepare some animation clip assets, you can find some premade ones in [assets/animation](/assets/animation) folder, or you can create yourself by right click in Assets view and select `Create->New SpriteAnimation`.

Drag the animation assets into the Default Animation property of SpriteAnimation component. Then tick 'Play Automatically' and hit play button to see it playing.

Then you can check the `SpriteAnimControl` component and script to learn how to control animation playing with scripting.

## Highlight Entity and Components

- `sprite_animation: Fire.SpriteAnimation`: Learn how to set up a simple looping sprite animation with sprite animation clips!
- `sprite_animation: SpriteAnimControl`: Learn how to control sprite animation playing with scripting.

## Scripting

- [SpriteAnimControl.js](/assets/script/SpriteAnimControl.js)  This component shows how to play and stop SpriteAnimation with a script. We also use `invoke` method to delay a function call.
