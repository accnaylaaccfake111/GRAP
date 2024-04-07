var color = document.querySelector('#color');
var eraser = document.querySelector('#eraser');
var decrease = document.querySelector('#decrease');
var increase = document.querySelector('#increase');
var size = document.querySelector('#size')
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(1000,500);
// ctx.stroke();

console.log('succes!')

// innit
var currentPos = {
    x: 0,
    y: 0
}

var currentPosAfter = {
    x: 0,
    y: 0
}

var isDrawing = false
var colorPaint = '#000000'
var sizeValue = 10
size.innerText = sizeValue

document.addEventListener('mousedown',function(e){
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})

// draw
document.addEventListener('mousemove', function(e){
    if (isDrawing){
        currentPosAfter = {
            x: e.offsetX,
            y: e.offsetY
        }

        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, sizeValue, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(currentPos.x,currentPos.y);
        ctx.lineTo(currentPosAfter.x,currentPosAfter.y);
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = sizeValue * 2;
        ctx.stroke();
    
        currentPos.x = currentPosAfter.x
        currentPos.y = currentPosAfter.y
    }
})

document.addEventListener('mouseup',function(e){
    isDrawing = false
})

// color
color.addEventListener('change', function(e){
    console.log('set color: ',e.target.value);
    colorPaint = e.target.value
})

eraser.addEventListener('click', function(e){
    colorPaint = '#ffffff'
})

// size
decrease.addEventListener('click', function(e){
    sizeValue -=5
    sizeValue = sizeValue > 5 ? sizeValue : 5
    console.log('size: ',sizeValue,size)
    size.innerText = sizeValue
})

increase.addEventListener('click', function(e){
    sizeValue +=5
    sizeValue = sizeValue < 30 ? sizeValue : 30
    size.innerText = sizeValue
})