# Sliced Sprite

## Scene To Open

`assets/scene/components/03_sliced_sprite.fire`

## Description

In this example we show how to created a sliced sprite to make a small image scalable.

Select `sliced_sprite` entity and click `ui_panel` asset in 'Sprite' property. A sprite asset will be highlighted in Assets view. Select this asset (`assets/image/ui_panel/ui_panel`) and see Inspector closely.

Set the `Border Top/Bottom/Left/Right` property value to make the sprite sliced along these coordinates.

## Highlight Entity and Components

- `sliced_sprite: Fire.SpriteRenderer`: You need to put a sprite asset properly sliced into 'Sprite' property, then check 'Use Custom Size' property checkbox so you can change the custom size of the sprite.


## Practice

- Select `sliced_sprite` entity in Hierarchy view. You can see a gizmo with 8 control point around the sprite in Scene view. Drag along on any control point to change the 'customWidth' and 'customHeight' property value on the fly. You will notice no matter how large you make the sprite, the sprite border will never get blurred.
- In Hierarchy view, drag `sliced_sprite` entity up and down to move it to the bottom of the list. Then drag it again to insert it between `Main Camera` and `logo` entity. You'll see as you drag, the rendering order of sprites changes. A sprite at the bottom of the Hierarchy view is always rendered last, in other word render on top of other sprites.
