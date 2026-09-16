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

console.log(generateRandomColor());
