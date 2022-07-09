# etch-sketch
A project provided by [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch), designed to push the student out of their conform zone and research new methods and techinques. 

The finished product should be something like a 16x16 grid sketch pad, that highlights any squares the cursors passes over with an assortment of colors.

The UI should be fairly simple. A logo at the top saying 'Etch-A-Sketch', the main contain being the grid area then the footer with whatever info goes there. The grid should also be simple, with an option for random colors and an 'eraster' option that returns the hover-overed squares to their original color. The grid should be 16x16 in size.

When the page loads, the grid should be filled with div elements with event listners for hover events. They should have a CSS class applied to them.

Inputs will be the users mouse hovering over squares of the grid. The output should be the hovered over square's color being changed to a certain or specific color.

Psuedo code
when page loads
fill a canvas area(grid) with 256(16x16) div elements with .square and .blank classes toggled for them
