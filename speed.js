
function init(){
    window.requestAnimationFrame(draw);
}

function draw() {
    var canvas = document.getElementById('potholes');
    if(canvas.getContext) {
        
        var ctx = canvas.getContext('2d');

        var width = canvas.width;
        var height = canvas.height;
        
        var radius = 200;
        var center = {x: 200, y: 200};
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, Math.PI, 2*Math.PI);
        ctx.stroke();
        
        var tickLength = 30;

        var angles = [0, 22.5, 45, 67.5, 90, 112.5, 135, 155.5, 180];

        for(var i=0; i < angles.length; i++) { 
            ctx.moveTo(center.x + radius * Math.cos(angles[i]), center.y + radius * Math.sin(angles[i]));
            ctx.lineTo(center.x + (radius - tickLength) * Math.cos(2*Math.PI * angles[i] / 180), 
                       center.y + (radius - tickLength) * Math.sin(2*Math.PI * angles[i] / 180));
            ctx.stroke();
        }
    }
    
    window.requestAnimationFrame(draw);
}

init();