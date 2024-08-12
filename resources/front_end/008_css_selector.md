# Hello again, in this contents, we're gonna learn about *selector*

When you make a skeleton, we've learnt tags like `<h1>`, `<ul>`, `<ol>`, `<li>`, `<div>`, `id`, `class`, etc.
We can edit those tags appearance with *selector* in your css style sheet, how to?

## SELECTOR

- ### format : 
```css
/* selector */ {
    /* properties: value */
}
```

selector's function is to select which tag that will have some style. to select tags like `<body>`, `<div>`, `<span>`, `<h1>`, `<ul>`, etc. we can simply type:
```css
div {
    font-size: small;
    color: blue;   
}
h1 {
    font-size: small;
    color: blue;   
}
```

see the differences now in your `index.html` at `<h1>` (remember to add `<h1>` tags first in your `index.html`)

you can try for `<ul>` too:
```css
ul {
    color: red;
    margin: 40px;
}
```

### `id` and `class` SELECTOR

We've seen the normal selector, now how about selector for `id` and `class`? (see at content 5_html_section)

- for `class` we can add dot (.) in selector:
```css
.nama {
    color: red;
    margin: 40px;
}
```
- and for `id` we use hashtag (#):
```css
#login-session {
    color: red;
    margin: 40px;
}
```
### PSEUDO CLASS SELECTOR

There's a pseudo selector among selector like :hover, :click, :link. those selector are used based on activity of the selector. for example:
```css
h1:hover {
    font-size: small;
    color: blue;   
}
```
That selector means the `<h1>` will change its color and size while the `<h1>` text were hovered by mouse.
> and there's much more of pseudo that you can learn at https://www.w3schools.com/css/css_pseudo_classes.asp <br> you can browse it yourself ^_^

### GROUPING SELECTOR

Besides select one of the elements, we can select multiple elements at one style.
For example, if you want to style h1, .nama, and #login-session with the same style:
```css
h1, .nama, #login-session {
    font-size: small;
    color: blue;   
}
```
With that styling format then h1, .nama, and #login-session will have the same styling.

### GROUPING SELECTOR

Besides select one of the elements, we can select multiple elements at one style.
For example, if you want to style h1, .nama, and #login-session with the same style:
```css
h1, .nama, #login-session {
    font-size: small;
    color: blue;   
}
```
With that styling format then h1, .nama, and #login-session will have the same styling.

---

Did you know there's another selector that can select some elements based on it's relation with some elements??? We're gonna learn it at the next part, **COMBINATOR SELECTOR**.
