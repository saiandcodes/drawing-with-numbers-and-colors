var text = document.getElementById("txt_lines");
var d = document.getElementById("drawing");
var canvas = d.getContext("2d");
var widli = d.width;
var red_button = document.getElementById("redbutton");
red_button.addEventListener("click", drawingRed);
var green_button = document.getElementById("greenbutton");
green_button.addEventListener("click", drawingGreen);
var yellow_button = document.getElementById("yellowbutton");
yellow_button.addEventListener("click", drawingYellow);
var blue_button = document.getElementById("bluebutton");
blue_button.addEventListener("click", drawingBlue);
var violet_button = document.getElementById("violetbutton");
violet_button.addEventListener("click", drawingViolet);
var restartB = document.getElementById("restart_button");
restartB.addEventListener("click", restartDrawing)

function draw(color, x_inicial, y_inicial, x_final, y_final)
{
    canvas.beginPath();
    canvas.strokeStyle = color; 
    canvas.moveTo(x_inicial, y_inicial);
    canvas.lineTo(x_final, y_final);
    canvas.stroke();
    canvas.closePath();
}
function drawingRed(){
    var xxx = parseInt(text.value);
    var lines = xxx;
    var l = 0;
    var yi, xf;
    var space = widli/lines;
    var choosedcolor = "red"

    for(l=0; l < lines; l++){
    yi = l * space;
    xf = (l + 1) * space;
    draw(choosedcolor, yi, 0, 300, xf);
    draw(choosedcolor, 0, yi, xf, 300);
    }
    draw("white", 299,299,299,1);
    draw("white", 299,1,1,1);
    draw("white", 1,1,1,299);
    draw("white", 1,299,299,299);
}
function drawingGreen(){
    var xxx = parseInt(text.value);
    var lines = xxx;
    var l = 0;
    var yi, xf;
    var space = widli/lines;
    var choosedcolor = "green"

    for(l=0; l < lines; l++){
    yi = l * space;
    xf = (l + 1) * space;
    draw(choosedcolor, yi, 0, 300, xf);
    draw(choosedcolor, 0, yi, xf, 300);
    }
    draw("white", 299,299,299,1);
    draw("white", 299,1,1,1);
    draw("white", 1,1,1,299);
    draw("white", 1,299,299,299);
}
function drawingYellow(){
    var xxx = parseInt(text.value);
    var lines = xxx;
    var l = 0;
    var yi, xf;
    var space = widli/lines;
    var choosedcolor = "yellow"

    for(l=0; l < lines; l++){
    yi = l * space;
    xf = (l + 1) * space;
    draw(choosedcolor, yi, 0, 300, xf);
    draw(choosedcolor, 0, yi, xf, 300);
    }
    draw("white", 299,299,299,1);
    draw("white", 299,1,1,1);
    draw("white", 1,1,1,299);
    draw("white", 1,299,299,299);
}
function drawingBlue(){
    var xxx = parseInt(text.value);
    var lines = xxx;
    var l = 0;
    var yi, xf;
    var space = widli/lines;
    var choosedcolor = "blue"

    for(l=0; l < lines; l++){
    yi = l * space;
    xf = (l + 1) * space;
    draw(choosedcolor, yi, 0, 300, xf);
    draw(choosedcolor, 0, yi, xf, 300);
    }
    draw("white", 299,299,299,1);
    draw("white", 299,1,1,1);
    draw("white", 1,1,1,299);
    draw("white", 1,299,299,299);
}
function drawingViolet(){
    var xxx = parseInt(text.value);
    var lines = xxx;
    var l = 0;
    var yi, xf;
    var space = widli/lines;
    var choosedcolor = "violet"

    for(l=0; l < lines; l++){
    yi = l * space;
    xf = (l + 1) * space;
    draw(choosedcolor, yi, 0, 300, xf);
    draw(choosedcolor, 0, yi, xf, 300);
    }
    draw("white", 299,299,299,1);
    draw("white", 299,1,1,1);
    draw("white", 1,1,1,299);
    draw("white", 1,299,299,299);
}
function restartDrawing(){

}