let correctColor = [];
let colors = [];

function generateNewColors(numColors) {
  for (let i = 0; i < numColors; i++) {
    let newColor = [];
    for (let i = 0; i < 3; i++) {
      newColor.push(Math.floor(Math.random() * 256));
    }
    colors.push(newColor);
  }
}

function restart() {
  colors = [];
  generateNewColors(6);

  correctColor = colors[Math.floor(Math.random() * colors.length)];

  let squares = document.getElementById("board").children;
  for (let i = 0; i < colors.length; i++) {
    squares[
      i
    ].style.backgroundColor = `rgb(${colors[i][0]},${colors[i][1]},${colors[i][2]})`;
  }

  document.getElementById(
    "rgb"
  ).innerHTML = `RGB(${correctColor[0]},${correctColor[1]},${correctColor[2]})`;
}

window.onload = function () {
  restart();
};

function pickColor(index) {
  let color = colors[index];
  let correctRGB = `rgb(${correctColor[0]},${correctColor[1]},${correctColor[2]})`;
  let squares = document.getElementById("board").children;

  if (color == correctColor) {
    for (let i = 0; i < colors.length; i++) {
      squares[i].style.backgroundColor = correctRGB;
    }
    document.getElementById("title").style.backgroundColor = correctRGB;
  } else {
    squares[index].style.backgroundColor = "var(--color-bg)";
  }
}
