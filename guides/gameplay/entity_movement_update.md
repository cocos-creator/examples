# Entity Movement With Update

## Scene To Open

`assets/scene/gameplay/02_entity_movement_update.fire`

## Description

What we want to achieve is the same as EntityMovment. Instead of using Entity.animate, this time we will move the entity by set position in 'update' function each frame.

Another powerful tool we will be introducing is Vec2.lerp. It's a helper function to linearly interpolates between two Vec2 values by amount 'ratio'.

## Highlight Entity and Components

- `sheep: EntityMovementUpdate`: control the movement of sheep sprite by calculating sheep position with `Vec2.lerp` and set the `Fire.Transform.position` directly in `update` method.

## Scripting

- [EntityMovementUpdate.js](/assets/script/EntityMovementUpdate.js) using `update` to change the position of an entity each frame. Compare to `Entity.animate`, this way we can have more control in runtime. For example respond to player control and alter the movement in real time.
