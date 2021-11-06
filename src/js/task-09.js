function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");

const body = document.body;

const span = document.querySelector(".color");

const changeBodyColor = () =>
  (span.textContent = body.style.backgroundColor = getRandomHexColor());

btn.addEventListener("click", changeBodyColor);
