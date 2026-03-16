console.log("🔥 script.js 有被載入");

// 讀取體重
function loadWeight() {
  let weight = localStorage.getItem("weight");

  if (weight === null) {
    weight = 0;
    localStorage.setItem("weight", weight);
  }

  document.getElementById("title").innerText =
    `林靖恩 的體重：${weight} kg`;

  return Number(weight);
}

// 儲存體重
function saveWeight(value) {
  localStorage.setItem("weight", value);
}

// 按鈕
document.getElementById("btn").addEventListener("click", () => {
  let current = loadWeight();
  current += 1;

  saveWeight(current);
  loadWeight();
});

// 初始化
loadWeight();
