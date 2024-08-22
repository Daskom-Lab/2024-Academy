# Customization II : Tailwind CSS

The `theme` section of your `tailwind.config.js` file is where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.

**Example**:
```html
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
}
```
In addition to that, there is still a website reference that you can visit to look for color codes 😊
- You can also explore color codes further on [color-hex.com](https://www.color-hex.com/), [colorhunt.co](https://colorhunt.co/) or [palettes.shecodes.io](https://palettes.shecodes.io/)
- For more examples, you can visit the documentation 📖[Theme Configuration](https://tailwindcss.com/docs/theme) 📖

---
That's it for part 2. Feel free to experiment with custom styles and any other ideas you have in mind. Good luck, and happy coding!
