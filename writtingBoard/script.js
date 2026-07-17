const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clear');

// Drawing state

let isDrawing = false;
let brushColor = '#1f1f1f';
let brushWidth = 5;

// Mousedonwn event listener
// user click and hold the board -> drawing starts

canvas.addEventListener('mousedown', (event) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
});

// Mouseup event listener
// user release the mouse button -> drawing stops

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.closePath();
});

// Mousemove event listener
// user moves the mouse while holding the button -> drawing continues

canvas.addEventListener('mousemove', (event) => {
    if(isDrawing){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }

    ctx.lineWidth = brushWidth;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
    ctx.closePath();
});

canvas.addEventListener('mouseenter', (event) => {
    console.log("You can draw")
});

// clear board

clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// double click event listener

canvas.addEventListener('dblclick', () => {
    const randomBg = `hsl(${Math.random() * 360}, 80%, 90%)`;
    canvas.style.backgroundColor = randomBg;
});

canvas.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const randomColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
    brushColor = randomColor;
    alert(`Brush color changed to ${randomColor}`);
});
