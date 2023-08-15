const participants = [
  "Enes", 
  "Cihat", 
  "Ali Fuat", 
  "Baran ", 
  "Doğukan", 
  "Fatih", 
  "Harun", 
  "Hüseyin", 
  "Musa", 
  "Emre", 
  "Halil", 
  "+90 507 509 05 90",
  "+90 507 584 74 94", 
  "+90 546 907 32 66"
];

const drawButton = document.getElementById("drawButton");
const resultList = document.getElementById("resultList");
const beginningLength = participants.length;
drawButton.addEventListener("click", () => {
  if (participants.length > 0) {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants.splice(randomIndex, 1)[0];
    const listItem = document.createElement("li");
    listItem.textContent = `${winner} - Sıra: ${beginningLength - participants.length}`;
    resultList.appendChild(listItem);
  } else {
    drawButton.disabled = true;
  }
});
