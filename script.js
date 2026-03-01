console.log("🔥 script.js 有被載入");
const BIN_ID = "69a43cc143b1c97be9a947d1"; 
const API_KEY = "$2a$10$.Rysps8J0rt1vIbGV/ziMOUogso7dFLpSVGgLq2m3I3cqHESjCgca";

const BIN_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

async function loadWeight() {
  const res = await fetch(BIN_URL, {
    headers: {
      "X-Master-Key": API_KEY
    }
  });

  const data = await res.json();
  console.log("JSONBin 回傳：", data);

  const weight = data.record.weight;
  document.getElementById("title").innerText =
    `林靖恩 的體重：${weight} kg`;

  return weight;
}

async function saveWeight(newValue) {
  const res = await fetch(BIN_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ weight: newValue })
  });

  const result = await res.json();
  console.log("寫入結果：", result);
}

document.getElementById("btn").addEventListener("click", async () => {
  const current = await loadWeight();
  await saveWeight(current + 1);
  await loadWeight();
});

loadWeight();

