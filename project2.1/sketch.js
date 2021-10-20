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

  background(106, 142, 235, .05); // last number is transparency
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
    stroke(125,9,9);
      strokeWeight(2);
    point(i -19, xvals[i + 9] /3);
    stroke(5,5,260);
    strokeWeight(3);
    point(i + 6, height / 15 + yvals[i] / 3);
    stroke(2,98,55);
    strokeWeight(1);
    line(
      i,
      (13 * height) / 15 + yvals[i + 15] / 3,
      i,
      (12 * height) / 3 + bvals[i - 1] / 13
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
