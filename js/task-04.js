const decerementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counter.textContent = counterValue -= 1;
};

const increment = () => {
  counter.textContent = counterValue += 1;
};

decerementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
