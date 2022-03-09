const button = document.querySelector("button");
body = document.getElementById("body");
colorArea = document.getElementById("colorHex");

button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = `#${random}`;
  colorArea.textContent = `Hex Code : #${random}`;
});
