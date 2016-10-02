
function init(){
    window.requestAnimationFrame(draw);
}

function draw() {
    var canvas = document.getElementById('potholes');
    if(canvas.getContext) {
        
        var ctx = canvas.getContext('2d');

        var width = canvas.width;
        var height = canvas.height;
        
        var max_begin_y = 400;
        var max_end_y = 0;
        var time = new Date();
        
        var threshold = true;
        
        var speed = threshold? 500 : 1000;

        var time_factor = time.getMilliseconds() % speed;
        var now_begin_y = max_begin_y - (max_begin_y - max_end_y)*(time_factor / speed);
        
        var my_gradient = ctx.createLinearGradient(0, now_begin_y,
                                                   0, now_begin_y - max_begin_y/3);
        

        var road_color = "#dddddd"; 
        my_gradient.addColorStop(0, road_color);
        // failure... they end up too close together.... what it should change is the gradient step
        /*        if(threshold) {
            my_gradient.addColorStop(0.1, "red");
            my_gradient.addColorStop(0.5, road_color);
            my_gradient.addColorStop(0.9, "red");
            } else {*/
            my_gradient.addColorStop(0.5, threshold ? "red" : "black");
            //        }
        
        my_gradient.addColorStop(1, road_color);


        ctx.fillStyle = road_color;

        ctx.fillRect(0, 0, 100, 500);
        ctx.fillRect(100, 0, 100, 500);
        ctx.fillRect(200, 0, 100, 500);
        
        ctx.fillStyle = my_gradient;
        ctx.fillRect(225, 0, 50, 400);

        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(100, 500);
        ctx.stroke();

        ctx.moveTo(200,0);
        ctx.lineTo(200, 500);
        ctx.stroke();

    }
    
    window.requestAnimationFrame(draw);
}

init();