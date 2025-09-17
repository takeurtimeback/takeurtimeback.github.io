// Create canvas
const canvasWidth = window.innerWidth; 
const canvasHeight = window.innerHeight * 0.8; 
const canvasEl = document.createElement('canvas');
canvasEl.width = canvasWidth;
canvasEl.height = canvasHeight;
canvasEl.id = 'canvas';
document.body.appendChild(canvasEl);

// Initialize canvas and drawing context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let drawing = false;
let color = "#000000";
let prevX = 0, prevY = 0;

// Event listeners for drawing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Handle color picker
document.getElementById('color-picker').addEventListener('input', function (e) {
    color = e.target.value;
});

function startDrawing(e) {
    drawing = true;
    prevX = e.offsetX;
    prevY = e.offsetY;
}

function draw(e) {
    if (!drawing) return;
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
    prevX = e.offsetX;
    prevY = e.offsetY;
}

function stopDrawing() {
    drawing = false;
}

function clearBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}