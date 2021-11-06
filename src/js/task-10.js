function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector(["input"]);

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const container = document.getElementById("boxes");

function createBoxes(amount) {
  amount = input.value;
  const numbers = [];
  for (let i = 1; i < Number(amount) + 1; i += 1) {
    numbers.push(i * 10);
  }
  numbers.forEach((number) => {
    const box = document.createElement("div");
    box.style.width = `${number}px`;
    box.style.height = `${number}px`;
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    container.append(box);
  });
}

function destroyBoxes() {
  const boxes = document.querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i += 1) {
    boxes[i].remove();
  }
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
