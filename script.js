const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

noBtn.addEventListener("mouseover", () => {
  const parent = document.querySelector('.button-group');
  const maxX = parent.offsetWidth - noBtn.offsetWidth;
  const maxY = parent.offsetHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";
});

const heartContainer = document.getElementById("heartContainer");

function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "%";
  heart.style.top = "70%"; // near the bears

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

// When Yes is clicked, start hearts
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";

  // Pop hearts every 200ms for 2s
  const heartInterval = setInterval(createFloatingHeart, 200);
  setTimeout(() => clearInterval(heartInterval), 2000);
});