var song="";
var leftwristX=0;
var leftwristY=0;
var rightwristY=0;
var rightwristX=0;

function preload(){
song=loadSound("WDTA.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.position(530,200);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotPoses);
}
function draw(){
image(video,0,0,500,500);
}
function play(){
    song.play();
    song.setVolume(0.1);
    song.rate(1);

}
function stop(){
    song.stop();
}
function modelloaded(){
    console.log("poseNet is initialized" );

}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    leftwristX=results[0].pose.leftWrist.x;
    leftwristY=results[0].pose.leftWrist.y;
    console.log("leftwrist x = "+ leftwristX);
    console.log("leftwrist y = "+ leftwristY);
    rightwristX=results[0].pose.rightWrist.x;
    rightwristY=results[0].pose.rightWrist.y;
    console.log("rightwrist x = "+ rightwristX);
    console.log("rightwrist y = "+ rightwristY);
}
}