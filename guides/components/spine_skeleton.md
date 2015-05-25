# Spine Skeleton Animation

## Scene To Open

`assets/scene/components/07_spine_skeleton.fire`

## Description

Skeleton animation from [Spine](http://esotericsoftware.com/) is supported. We need to import spine skeleton data to our project. Read the spine documentation on [how to export data](http://esotericsoftware.com/spine-export). We will need three files:

- `mySkeleton.json`: this file contains the skeleton setup and animation data.
- `mySkeleton.atlas`: this file contains the atlas mapping for each sprite parts.
- `mySkeleton.png`: the spine atlas image file.

In this example, we already have the spine data files and created assets ready in `assets/export/spineboy` folder.

## Practice

- Right click the `spineboy.json` file in Assets view, select `Create/Spine Skeleton Data` from context menu. This will create `spineboy.asset` and `spineboy.atlas.asset` file for Fireball. You can check the folder in your OS file system to see the full file extension.
- Drag the `spineboy.asset` asset to a new scene will automatically created an entity with `Fire.Spine.Skeleton` component. And you will see your character already in scene and game view.
- Select an animation from 'Animation' property list, and hit play button to preview the animation in game view. You can also tick the 'Loop' property to make the animation loop forever.

## Highlight Entity and Components

- `spineboy: Fire.Spine.Skeleton`: This component will drive your spine skeleton animation. You can click 'Animation' property to see what's been imported. You can also check 'Loop' property to loop current animation or tweak 'Time Scale' property to change the playback rate.
- `spineboy: SpineAnimControl`: Control spine animation play by script. We also update the current playing animation state onto a BitmapText.

## Scripting

- [SpineAnimControl.js](/assets/script/SpineAnimControl.js)  This component shows how to set current playing animation `setAnimation` and queue several animation to be played one by one, using `Fire.Spine.Skeleton` api. We also showed a little bit keyboard press event handling for adding a new track of shooting animation, on parallel with movement track (running and walking, etc).
