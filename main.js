canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouse_event = "empty";
var start_x, start_y;

color = "black";
width = 1;

canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e) {

    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouse_event = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouse_event = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouse_event = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
                                                                                                                

    if (mouse_event == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
    ctx.arc(current_x,current_y,20,0,2*Math.PI);
    ctx.stroke();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(current_x, current_y);
        

    }
    start_x = current_x;
    start_y = current_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}