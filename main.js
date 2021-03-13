canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover1_width=100;
rover1_height=90;
rover1_img=  "rover.png";
rover1_x=10;
rover1_y=10;

rover2_width=100;
rover2_height=90;
rover2_img=  "rover2.png";
rover2_x=10;
rover2_y=100;

backgound_image="mars.jpg";


function add(){
    background_imgtag=new Image();
    background_imgtag=uploadbackground;
    background_imgtag.src=backgound_image;

    rover1_imgtag=new Image();  
    rover1_imgtag=uploadrover;
    rover1_imgtag.src=rover_img;

    rover2_imgtag=new Image();
    rover2_imgtag=uploadrover;
    rover2_imgtag.src=rover2_img;
}

function uploadbackground(){
    ctx.drawImage(backgound_imgtag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover1_imgtag,rover1_x,rover1_y,rover1_width,rover1_height);
    ctx.drawImage(rover2_imgtag,rover2_x,rover2_y,rover2_width,rover2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
if(keypressed=='65'){
    a();
    console.log("a");
}
if(keypressed=='68'){
    d();
    console.log("d");
}
if(keypressed=='37'){
    left();
    console.log("left");
}
if(keypressed=='39'){
    right();
    console.log("right");
}
}