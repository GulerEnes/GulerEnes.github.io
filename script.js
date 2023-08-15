const participants = [
  "Katılımcı 1", 
  "Katılımcı 2", 
  "Katılımcı 3", 
  "Katılımcı 4", 
  "Katılımcı 5", 
  "Katılımcı 6", 
  "Katılımcı 7", 
  "Katılımcı 8", 
  "Katılımcı 9", 
  "Katılımcı 10", 
  "Katılımcı 11", 
  "Katılımcı 12",
  "Katılımcı 13", 
  "Katılımcı 14"
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
