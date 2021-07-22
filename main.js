var canvaswidth= canvas.width ;
var canvasheight= canvas.height ; 

canvas= document.getElementById("canvas");
ctx= canvas.getContext("2d");
color= "brown";
// to draw any shape
ctx.strokeStyle= red;
ctx.lineWidth= 4;
// to draw circle we use arc
ctx.arc(200,200,45,0,2*Math.PI);
ctx.stroke();
ctx.beginPath();

function circle() {
    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= 4;
    // to draw circle we use arc
    ctx.arc(canvasheight,canvaswidth,45,0,2*Math.PI);
    ctx.stroke()}; 