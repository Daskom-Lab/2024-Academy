# Customization I : Tailwind CSS
Customization in Tailwind CSS provides flexibility to adjust settings according to your project needs. This is done through the `tailwind.config.js` file, where you can define themes, extend existing properties, add new utilities, and configure responsive variants.


```html
// Example of customizing theme
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
      },
    },
  },
};
```

##  Configuration ⚙️

This is a guide on how to set up and customize Tailwind for your project. Tailwind is a framework that helps you create unique user interfaces, allowing for extensive customization.

By default, Tailwind checks for an optional `tailwind.config.js` file in your project's main folder. Here, you can define your own customizations.

**Example**:
```html
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
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
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
```
For more examples, you can visit the documentation 📖[Configuration](https://tailwindcss.com/docs/configuration) 📖

## Content Configuration 🖼️

The `content` section of your `tailwind.config.js` file is where you configure the paths to all of your HTML templates, JavaScript components, and any other source files that contain Tailwind class names.

**Example**:
```html
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  // ...
}
```
For more examples, you can visit the documentation 📖[Content Configuration](https://tailwindcss.com/docs/content-configuration) 📖

---
That's it for part 1. Feel free to experiment with custom styles and any other ideas you have in mind. Good luck, and happy coding!

