const button = document.querySelector("#earn");
const score = document.querySelector("#Balance");
const resetf = document.querySelector("#reset");

if (!localStorage.getItem("score")) {
  localStorage.setItem("score", 0);
}

function formatScore(value) {
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1) + "M";
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1) + "K";
  }
  return value.toString();
}

function getScore() {
  const currentScore = Number(localStorage.getItem("score"));
  score.textContent = "$ " + formatScore(currentScore);
  return currentScore;
}

function addScore() {
  const newScore = Number(localStorage.getItem("score")) + 1;
  localStorage.setItem("score", newScore);
  score.textContent = "$ " + formatScore(newScore);
}

resetf.addEventListener("click", () => {
  localStorage.setItem("score", 0);
  score.textContent = "$ " + formatScore(0);
});

getScore();

button.addEventListener("click", addScore);
