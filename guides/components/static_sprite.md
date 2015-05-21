# Static Sprite

## Scene To Open

`assets/scene/components/01_static_sprite.fire`

## Description

In this demo, we show a basic static sprite using `Fire.SpriteRenderer` component.

You can change the image for sprite by dragging a new image asset to `Fire.SpriteRenderer`'s 'Sprite' property.

Check out the 'logo' entity and it's 'LogoFloater' component to learn how to specify position for a sprite and how to get camera size so we can position our sprite accordingly.

## Highlight Entity and Components

- `static_sprite: Fire.SpriteRenderer`: Learn how to set up a static sprite with any image you like!
- `logo: SpriteFloater`: Learn how to expose property to Inspector, also learn how to calculate world position from screen position.

## Scripting

- [SpriteFloater.js](/assets/script/SpriteFloater.js) This component will position the sprite to one of the four corners of the screen.
