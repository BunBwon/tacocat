function ROBUUX() {
    document.getElementById("demo").innerHTML = "lul u poor lul";
}

function getCanvasContext() {
    const canvas = document.getElementById("drawingCanvas");
    return canvas ? canvas.getContext("2d") : null;
}

function clearCanvas() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = getCanvasContext();
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("drawHint").textContent = "Click the canvas to draw a shape.";
    window.lineStart = null;
}

function drawRectangle(ctx, x, y, color) {
    const width = 120;
    const height = 80;
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
}

function drawCircle(ctx, x, y, color) {
    const radius = 40;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

function drawLine(ctx, x, y, color) {
    if (!window.lineStart) {
        window.lineStart = { x, y };
        document.getElementById("drawHint").textContent = "Click a second point to finish the line.";
        return;
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(window.lineStart.x, window.lineStart.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    window.lineStart = null;
    document.getElementById("drawHint").textContent = "Line drawn! Click the canvas to draw another shape.";
}

function handleCanvasClick(event) {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = getCanvasContext();
    const shape = document.getElementById("shapeSelect").value;
    const color = document.getElementById("colorPicker").value;
    if (!canvas || !ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (shape === "rectangle") {
        drawRectangle(ctx, x, y, color);
    } else if (shape === "circle") {
        drawCircle(ctx, x, y, color);
    } else if (shape === "line") {
        drawLine(ctx, x, y, color);
    }
}

// Add event listeners after DOM loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ropuksgetter9000").addEventListener("click", ROBUUX);
    document.getElementById("drawingCanvas").addEventListener("click", handleCanvasClick);
    document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
});