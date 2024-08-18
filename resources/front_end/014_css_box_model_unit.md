Box model or container contain margin, padding, and border. to visualize it:

            +----------------------------------------+
            |margin                                  |
            |       +------------------------+       |
            |       | padding                |       |
            |       |    +---------------+   |       |
            |       |    |    element    |   |       |
            |       |    |               |   |       |
            |       |    +---------------+   |       |
            |       |                        |       |
            |       +------------------------+       |
            |         ^border (the line)             |
            +----------------------------------------+
        
Before we learn how to adjust the size, we're gonna learn about sizing unit first.

## UNIT

There's a lot of unit in CSS, it's divided into 2 categories: 
1. Absolute length
2. Relative length

- ### Absolute length
  it has an absolute value like centimeter, pixel, etc.
    - `cm`: centimeter
    - `mm`: milimeter
    - `in`: inches (1in = 96px = 2.54cm) 
    - `px`: pixel (1px = 1/96th of 1in)
    - `pt`: point (1pt = 1/72 of 1in)
    - `pc`: picas (1pc = 12 pt)

- ### Relative length
  It's value is relative to some element, for example is the length can be 5cm in fullscreen, but changes to 2cm after minimize.
    - `em`   : Relative to the font-size of the element (2em means 2 times the size of the current font)
    - `ex`   : Relative to the x-height of the current font (rarely used)
    - `ch`   : Relative to width of the "0" (zero)
    - `rem`  : Relative to font-size of the root element
    - `vw`   : Relative to 1% of the width of the viewport*
    - `vh`   : Relative to 1% of the height of the viewport*
    - `vmin` : Relative to 1% of viewport's* smaller dimension
    - `vmax` : Relative to 1% of viewport's* larger dimension
    - `%`    : Relative to the parent element

If you see it from the text you maybe not understand, so here's the link to see what is the different between units.
- https://www.youtube.com/watch?v=-GR52czEd-0
- https://www.youtube.com/watch?v=hyAeX0p-uIA
- https://www.w3schools.com/Css/css_units.asp
