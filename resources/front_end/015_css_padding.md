# PADDING
                border
            +----------------------------------------+
            |                   |                    |
            |                   | padding-top        |
            |                   |                    |
            |            +---------------+           |
            |<---------->|    content    |<--------->|
            | padd-left  |               | padd-right|
            |            +---------------+           |
            |                   |                    |
            |                   |padding-bottom      |
            |                   |                    |
            +----------------------------------------+

We're gonna make from the first hierarchy, padding. padding create space around element's content, inside the border.

- ## All sides
```css
padding: /* size */;
```
With that format, it will give padding to all four sides.

- ## Padding sides
With this, we can set a specific sides.
```css
padding-top: /* values */;
padding-bottom: /* values */;
padding-left: /* values */;
padding-right: /* values */;
```
- ## Shorthand
```css
padding: top right bottom left;
```
Example:
```css
padding: 25px 50px 75px 100px;
```
