// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    background, createCanvas, height, image, loadImage, width, fill, circle
 */

// prints "hi" in the browser's dev tools console

//let dvdImage;
let xPosition;
let xVelocity;
let yPosition;
let yVelocity;
let color;

function setup(){
  createCanvas(800, 600);
  
  xPosition=50;
  xVelocity=1;
  yPosition=50;
  yVelocity=1;
  color = 0;
  // We only want to load the logo once.
  //dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  
}

function draw(){
  background(220);
  circle(xPosition, yPosition, 100);
  fill(color);
  
  if(xPosition>750)
    {
      xVelocity=-1;
      if(color == 0){
        color = 255;
        fill(color);
      }else{
        color = 0;
        fill(color);
      }
    }
  if(xPosition<50)
    {
      xVelocity=1;
      if(color == 0){
        color = 255;
        fill(color);
      }else{
        color = 0;
        fill(color);
      }
    }
  
  if(yPosition>550)
    {
      yVelocity=-1;
      if(color == 0){
        color = 255;
        fill(color);
      }else{
        color = 0;
        fill(color);
      }
      
    }
  
  if(yPosition<50)
    {
      yVelocity=1;
      if(color == 0){
        color = 255;
        fill(color);
      }else{
        color = 0;
        fill(color);
      }
    }
  
  xPosition+=xVelocity;
  yPosition+=yVelocity;
  
  // Draw the logo at the new position.
  //image(dvdImage, xPosition,  yPosition, 200, 150);
}