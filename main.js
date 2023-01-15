video="";
status1=false;
function preload(){
    video=createCapture(VIDEO);
    video.hide();
}
function setup(){
    canvas=createCanvas(400,300)
    canvas.parent("canvas");
	posenet=ml5.poseNet(video,modal_ready);
}
function draw(){
    image(video, 0,0,400,300);
}
function modal_ready(){
    console.log("model has loaded");
    status1=true;
}
