function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const setColor = document.querySelector(".color");
const setBg = document.querySelector(".change-color");

setBg.addEventListener("click", (event) => {
  body.style.background = getRandomHexColor();
  setColor.textContent = getRandomHexColor();
});
