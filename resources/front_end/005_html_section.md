# Hola!!! 
in this part we're gonna talk about **section**, before we talk about section, there's **attributes** that you must know.

---
Let's talk about attributes first.
## ATTRIBUTE

Attributes are additional information of tags like `type` attributes in list section that add some information to the list about the type of bullet.
to add some attributes, we can type it at the opening tags like:
```html
<h1 *attributes* = [attributes value]> </h1>
```

Here is a basic attributes :

- `id`       : to states it was *id*, it must be unique per page and only one id each html element. Common used of `id`'s are `header`, `footer`, `main`, etc.
- `class`    : to states it was a *class*, it can be used multiple times and can be two or more classes each html element.
#### example of id and classes in sections:
```html
<section id="header" class="font-white font-underlined photo-box">It's ok</section>
<section id="header main-section">It's not</section> <!-- You can't do this because there's two id in one element and another used of the same id (header). -->
```

---
After we talk about attributes, we're going to talk about *section*.

## SECTION        

Section are used to divide section and what are those section? *yo dawg*

In web, we can see there's navigation bar, main content, footer that contain contact of the web, etc. those thing are called sections.

To divide those things, there are tags that we can use:

- ### Tags :   
  - `<header`
  - `<nav>`
  - `<main>`
  - `<footer>`
  - `<article>`
  - `<section>`

These are the tags that are often used to divide the content of the web.

Actually those tags are same, but to make a developer easier when developing a page,html provide those tags to differenciate between each section.

other than `section` tag, there's container inside those section so the page will be more organized, because in every sections will have one or more contents and sub-contents, for example:

```html
<section id="login">
    <div class="title-container">
        <!-- CONTENTS -->
    </div>
    <div class="input-container">
        <div class="name">
            <!-- CONTENTS -->
        </div>
        <div class="password">
            <!-- CONTENTS -->
        </div>
        <div class="side-container">
            <!-- CONTENTS -->
        </div>
    </div>
</section>
```

we can see it as:

                                                <section id="login">
                    +---------------------------------------------------------------------------+
                    |                                                                           |
                    |                     <div class="title-container">                         |                
                    |                                                                           |
                    +---------------------------------------------+-----------------------------+
                    |                                             |                             |
                    |                                             |                             |
                    |                                             |                             |
                    |             <div class="name">              |                             |
                    |                                             |                             |
                    |                                             |                             |
                    +---------------------------------------------+ <div class="side-container> |
                    |                                             |                             |
                    |                                             |                             |
                    |                                             |                             |
                    |           <div class="password">            |                             |
                    |                                             |                             |
                    |                                             |                             |
                    +---------------------------------------------------------------------------+

the tags are : `<div>` and `<span>`
difference between those two will be seen after we learn about CSS.
