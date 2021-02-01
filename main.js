canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

function rect(){
    ctx.beginPath();
    ctx.strokeStyle=red;
    ctx.lineWidth= 1;
    ctx.rect(150,143,430,200);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle=blue;
    ctx.lineWidth= 5;
    ctx.rect(250,210,40,0,2);
    ctx.stroke();
}