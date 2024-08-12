# BORDER

The second hierarchy is border. border is border of an element.
actually we've make a border before at content 9, border color section.
now we're gonna style more than color.

- ## Border Style
```css
border-style: /* value */
```
border-style used to give a style to the borderline. the values are:
<center>

| Values | Description |
| :-----------: | :-----------: |
| `dotted`| Defines a dotted border|
| `dashed`| Defines a dashed border|
| `solid` | Defines a solid border|
| `double`| Defines a double border|
| `groove`| Defines a 3D grooved border. The effect depends on the border-color value|
| `ridge` | Defines a 3D ridged border. The effect depends on the border-color value|
| `inset` | Defines a 3D inset border. The effect depends on the border-color value|
| `outset`| Defines a 3D outset border. The effect depends on the border-color value|
| `none`  | Defines no border|
| `hidden`| Defines a hidden border|
</center>
    
Try it yourself in your stylesheet, for example:
```css
h1 {
    border-style: dashed;
}
```
- ## Border Width
```css
border-width: /* value */
```
border-width gives a specific width to all sides of border. the values here are the unit values that we've learn before or a descriptive text: thin, medium, thick.
    
- example:
```css
h1 {
    border-style: solid;
    border-width: thick;
}
```

- ## Border sides
we can gives a value to a specific sides too whether it is width or style, just add:
```css
border-{ sides }-{ property }: /* values */;
```        
sides contain (top, bottom, right, left), for example:
```css
border-bottom-width: /* values */;
border-left-style: /* values */;
border-right-width: /* values */;
```

- ## Shorthand
```css
border: size style color;
```
- example: 
```css
h1 {
    border-style: solid;
    border-width: 2vw;
    border-color: red;
}
```

Could become:
```css
h1 {
    border: 2vw solid red;
}
```
