## Get started with Tailwind CSS

Tailwind CSS works by looking through your HTML files, JavaScript components, and other templates for the class names you use. It creates the styles for those classes and puts them into a single CSS file.

### Installation

- **Tailwind CLI**

  The easiest and fastest way to start using Tailwind CSS is with the Tailwind CLI tool. CLI stands for Command Line Interface, which means you use it by typing commands in your terminal. Here is how to install tailwind css with tailwind CLI :

  - **Step 1: Install Tailwind CSS**

    Install tailwindcss via npm, and create your tailwind.config.js file. The terminal to use is git bash. If your default terminal is `powershell`, it can be changed to `git bash`. Then, copy the commands **one by one** or not all at once, because you have to wait for the previous command to finish before the other commands are executed.

    ```bash
    npm init -y
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```
    Installing `PostCSS` and `Autoprefixer` briefly aims to help Tailwind CSS work efficiently and ensure your styles are browser compatible.
    
  - **Step 2: Configure your template paths**

    Add the paths to all of your template files in your tailwind.config.js file.

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: ["./public/**/*.{html,js}"],
        theme: {
            extend: {},
        },
        plugins: [],
    }
    ```

  - **Step 3: Add the Tailwind directives to your CSS**

    Add the @tailwind directive for each Tailwind layer below to your main CSS file. Before copying the syntax below, you have to create a `src` folder that contains the `css` folder, then in the css folder create a file with the name `input.css` as a place to put the syntax below.

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

  - **Step 4: Start the Tailwind CLI build process**

    Next, create a `public` folder in which there is a `css` folder as a place for the `css` files that you build later.
Run the CLI tool to scan your template files for classes and build your CSS.

    ```bash
    npx tailwindcss -i ./src/css/input.css -o ./public/css/style.css --watch
    ```

  - **Step 5: Start using Tailwind in your HTML**

    Finally, create your `index.html` file inside the `public` folder. Add your compiled CSS file to the `<head>` and start using Tailwind’s utility classes to style your content.

    ```html
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="./css/style.css" rel="stylesheet">
    </head>
    <body>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
    </body>
    </html>
    ```

In the installation of css tailwind, there are several other methods. However, it is recommended that you follow the installation with the tailwind CLI. However, if you want to see others, visit the following link: [Tailwind CSS installation documentation](https://tailwindcss.com/docs/installation).
