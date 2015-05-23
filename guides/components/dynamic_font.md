# Dynamic Font

## Scene To Open

`assets/scene/components/05_dynamic_font.fire`

## Description

This time we are displaying text with dynamic font. You can use 'Fire.Text' component to display font included in your project or a system font.

To use a system font, set 'FontType' property to 'Arial'. Or 'Custom' to use a font in your project.

With a system font, you can easily display text in non-ASCII glyphs. In this example, we show 'game develop' in 9 different languages. Most of them are non-ASCII glyphs.

## Highlight Entity and Components

- `longText: Fire.Text`: Currently this component is mainly used for display text with full set of system font installed in your user's device. For languages using non-ASCII characters this solution can save you several megabytes of game package size. Just use 'Arial' as 'Font Type' property and input a string in 'Text' field. You can also set 'Size' property instead of `Transform.scale` to control the size of text.
- `longText: DynamicTextMng`: similar to 'TextManager' component, we have a list of strings and text will switch through each of them with a certain interval.


## Practice

- In `DynamicTextMng` component, change the content of 'Text List' property. If you can type non-ASCII characters please do try it!
