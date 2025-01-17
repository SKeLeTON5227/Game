const button = document.querySelector("#earn");
const score = document.querySelector("#Balance");

score.textContent = "$ " + getScore();

function getScore() {
  score.innerHTML = "$ " + localStorage.getItem("score");
  return localStorage.getItem("score");
}

function addScore() {
  localStorage.setItem("score", Number(getScore()) + 1);
  score.textContent = "$ " + getScore();
}

button.addEventListener("click", addScore);
