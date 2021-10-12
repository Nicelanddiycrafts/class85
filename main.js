
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;
blockImageWidth = 30;
blockImageHeight = 30;

var playerObject = "";
var blockImageObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img) 
    {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,left:playerX
        });
        canvas.add(playerObject);
    });

}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img) 
    {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockImageObject);
    });

}

window.addEventListener("keydown" , mykeydown);


function mykeydown(e){
    keyPressed = e.keyCode;
    if(e.shiftKey == true && keyPressed == '80'){
        console.log("p and shift pressed together");
        blockImageWidth = blockImageWidth+10;
        blockImageHeight = blockImageHeight+10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("m and shift pressed together");
        blockImageWidth = blockImageWidth-10;
        blockImageHeight = blockImageHeight-10;
        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if(keyPressed == "38"){
        up();
        console.log("up arrow is pressed");
    }

    if(keyPressed == "40"){
        down();
        console.log("down arrow is pressed");
    }

    if(keyPressed == "37"){
        left();
        console.log("left arrow is pressed");
    }

    if(keyPressed == "39"){
        right();
        console.log("right arrow is pressed");
    }

    if(keyPressed == "87"){
        newImage("wall.jpg");
        console.log("w key is pressed");
    }

    if(keyPressed == "71"){
        newImage("ground.png");
        console.log("g key is pressed");
    }

    if(keyPressed == "76"){
        newImage("light_green.png");
        console.log("l key is pressed");
    }

    if(keyPressed == "84"){
        newImage("trunk.jpg");
        console.log("t key is pressed");
    }

    if(keyPressed == "82"){
        newImage("roof.jpg");
        console.log("r key is pressed");
    }

    if(keyPressed == "89"){
        newImage("yellow_wall.png");
        console.log("y key is pressed");
    }

    if(keyPressed == "68"){
        newImage("dark_green.png");
        console.log("d key is pressed");
    }

    if(keyPressed == "85"){
        newImage("unique.png");
        console.log("u key is pressed");
    }

    if(keyPressed == "67"){
        newImage("cloud.jpg");
        console.log("c key is pressed");
    }
}
function up(){
    if(playerY>=30){
        playerY = playerY-blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    if(playerY<=500){
        playerY = playerY+ blockImageHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left(){
    if(playerX>=30){
        playerX = playerX-blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    if(playerX<=850){
        playerX = playerX+blockImageWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}