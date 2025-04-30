function drawDiagrams() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const angle = parseFloat(document.getElementById('angle').value) * Math.PI / 180; // Convert to radians

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    const middleX = canvas.width / 2;
    const middleY = canvas.height / 2;

    // Draw the boundary
    ctx.beginPath();
    ctx.moveTo(0, middleY);
    ctx.lineTo(canvas.width, middleY);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw incident ray (denser to rarer medium)
    drawRay(ctx, middleX - 50, middleY, angle, 'blue'); // Incident ray
    drawRay(ctx, middleX, middleY, angle * (n1 / n2), 'red'); // Refracted ray

    // Labels
    ctx.fillStyle = 'black';
    ctx.fillText(`n1 = ${n1}`, middleX - 100, middleY - 10);
    ctx.fillText(`n2 = ${n2}`, middleX + 25, middleY - 10);
    ctx.fillText(`Incident Angle: ${angle * 180 / Math.PI}°`, middleX - 70, middleY - 30);
}

function drawRay(ctx, startX, startY, angle, color) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 100 * Math.cos(angle), startY - 100 * Math.sin(angle));
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Calculation of refracted angle can be refined using Snell's law if needed