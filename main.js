function preload()
{
 
}
function setup(){  
        canvas = createCanvas(640,480);
    canvas.position(110,250);
        video = createCapture(VIDEO);
    video.hide();
    tint_colour = "";
}
function draw(){
        image(video,0,0,640,480);
        tint(tint_colour);
        rect(30, 20, 580, 55);
        fill("orange");
        rect(40, 400, 570, 55);
        rect(30, 20, 55, 435);
        rect(555, 20, 55, 435);
}
function take_snapshot()
{
        save("MyFilteredImg.png");
}
function change_color() 
{
        tint_colour = document.getElementById("color_name").value;
}

