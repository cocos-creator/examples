# Bitmap Font

## Scene To Open

`assets/scene/components/04_bitmap_font.fire`

## Description

Let's get to know BitmapText component. It's used to display text in bitmap font format. Change the 'text' property to set the string to display.

We also make use of 'Component.repeat' method to repeatedly call a function for switching BitmapText content.

## Highlight Entity and Components

- `speaker: Fire.BitmapText`: Drag a BitmapFont asset into the 'Bitmap Font' property and set a string for 'Text' property, and you will see your text rendered in scene and game view.
- `speaker: TextManager`: In this component we defined an array to hold several strings, and display them one by one by switching 'Text' property value in `Fire.BitmapText` component.


## Practice

- In `TextManager` component, change the strings in the list and run game to see your strings display. You can also change the size of the list and input more strings.
