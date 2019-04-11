function setup() {
  createCanvas(400, 400);
  xPos = 400;
  yPos = 300;

  zPos = 400;
  mPos = 200;
  
  gPos=0
  wPos=300

  a = 1
}

function draw() {

  //background(46, 107, 145);
  noStroke() //lucht en wolken

  fill(168, 217, 244) //lucht
  rect(0, 0, 400, 150) //lucht

  zeilboot();

  fill(46, 107, 145) //zee
  rect(0, 150, 400, 250) //zee

  wolk(0, 0);
  wolk(280, -10);

  text(mouseX, 50, 50);
  text(mouseY, 50, 100);

    
   visje(gPos,wPos-30,255, 255, 102);
   
    gPos=gPos+1;
    if(gPos>400){
      gPos=gPos-400;
    }


  vis(xPos, yPos, 211, 150, 255);
  
  xPos = xPos - 1;
  

  if (xPos < 0) {
    xPos = xPos + 400;
  }


  vis(zPos, mPos, 140, 247, 197)

  zPos = zPos - 1;

  mPos = mPos - a
  if (mPos < 190) {
    a = -0.5
  }

  if (mPos > 220) {
    a = 0.5
  }

  if (zPos < 0) {
    zPos = zPos + 400
    
   visje(gPos,wPos,84,89,24);
   
    gPos=gPos+1;
    if(gPos>400){
      gPos=gPos-400;
    }


  }

}




function zeilboot() {
  fill(255, 0, 0);
  arc(300, 130, 100, 45, 0, PI + 0, CHORD);
  fill(0)
  rect(310, 70, 3, 60)
  fill(255)
  triangle(308, 70, 308, 120, 260, 120)

}



function wolk(x, y) {
  fill(255) //wolken
  ellipse(x + 80, y + 70, 50) //wolken
  ellipse(x + 100, y + 50, 50) //wolken
  ellipse(x + 120, y + 70, 50) //wolken

}


function vis(x, y, r, g, b) {
  fill(r, g, b)
  ellipse(x + 20, y + 10, 40, 20)
  triangle(x + 35, y + 10, x + 50, y + 2, x + 50, y + 20)
  fill(0)
  ellipse(x + 10, y + 9, 2)
}


function visje(x, y, r, g, b) {
  fill(r, g, b)
  ellipse(x - 20, y -10, 40, 20)
  triangle(x -35, y -10, x - 50, y - 2, x - 50, y - 20)
  fill(0)
  ellipse(x - 10, y -11, 2)
}

