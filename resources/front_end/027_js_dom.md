# HTML DOM
Shortly, Document Object Model (DOM) determines the contents that will shown in page and how it's relates with other elements.

DOM is an application programming interface of HTML or other. we can represented the HTML element as tree graph with DOM.

for example if we have a page of HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
    <nav>
        <div class="container">
            <div class="left-nav">
                <a href="#home">HOME</a>
            </div>
            <div class="right-nav">
                <a href="#skill">SKILL</a>
                <a href="#exp">EXPERIENCE</a>
                <a href="#contact">CONTACT</a>
            </div>
        </div>
    </nav>
</body>
</html>
```

in DOM we can see it as:

    HTML---
          |
          +-- Head ---
          |          |
                     +-- ...
          |
          +-- Body ---
                     |
                     +-- nav ---
                               |
                               +---
                                  |
                                  +-- <div> ---
                                  |           |
                                  |           +--- <div> ---
                                  |                        |
                                  |                        +--- <a> --- HOME
                                  |
                                  +--- <div> ---
                                               |
                                               +--- <a> --- SKILL
                                               +--- <a> --- EXPERIENCE
                                               +--- <a> --- CONTACT

it makes us easier when we're gonna manipulate each of it's element. in the next section we'll discuss about how to manipulate it.
