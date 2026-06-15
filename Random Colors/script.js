const container = document.querySelector(".container");
for (let i = 0; i < 40; i++) {
  const box = document.createElement("div");
  box.classList.add("color-container");
  container.appendChild(box);
}
const boxes = document.querySelectorAll(".color-container");
boxes.forEach((box) => {
  const color = getRandomColor();
  box.style.backgroundColor = color;
  box.innerText = color;
});
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}