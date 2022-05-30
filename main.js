var canvas= new fabric.Canvas('myCanvas');

player_x= 10;
player_y= 10;

block_image_width= 30;
block_image_height= 30;

var player_object= "";
var block_image_object= "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function newimage(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("Keydown",myKeydown);

function myKeydown(e) {
    keypress=e.keyCode;
    console.log(keypress);

    if (e.shiftKey==true && keypress=='80') {
        console.log("shift key and p are pressed together");
       block_image_height= block_image_height + 10;
       block_image_width= block_image_width + 10;
       document.getElementById("current_Width").innerHTML= block_image_width;
       document.getElementById("current_Height").innerHTML= block_image_height;

    }

    if (e.shiftKey==true && keypress=='77') {
        console.log("shift key and m are pressed together");
       block_image_height= block_image_height - 10;
       block_image_width= block_image_width - 10;
       document.getElementById("current_Width").innerHTML= block_image_width;
       document.getElementById("current_Height").innerHTML= block_image_height;

    }

    if (keypress == '38') {
        up();
        console.log("up");
    }
    if (keypress == '40') {
        down();
        console.log("down");
    }
    if (keypress == '39') {
        right();
        console.log("right");
    }
    if (keypress == '37') {
        left();
        console.log("left");
    }
    if (keypress == '84') {
        newimage('trunk.jpg');
        console.log("trunk");
    }

    if (keypress == '68') {
        newimage('dark_green.png');
        console.log("dark green");
    }
    if (keypress == '76') {
        newimage('light_green.png');
        console.log("light green");
    }
    if (keypress == '71') {
        newimage('ground.png');
        console.log("ground");
    }
    if (keypress == '87') {
        newimage('wall.jpg');
        console.log("wall");
    }
    if (keypress == '89') {
        newimage('yellow_wall.png');
        console.log("yellow colour wall");
    }
    if (keypress == '82') {
        newimage('roof.jpg');
        console.log("roof");
    }
    if (keypress == '67') {
        newimage('cloud.jpg');
        console.log("cloud");
    }
    if (keypress == '85') {
        newimage('unique.png');
        console.log("unique");
    }
}

function up() {

if (player_y>=0) {
    player_y=player_y - block_image_height;
    console.log("block image height = " + block_image_height);
    console.log("When Up arrow is clicked, X = " + player_x + " , Y = " + player_y);
    canvas.remove(player_object);
    playerUpdate();
}

}

function down() {

    if (player_y <=500) {
        player_y=player_y + block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("When down arrow is clicked, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
    
}

function left() {

    if (player_x >=0) {
        player_x=player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When left arrow is clicked, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
        
}

function right() {

    if (player_x <=800) {
        player_x=player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("When right arrow is clicked, X = " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
        
}