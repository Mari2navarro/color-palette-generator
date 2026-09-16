const characters = "0123456789ABCDEF";

function generateRandomColor() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    const randomCharacter = characters[randomIndex];

    color += randomCharacter;
  }

  return color;
}

const palette = document.querySelector(".palette");

function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();

    const colorElement = document.createElement("div");

    colorElement.classList.add("color");

    colorElement.style.backgroundColor = color;

    palette.appendChild(colorElement);
  }
}

generatePalette();
