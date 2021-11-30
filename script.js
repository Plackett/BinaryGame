var ctx = document.getElementById("start").getContext("2d");
const HEIGHT = document.documentElement.clientHeight;
const WIDTH = document.documentElement.clientWidth;
var STATE = "menu";
var DIFF = "0";
var d = new Image();
var dw = new Image();
var dt = new Image();
var dth = new Image();
d.src = 'assets/images/d0.svg';
dw.src = 'assets/images/d1.svg';
dt.src = 'assets/images/d2.svg';
dth.src = 'assets/images/d3.svg';
var timer = 0;

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
	var wi = ctx.canvas.width * 0.975;
    var hi = ctx.canvas.height * 0.975;
    var wi2 = ctx.canvas.width * 0.03;
    var hi2 = ctx.canvas.height * 0.03;
    var ar = ctx.canvas.width * 0.03;
    ctx.beginPath();
    ctx.strokeStyle = "rgba(217, 217, 217, 1)";
    ctx.fillStyle = "rgba(153, 153, 153, 0.9)";
    ctx.moveTo(wi,hi);
    ctx.arcTo(wi2, hi, wi2, hi2, 0);
    ctx.arcTo(wi2, hi2, wi, hi2, ar);
    ctx.arcTo(wi, hi2, wi, hi, 0);
    ctx.arcTo(wi, hi, wi2, hi, ar);
    ctx.fill();
	ctx.fillStyle = 'black';
    ctx.font = '9vw serif';
    ctx.fillText('Binary Guessing Game!', wi2*2, hi2*5);
	if(STATE == 'menu'){
		startmenu(ctx.canvas.width, ctx.canvas.height);
	}
	if(STATE == 'run'){
		ctx.fillStyle = "rgba(0,0,0,0.5)";
		roundRect(wi2*2, hi2*10, wi * 0.97, hi * 0.98, 0);
	}
}

bg();
window.addEventListener('resize', bg());

function startmenu(W,H) {
    var wi = W * 0.975;
    var hi = H * 0.975;
    var wi2 = W * 0.03;
    var hi2 = H * 0.03;
    var ar = ctx.canvas.width * 0.03;
	ctx.fillStyle = 'rgba(0,0,0,0.5)';
    roundRect(wi2*2, hi2*10, wi * 0.97, hi * 0.98, 0);
    ctx.fillStyle = 'black';
    ctx.font = '9vw serif';
    ctx.fillText('Binary Guessing Game!', wi2*2, hi2*5);
    ctx.fillStyle = 'white';
    ctx.fillText('Press Enter to Start', wi2*5.3, hi2*22);


    window.addEventListener("keydown", function begin(event) {
		if(event.key == 'Enter' && STATE == "menu") {
            STATE = "run";
            mainloop(W,H);
			window.removeEventListener("keydown", begin());
        }
	}, true);
}

function mainloop(W,H) {
    ctx.clearRect(0,0, W, H);
	var prob;
	bg();
	if(DIFF == "0"){
		diffselect(W,H);
	} 
	if(DIFF > 0){
		ctx.clearRect(0,0, W, H);
		bg();
		if(DIFF == 1){
			
			
			
		}
		if(DIFF == 2){
			
		}
		if(DIFF == 3){
			
		}
		ctx.font = '1vw serif';
		ctx.fillStyle = 'black';
		ctx.fillText('Press Escape to Pause', W * 0.1, H*0.1,W* 0.2,H*0.2);
		var pause = false;
		window.addEventListener("keydown", function ending(event) {
			if(event.key == 'Escape') {
				if(pause == false){
					var storedtime = timer;
					var storedprob = prob;
					ctx.fillStyle = 'rgba(0,0,0,0.4)';
					ctx.fillRect(0,0,W,H);
					ctx.fillText('PAUSED', W/2,H/2,W * 0.7,H * 0.7);
					ctx.fillText('Press ESC again to quit, SPACEBAR to resume', W/2,H/2,W * 0.7,H * 0.7);
					this.setTimeout(() => { pause = true; }, 2000 );
				}
				if(pause == true){
					this.alert("Thanks for playing!");
					STATE = 'menu';
					DIFF = 0;
					ctx.clearRect(0,0, W, H);
					bg();
					window.removeEventListener("keydown", begin());
					window.removeEventListener("keydown", ending());
					window.removeEventListener("resize", bg());
					window.removeEventListener("keydown", diff());
				}
			}
			if(event.key == 'Space' && pause == true){
				pause == false;
				ctx.clearRect(0,0, W, H);
				bg();
				styleprob(storedprob, storedtime);
			}
		}, true );
	}
}

function diffselect(W,H) {
	ctx.fillStyle = 'white';
	ctx.font = '7vw serif';
	ctx.fillText('Select Difficulty', W * 0.2, H* 0.4);
	ctx.drawImage(d, W * -0.1, H * 0.01, W * 1.5, H * 1.5);
	DIFF = 0;
	window.addEventListener("keydown", function diff(event){
		if(event.key == 'ArrowRight') {
			if(DIFF < 3) {
				DIFF = DIFF + 1
			}
		}
		if(event.key == 'ArrowLeft') {
			if(DIFF > 1) {
				DIFF = DIFF - 1;
			}
		}
		ctx.clearRect(0,0, W, H);
		bg();
		ctx.fillStyle = 'white';
		ctx.font = '7vw serif';
		ctx.fillText('Select Difficulty', W * 0.2, H* 0.4);
		if(DIFF == 0){
			ctx.drawImage(d, W * -0.1, H * 0.01, W * 1.5, H * 1.5);
		}
		if(DIFF == 1){
			ctx.drawImage(dw, W * -0.1, H * 0.01, W * 1.5, H * 1.5);
		}
		if(DIFF == 2){
			ctx.drawImage(dt, W * -0.1, H * 0.01, W * 1.5, H * 1.5);
		}
		if(DIFF == 3){
			ctx.drawImage(dth, W * -0.1, H * 0.01, W * 1.5, H * 1.5);
		}
		if(event.key == 'Enter') {
			window.removeEventListener("keydown", diff());
			mainloop(W,H);
		}
	}, true);
}

function styleprob(prob, timer){

}