const BIN_ID = "69a43cc143b1c97be9a947d1"; 
const API_KEY = "$2a$10$.Rysps8J0rt1vIbGV/ziMOUogso7dFLpSVGgLq2m3I3cqHESjCgca";

const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// 讀取雲端 weight
async function loadWeight() {
  const res = await fetch(BIN_URL, {
    headers: {
      "X-Master-Key": API_KEY
    }
  });

  const data = await res.json();
  const weight = data.record.weight;

  document.getElementById("title").innerText =
    `林靖恩 的體重：${weight} kg`;

  return weight;
}

// 將 weight 寫回雲端
async function saveWeight(newValue) {
  await fetch(BIN_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ weight: newValue })
  });
}

// 點按鈕 +1
document.getElementById("btn").addEventListener("click", async () => {
  let current = await loadWeight();
  let updated = current + 1;
  await saveWeight(updated);
  await loadWeight();
});

// 初始載入
loadWeight();
