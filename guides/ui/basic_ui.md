# Basic UI Element

## Scene To Open

`assets/scene/ui/01_basic_ui.fire`

## Description

In this example we create a simple panel with a button, and when the button is pressed we do something with the panel. Currently there's no real panel and button component in Fireball (we will add them later). We will use sprite with `Fire.Input.on` event listener to make them responsive to mouse click.

We also take advantage of `Entity.animate` method (see [EntityMovement](/guides/gameplay/entity_movement.md) for detailed example) to make the UI element change their presentation when interacted with.

## Highlight Entity and Components

- `Panel/button: Button`: This is an unofficial button component made just to demonstrate input event listener and how to change it's look when being interacted with. You can set different color/scale/sprite for this button's normal and pressed state.
- `Panel: PanelControl`: This component has a property to reference the button and we register an event listener to catch button's 'mousedown' event. Then we display more content in panel.

## Scripting

- [Button.js](/assets/script/Button.js) Take a look at this script to learn how to register mouse event listener. Don't forget to add `bind(this)` or you will lose context.
- [PanelControl.js](/assets/script/PanelControl.js) When register button pressed event listener, don't forget to `bind(this)` as well. We also show how to expand a panel using [sliced sprite](/guides/components/sliced_sprite.md) and `Entity.animate`.
