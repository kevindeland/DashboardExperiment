
function initLandslide(){
    window.requestAnimationFrame(drawLandslide);
}

function drawLandslide() {
    var canvas = document.getElementById('landslide');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        
        var width = 200;
        var height = 200;
        var size = 300;

        var time = new Date();
        
        var fills = ["#6699ff", "#ff6699", "#99ff66"];
        // for dance party mode, uncomment
        fill = fills[(Math.floor(time.getMilliseconds() / (1000/6) ))% 3];
        fill = fills[0];
        
        // color gradient mode
        var my_gradient = ctx.createLinearGradient(0,0,
                                                   Math.floor(time.getMilliseconds()/1000 * (size+100)),
                                                   Math.floor(time.getMilliseconds()/1000 * (size+100)));
        my_gradient.addColorStop(0, "white");
        var aboveThreshold = true;
        var dataColor = aboveThreshold? "#ff4444" :"#6699ff";
        var dataMultiplier = aboveThreshold? 1.42 : 1.25;
        
        my_gradient.addColorStop(0.5, dataColor);
        my_gradient.addColorStop(1, "white");
        fill = my_gradient;

        // defining mountain points
        
        var points = [[0,height],
                      [width/6,height-height/6],
                      [width/4,height-height/3],
                      [5/12 * width, 7 / 12 * height],
                      [6/12 * width, 5/12*height],
                      [8/12*width,height/3],
                      [3/4*width,height/6],
                      [width,0], 
                      [0,0]];

        var chunkX = scalePoints(points, 0.8);
        var chunk = [
                     points[1],
                     points[2],
                     points[3],
                     points[4],
                     points[5]
                     
                     ];

        var data = scalePoints(points, dataMultiplier);
        

        //        drawAndFillPath(ctx, data, true, fill);
        drawAndFillPath(ctx, points, true);
        drawAndFillPath(ctx, chunk, true, fill);
        //drawAndFillPath(ctx, scalePoints(points,1.1), false);
        //drawAndFillPath(ctx, scalePoints(points,1.2), false);
        //drawAndFillPath(ctx, scalePoints(points,1.3), false);
        //drawAndFillPath(ctx, scalePoints(points,1.4), false);
        //drawAndFillPath(ctx, scalePoints(points,1.5), false);
        
        
    }

    function drawAndFillPath(ctx,points, fill, color) {
        ctx.beginPath();
        ctx.moveTo(points[0][0], size - points[0][1]);

        for(var i=1; i< points.length; i++) {
            ctx.lineTo(points[i][0], size-points[i][1]);
        }
        
        ctx.fillStyle = color || "black";
        fill ? ctx.fill() : ctx.stroke();
    }

    function scalePoints(points, scale) {
        var points2 = [];
        
        points.forEach(function(x) {
                var point = [x[0]*scale, x[1]*scale]
                points2.push(point);
            });
        return points2;
    }

    function fitToCanvas(ctx, x, y) {
        
    }


    window.requestAnimationFrame(drawLandslide);
}

initLandslide();