






# Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

## Optimizations Made

### Part 1: Portfolio (index.html)

1. Inline all css from style.css
1. Set media="print" to print.css
1. Add "async" to all scripts
1. Use a webfont js loader
1. Minimize HTML/CSS

### Part 2: Pizzeria (views/js/main.js)

1. Use getElementsByClassName for better performance
1. Create a separate loop to populate an array with all the necessary phases
1. Set the number of pizzas to 35 instead of 200
1. Count the number of pizza containers and iterate through them to set a new width when changePizzaSizes() is called
1. Optimize pizza.png image (dimensions and file size)


