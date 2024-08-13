# COMBINATOR SELECTOR

Combinator is a selector that placed between elements to selects an element based on it's relation to another elements.
<br>
The combinators are:
- Descendant Selector
- Child Selector
- Adjacent Selector

For example, we're gonna select an element from the HTML page below with **COMBINATOR**:
```html
<body>
    <div>
        <h1>TITLE ONE</h1>
        <p>description description</p>
        <p>description description description</p>
        <span>
            <p>another description description</p>
        </span>
    </div>
    <p>just description</p>
    <div>
        <h1>TITLE TWO</h1>
        <p>description description</p>
        <p>description description description</p>
        <span>
            <p>another description description</p>
        </span>
    </div>
    <p>just description</p>
</body>
```

### Descendant Selector (space)
**Descendant** will select all the elements after `space` that are the descendant of the element before `space`.
For example, we're gonna select all `<p>` inside `<div>` elements:
```css
div p{
    /* properties: value */
}
```
### Child Selector (>)
**Child** will select all the elements after `>` that are the child of the element before `>`.
For example, we're gonna select all `<p>` that has a child relation with `<div>` elements:
```css
div > p{
    /* properties: value */
}
```
with that code, all `<p>` inside `<div>` elements will be selected except for `<p>` inside `<span>`, because their parent is `<span>`.

### Adjacent Selector (+)
**Adjacent** will select elements that are exactly after some elements **BUT** they must've the same parent.
For example, we're gonna select all `<p>` that is exactly after `<div>`:
```css
div + p{
    /* properties: value */
}
```
At that example, only `<p>` that's exactly after `<div>` (describe describe) will be selected **NOT** the `<p>` inside `<div>`.

---

We've finished about selector !! in the next contents we're gonna learn about styling, whether it's font styling, background, semantic web, container box, etc.

let's go to the next contents!!
