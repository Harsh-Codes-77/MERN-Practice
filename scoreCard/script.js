const up = document.querySelector("#increment");
const down = document.querySelector("#decrement");
const reset = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");

let score = 0;

up.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

down.addEventListener("click", () => {
    if (score > 0) {
        score--;
        scoreDisplay.textContent = score;
    }
});

reset.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
});