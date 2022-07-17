const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

create.addEventListener("click", () => createBoxes(amount));
input.addEventListener("input", (e) => {
  amount = e.target.value;
});
destroy.addEventListener("click", () => destroyBoxes());

let amount = 0;

function createBoxes(amount) {
  let boxSize = 30;

  for (let i = 0; i < amount; i += 1, boxSize += 10) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.background = getRandomHexColor();
    box.style.height = `${boxSize}px`;
    box.style.width = `${boxSize}px`;

    boxes.append(box);
  }
}

const destroyBoxes = () => {
  boxes.textContent = "";
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
