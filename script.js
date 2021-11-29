var ctx = document.getElementById("start").getContext("2d");
const HEIGHT = document.documentElement.clientHeight;
const WIDTH = document.documentElement.clientWidth;
var STATE = "menu";
var DIFF = "0";

function roundRect(x,y,w,h,a){
    ctx.beginPath();
    ctx.moveTo(w,h);
    ctx.arcTo(x,h,x,y,a);
    ctx.arcTo(x,y,w,y,a);
    ctx.arcTo(w,y,w,h,a);
    ctx.arcTo(w,h,x,h,a);
    ctx.fill();
}

function bg() {

    ctx.canvas.width = document.documentElement.clientWidth;
    ctx.canvas.height = document.documentElement.clientHeight;

    ctx.fillStyle = 'rgba(217, 217, 217, 0.5)';
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
    startmenu(ctx.canvas.width, ctx.canvas.height);
}

bg();
window.addEventListener('resize', bg());

function startmenu(W,H) {
    var wi = W * 0.975;
    var hi = H * 0.975;
    var wi2 = W * 0.03;
    var hi2 = H * 0.03;
    var ar = ctx.canvas.width * 0.03;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(217, 217, 217, 0.5)";
    ctx.fillStyle = "rgba(153, 153, 153, 0.9)";
    ctx.moveTo(wi,hi);
    ctx.arcTo(wi2, hi, wi2, hi2, 0);
    ctx.arcTo(wi2, hi2, wi, hi2, ar);
    ctx.arcTo(wi, hi2, wi, hi, 0);
    ctx.arcTo(wi, hi, wi2, hi, ar);
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = '9vw serif';
    ctx.fillText('Binary Guessing Game!', wi2*2, hi2*5);
    roundRect(wi2*2, hi2*10, wi * 0.97, hi * 0.98, 0);
    ctx.fillStyle = "white";
    ctx.fillText('Press Enter to Start', wi2*5.3, hi2*22);


    window.addEventListener("keydown", function(event) {
        if(event.key == 'Enter' && STATE == "menu") {
            STATE = "run";
            mainloop(W,H);
        }
    }, true);
}

function mainloop(W,H) {
    if(DIFF == 0){
        var difficulty = difficulty(W,H);
    }
    ctx.clearRect(0,0, W, H);
    ctx.
}

function difficulty(W,H) {
    var d0 = new Image();
    var d1 = new Image();
    var d2 = new Image();
    var d3 = new Image();
    ctx.clearRect(0,0, W, H);
    ctx.drawImage(d0, 0, 0, W * 2, H * 2);
    d0.src = 'assets/images/d0.svg';
}