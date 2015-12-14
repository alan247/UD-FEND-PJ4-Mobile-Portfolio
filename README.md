# Website performance optimization portfolio project

## How to run

This project is nothing but a bogus website on which several optimizations were made as part of the Project 4 of Udacity's Front End Nanodegree Program. As such, you don't need to do anything special to run the project. Just head to the following links and use PageSpeed Insights and Dev Tool's timeline to see how good it performs.

1. [PageSpeed Optimizations (Bogus Portfolio)] (http://alan247.github.io/frontend-nanodegree-mobile-portfolio/dist/index.html)
2. [60 FPS Optimization (Pizzeria)] (http://alan247.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html)

## Optimizations Made

### Part 1: Portfolio (index.html)

1. Inline all css from style.css
1. Set media="print" to print.css
1. Add "async" to all scripts
1. Use a webfont js loader
1. Minimize HTML/CSS

### Part 2: Pizzeria (views/js/main.js)

1. Changed all instances of `document.querySelectorAll()` to either `document.getElementsByClassName()` or `document.getElementById()` for better performance
1. Create a separate loop to populate an array with all the necessary phases
1. Count the number of pizza containers and iterate through them to set a new width when changePizzaSizes() is called
1. Optimize pizza.png
1. Removed `determineDx()` function and used percentages instead of pixels to set the new pizzas' width
1. Calculate the number of pizzas needed for the background by calculating the number of rows available in the viewport (innerHeight / 100)
1. Cached DOM query on `movingPizzas` variable (`document.getElementById("movingPizzas1")`) to avoid querying the DOM on each loop iteration
1. Added transform: translateZ(0)` to `.mover` to use hardware accelerated css
1. Minify source code





