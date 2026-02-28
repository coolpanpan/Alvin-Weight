const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  text.textContent = "你成功按到按鈕了！🎉";
});