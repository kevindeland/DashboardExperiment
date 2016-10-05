
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        
        var width = 200;
        var height = 200;

        var size = 300;
        
        var points = [[0,height],
                      [width/6,height-height/6],
                      [width/4,height-height/3],
                      [5/12 * width, 7 / 12 * height],
                      [6/12 * width, 5/12*height],
                      [8/12*width,height/3],
                      [3/4*width,height/6],
                      [width,0], 
                      [0,0]];

        var data = scalePoints(points, 1.25);

        drawAndFillPath(ctx, data, true, "#6699ff");
        drawAndFillPath(ctx, points, true);
        drawAndFillPath(ctx, scalePoints(points,1.1), false);
        drawAndFillPath(ctx, scalePoints(points,1.2), false);
        drawAndFillPath(ctx, scalePoints(points,1.3), false);
        drawAndFillPath(ctx, scalePoints(points,1.4), false);
        drawAndFillPath(ctx, scalePoints(points,1.5), false);
        
        
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
}