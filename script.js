let weight = 0;

const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  weight++;
  title.textContent = `林靖恩 的體重：${weight} kg`;
});