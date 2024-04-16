let imgs = [];
let horse1, horse2, horse3, horse4

function preload(){
  horse1 = loadImage("horses/horse1.png");
  horse2 = loadImage("horses/horse2.png");
  horse3 = loadImage("horses/horse3.png");
  horse4 = loadImage("horses/horse4.png");
  gif_loadImg = loadImage("buildings/building.gif")
  gif_createImg = createImg("buildings/building.gif")
}


let bg;

function setup() {

  imgs.push(horse1);
  imgs.push(horse2);
  imgs.push(horse3);
  imgs.push(horse4);

  horse4.resize(500,0);
  horse1.resize(500,0);
  horse2.resize(500,0);
  horse3.resize(500,0);

  createCanvas(640, 480);
  frameRate(5)

  checkbox = createCheckbox();
  checkbox.position(350,785);
}

function draw(){
  background(gif_loadImg);
 
  if (checkbox.checked()) {
    let r = random(imgs);
    image(r,50,100);
    let s = second();
    textSize (60,0);
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(40)
    text( s,316,60);
  }
  textSize(20,0)
  fill(255,0,0);
  text('start time?',255,316)
  }
 
  
  









