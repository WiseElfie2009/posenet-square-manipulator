noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(400,400);
video.position(50,190);

canvas=createCanvas(400,400);
canvas.position(600,190);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function modelLoaded(){
console.log("(☞゚ヮ゚)☞ Posenet is initialised ☜(゚ヮ゚☜)")
}

function gotPoses(results){

    if(results.length>0){
    //nose position
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;

    //X position of both wrists
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    }
}

function draw(){
    background('#9c6d6a');

    document.getElementById("square_area").innerHTML="width & height of square ="+difference+"px";
    fill('#eb6942');
    stroke('#eb6942');
    square(noseX,noseY,difference);
}


