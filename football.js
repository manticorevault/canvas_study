const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// Borders
ctx.beginPath();
ctx.rect(0,0, canvas.width, canvas.height);
ctx.fillStyle = "#060";
ctx.fill();
ctx.lineWidth = 1;
ctx.strokeStyle = "#FFF";
ctx.stroke();
ctx.closePath();

ctx.fillStyle = "#FFF";

// Midfield

ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 73, 0, 2*(Math.PI), false);
ctx.stroke();

ctx.beginPath()
ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2, 2 * Math.PI, false)
ctx.fill();
ctx.closePath();


// Left Area
ctx.beginPath();
ctx.rect(0, (canvas.height - 250) / 2, 132, 250);
ctx.stroke();
ctx.closePath();

// Left Half-circle
ctx.beginPath();
ctx.arc(88, canvas.height / 2, 73, 0.29*Math.PI, 1.71*Math.PI, true)
ctx.stroke();
ctx.closePath();

// Left Goalkeeper Area
ctx.beginPath();
ctx.rect(0, (canvas.height - 122) / 2, 50, 122)
ctx.stroke();
ctx.closePath();

// Right Area
ctx.beginPath();
ctx.rect(canvas.width-132, (canvas.height - 250) / 2, 132, 250);
ctx.stroke();
ctx.closePath();

// Left Half-circle
ctx.beginPath();
ctx.arc(canvas.width - 88, canvas.height / 2, 73, 1.29*Math.PI, 0.71*Math.PI, true)
ctx.stroke();
ctx.closePath();

// Right Goalkeeper Area
ctx.beginPath();
ctx.rect(canvas.width - 50, (canvas.height - 122) / 2, 50, 122)
ctx.stroke();
ctx.closePath();

// Right Corner Top
ctx.beginPath();
ctx.arc(0, 0, 15, 0, 0.5*Math.PI, false)
ctx.stroke();
ctx.closePath();

// Right Corner Bottom
ctx.beginPath();
ctx.arc(0, canvas.height, 15, 0, 2*Math.PI, true)
ctx.stroke();
ctx.closePath();

// Left Corner Top
ctx.beginPath();
ctx.arc(canvas.width, 0, 15, 0, 1*Math.PI, false)
ctx.stroke();
ctx.closePath();

// Left Corner Bottom
ctx.beginPath();
ctx.arc(canvas.width, canvas.height, 15, 1*Math.PI, 1.5*Math.PI, false)
ctx.stroke();
ctx.closePath();