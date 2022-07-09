const container = document.querySelector(".square-container");
const rainbowButton = document.querySelector(".rainbow");
const eraserButton = document.querySelector(".eraser");
const resetButton = document.querySelector(".reset");
const resizeButton = document.querySelector(".resize");

let rainbowToggled = true;

rainbowButton.addEventListener("click", () => rainbowToggled = true);
eraserButton.addEventListener("click", () => rainbowToggled = false);
resetButton.addEventListener("click", resetGrid);;
resizeButton.addEventListener("click", resizeGrid);

for (let i = 1; i <= 16 * 16; i++) {
  const squareDiv = document.createElement("div");
  squareDiv.addEventListener("mouseover", colorSquare);

  squareDiv.classList.toggle("square");
  container.appendChild(squareDiv);
}

function colorSquare(square) {
  const color = rainbowToggled == true ? generateColor() : "#ddd";
  square.target.setAttribute("style", `background-color: ${color}`);
}

function generateColor() {
  const hexaArray = [...Array(10).keys(), ...[...Array(6).keys()].map((e) => String.fromCharCode(97 + e)) ];
  let result = "#";

  for (let i = 0; i < 3; i++) {
    result += hexaArray[Math.floor(Math.random() * 16)];
  }

  return result;
}

function resetGrid() {
  container.childNodes.forEach((node) => {
    node.setAttribute("style", "background-color: #ddd");
  })
}

function resizeGrid() {
  const height = +prompt("Grid height");
  const width = +prompt("Grid width");

  while (container.hasChildNodes()) {
    container.firstChild.remove();
  }

  for (let i = 1; i <= height * width; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.addEventListener("mouseover", colorSquare);
  
    squareDiv.classList.toggle("square");
    container.appendChild(squareDiv);
  }

  container.setAttribute("style", `grid-template-columns: repeat(${height}, 1fr); grid-template-rows: repeat(${width}, 1fr);`);
}
