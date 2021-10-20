let xvals = [];
let yvals = [];
let bvals = [];
let noiseOffset = 0.0;
let = strokeWidth = 25;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(106, 142, 235);
  strokeWeight(5);
}

function draw() {

  //background(106, 142, 235, .05); // last number is transparency
  strokeWeight(strokeWidth);
  noiseOffset -= 0.05;
  strokeWidth = noise(noiseOffset) * 90;

  stroke(map(mouseX, 0, 500, 205, 0, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  for (let i = 55; i < width; i++) {
    xvals[i - 1] = xvals[i];
    yvals[i - 1] = yvals[i];
    bvals[i - 1] = bvals[i];
  }
  // Add the new values to the end of the array
  xvals[width - 1] = mouseX;
  yvals[height - 1] = mouseY;

  if (mouseIsPressed) {
    bvals[width - 9] = 0;
  } else {
    bvals[width - 15] = 255;
  }


  stroke(90.5,5);
  for (let i = 1; i < width; i++) {
    stroke(255,9,9);
      strokeWeight(12);
    point(i, yvals[i] /windowHeight);
    stroke(5,5,260);
    strokeWeight(3);
    point(i, height / 3 + xvals[i] / 3);
    stroke(255);
    strokeWeight(5);
    line(
      i,
      (2 * height) / 5 + bvals[i] / 3,
      i,
      (2 * height) / 3 + yvals[i - 1] / 3
    );
  }
}

function keyTyped() {
  //save image
  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the noCanvas
    clear();
  } else if (key === 'r') {
    //to make rings on the stroke
    stroke(81,39,226);
    circle(mouseX , mouseY, strokeWidth, 40);
  }
}
