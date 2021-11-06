const input = document.getElementById("font-size-control");

const text = document.getElementById("text");

const changeTextSize = (event) =>
  (text.style.fontSize = `${event.currentTarget.value}px`);

input.addEventListener("input", changeTextSize);
