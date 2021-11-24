var canvas;
var character, characterImg;
var map, mapImgWithNames, mapImgWithOutNames;

function preload(){
    characterImg = loadImage("PLYYER.png");
    mapImgWithOutNames = loadImage("map_with_out_names.png");
    mapImgWithNames = loadImage("map_with_names.png");
}

function setup(){
    canvas = createCanvas(800,500);

    character = createSprite(400 + 260, 250 + 100, 20,20);
}

function draw(){
    background("white");
    if(keyDown(UP_ARROW)){
        character.y += -4;
    }
    drawSprites();
}