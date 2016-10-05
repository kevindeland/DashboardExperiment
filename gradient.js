
function init() {
    draw();
}

function draw() {
    var c=document.getElementById("gradient");
    var ctx=c.getContext("2d");
    var my_gradient=ctx.createLinearGradient(0,0,300,300);
    
    my_gradient.addColorStop(0,"#6699ff");
    my_gradient.addColorStop(0.25,"red");
    my_gradient.addColorStop(0.75,"yellow");
    my_gradient.addColorStop(1,"#6699ff");

    ctx.fillStyle=my_gradient;
    ctx.fillRect(0,0,300,300);
}

init();