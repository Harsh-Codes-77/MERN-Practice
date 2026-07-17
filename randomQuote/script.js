const quotes = ["Believe in yourself", "Success comes from consistency", "Practice makes perfect", "Never give up", "Stay positive", "Hard work pays off", "Dream big", "Embrace challenges", "Learn from failures", "Be kind to others"];

// const generateButton = document.getElementById("generate");
// const quoteDisplay = document.getElementById("quote");

const generateButton = document.querySelector("#generate");
const quoteDisplay = document.querySelector("#quote");

generateButton.onclick = function(){
    const rIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerHTML = quotes[rIndex];
}
