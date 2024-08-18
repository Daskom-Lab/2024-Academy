# MARGIN

            +-------------------------------------------+
            |                   |                       |
            |                   | margin-top            |
            |                   |                       |
            |            +---------------+              |
            |<---------->|    content    |<------------>|
            |margin-left |               | margin-right |
            |            +---------------+              |
            |             ^border |                     |
            |                     |margin-bottom        |
            |                     |                     |
            +-------------------------------------------+


The last is margin, you often see it while making an assignment in word that you must set the margin left, bot, top, right into a certain format.

- ## Margin format
```css
margin: /* size */;
```
- With that format, it will give space to all four sides outside the border.
- there's `auto` and `inherhit` value in margin:
  - `auto` it auto horizontally center the element in the container, 
  - `inherhit` will follow the parent element.

- ## Padding sides
With this, we can see which sizes we set.
```css
margin-top: /* values */;
margin-bottom: /* values */;
margin-left: /* values */;
margin-right: /* values */;
```

- ## Shorthand
```css
margin: top right bottom left;
```
- Example:
```css
margin: 25px 50px 75px 100px;
```
