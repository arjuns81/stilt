var canvas=new fabric.Canvas('eggs');
var blockwidth=30;
var blockheight=30;
playerx=400;
playery=300;

var playerobject="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,left:playerx
        });
        canvas.add(playerobject);
    });
} 
function newImg(get_img){
    fabric.Image.fromURL(get_img,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockobject);
    });
} 
window.addEventListener("keydown",master);
function master(e){
key_press=e.keyCode;
console.log(key_press);
if(e.shiftKey==true&&key_press=='80'){
    console.log("p and shift");
    blockwidth=blockwidth+10;
    blockheight=blockheight+10;
    document.getElementById("currentwidth").innerHTML=blockwidth;
    document.getElementById("currentheight").innerHTML=blockheight;
}

if(e.shiftKey==true&&key_press=='74'){
    blockwidth=blockwidth-10;
    blockheight=blockheight-10;
    document.getElementById("currentwidth").innerHTML=blockwidth;
    document.getElementById("currentheight").innerHTML=blockheight;
}
if(key_press=='37'){
    left();
    console.log("left")
}
if(key_press=='38'){
    up();
    console.log("up");
}
if(key_press=='39'){
    right();
    console.log("right");
}
if(key_press=='40'){
    down();
    console.log("down");
}
if(key_press=='65'){
   newImg('ground.png');
   console.log("a") 
}
if(key_press=='73'){
    newImg('cloud.jpg');
    console.log("i") 

}
if(key_press=='80'){
    newImg('wall.jpg');
    console.log("p") 
 
}if(key_press=='78'){
    newImg('roof.jpg');
    console.log("n") 
 }if(key_press=='66'){
    newImg('unique.jpg');
    console.log("b") 
 }if(key_press=='68'){
    newImg('dark_green.png');
    console.log("d") 
 }
}
function up(){
    if(playery>=0){
        playery=playery-20;
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down(){
    if(playery<=500)
{
    playery=playery+20;
    canvas.remove(playerobject);
    playerupdate();
}
}
function right(){
    if(playerx<=700)
    {
        playerx=playerx+20;
        canvas.remove(playerobject);
        playerupdate();
    
    }
}
function left(){
    if(playerx>=0){

        playerx=playerx-20;
        canvas.remove(playerobject);
        playerupdate();
    }
}