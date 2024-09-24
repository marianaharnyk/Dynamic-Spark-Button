# Dynamic Spark Button 
You can visit deployed version by this link https://marianaharnyk.github.io/

## Development server

Run `npm install` to install dependencies. Then run `gulp default` to run the app locally. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Build

Run `gulp build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Project structure

1. /node_modules/
    All 3rd party libraries are installed into this folder when you run npm install. Those libraries are bundled into the application. What is important to know is that you shouldn't include this folder when deploying your application to production or committing to the git repository. If you move your project to a new location you should skip this folder and run npm install in a new location.

2. /app/
       This is where we keep our application source code.
            This folder contains template, styles and images. Any files outside of this folder are meant to support building your app.

                /app/css/
                     This folder is automatically formed when you run the Gulp command `gulp default`. This folder serves as the output directory for the compiled CSS files generated from the SCSS files.

                /app/images/
                    This folder contains static assets for this app like images, icons

                /app/scss/
                    The SCSS files in this folder will contain the styles for your HTML files, allowing you to write more maintainable and modular CSS code.
               
                /app/index.html
                    This is main HTML file with template of application.


3. gitignore
    This file instructs git which files should be ignored when working with git repository.

4. gulpfile.js
    This is a JavaScript file that defines and configures the tasks to be executed by Gulp, a task runner/build system for web development. It serves as the entry point for Gulp, where you define your tasks and set up various build processes for your project.

5. package.json
    This file is mandatory for every npm project. It contains basic information regarding our project (name, description, license etc.) commands which can be used, dependencies — those are packages required by our application to work correctly, and devDepndencies — again a list of packages which are required for our application however only during the development phase. I.e. we need Angular CLI only during development to build a final package however on production we don't need it anymore.

6. README.md
    File containing a description of our project. All the information which we would like to provide our userswith before they start using our app.

