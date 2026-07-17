const input = document.getElementById('diceSides');
const rollButton = document.getElementById('rollButton');
const resultDiv = document.getElementById('result');

rollButton.addEventListener('click', () => {

    const sides = parseInt(input.value);

    if (isNaN(sides) || sides < 2) {
        resultDiv.textContent =
            "Please enter a valid number of sides.";
        return;
    }

    const roll =
        Math.floor(Math.random() * sides) + 1;

    resultDiv.textContent =
        `You rolled: ${roll}`;
});