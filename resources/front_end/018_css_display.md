In this section we're gonna talk about `display`. 

## Inline and Block
Before in HTML, there's `<div>` and `<span>` mentioned, those tags has it's own display mode.

`<span>` has *inline* display, and `<div>` has `block` display. the difference between `inline` and `block` is:

- `inline` element does not start on a new line
- `block` element always start on a new line.
<center>

| Inline Elements | Block Element |
| :-----------: | :-----------: |
|`<span>`| `<div>`
|`<a>`   | `<h1>` - `<h6>`
|`<img>` | `<p>`
|    .  | `<header>` 
|    . | `<footer>` 
|    .| `<section>`

</center>

`<div>` tags and `<span>`tags:
                                
    <div>HOLA<div>                                                              <span>HOLA</span>
    <div>HOLA<div>                                                              <span>HOLA</span>
    <div>HOLA<div>                                                              <span>HOLA</span>

    The web will show: 
    +-------------------------------------------------+                         +-------------------------------------------------+
    | HOLA                                            |                         | HOLA HOLA HOLA                                  |
    | HOLA                                            |                         |                                                 |
    | HOLA                                            |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    |                                                 |                         |                                                 |
    +-------------------------------------------------+                         +-------------------------------------------------+                      
                                                   
You can try it on your index.html with this:
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <!-- This is inline element. -->
        <span>HOLA</span>
        <span>HOLA</span>
        <span>HOLA</spa
        <!-- This is block element. -->
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
    </body>
</html>
```
---
Now we're gonna learn about display property.

## Display
```css
display: /* VALUE */
```

Display property can change the element display, from inline to block, block to inline, flex display and many more.

- For example, you can add in your sylesheet with html above:
```css
span {
    display: block;
}
div {
    display: inline;
}
```

Because we've set the display in stylesheet, now `<div>` will become an inline, and `<span>` become block.

- You can hide some of tags too with:
```css
display: none;
```
