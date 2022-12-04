function preload(){

}
function setup(){
    createCanvas(300,400)

    video=createCapture();
    video.size(300,400);
    video.hide;
}
function draw(){
    image(img, 10,10,150,120);

    fill("#ff0000");
    stroke("#ff0000")
    circle(5,6,9);
}