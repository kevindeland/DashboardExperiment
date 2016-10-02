

function init(){
    window.requestAnimationFrame(draw);
}

function draw() {
    var canvas = document.getElementById('potholes');
    if(canvas.getContext) {
        
        var ctx = canvas.getContext('2d');

        var width = canvas.width;
        var height = canvas.height;

        var w_vis = 400;
        var h_vis = 100;

        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,w_vis, h_vis);
        
        var potholes = [0.5, 0.5, 0.75, 1, 2, 2.5];
        var max_depth = 3.0;
        
        var pothole_buffer_ratio = 2.0;

        var segments = potholes.length * pothole_buffer_ratio + potholes.length + 1;
        var segment_width = w_vis / segments;
        

        // draw potholes
        var draw_x = 0;
        for (var i=0; i < potholes.length; i++) {
            draw_x += segment_width;
            ctx.fillStyle = "white";
            ctx.fillRect(draw_x, 0, segment_width * pothole_buffer_ratio, potholes[i] / max_depth * h_vis);
            draw_x += segment_width * pothole_buffer_ratio;
        }
        
        for (var d=0; d < max_depth; d+= 0.5) {
            ctx.beginPath();
            ctx.moveTo(0, d / max_depth * h_vis);
            ctx.lineTo(w_vis, d / max_depth * h_vis);
            ctx.stroke();
        }
    }
}

init();