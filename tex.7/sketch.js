let xvals = [];
let yvals = [];
let bvals = [];

function setup() {
  createCanvas(720, 400);
  strokeWeight(13);
}

function draw() {
  background(0);

  for (let i = 25; i < width; i++) {
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


  fill(25);
  stroke(90.5,5);
  rect(0, height / 5, width, height /9 + 1);

  for (let i = 1; i < width; i++) {
    stroke(255,9,9);
      strokeWeight(12);
    point(i, yvals[i] / 9);
    stroke(5,5,260);
    strokeWeight(3);
    point(i, height / 3 + xvals[i] / 3);
    stroke(255);
    strokeWeight(5);
    line(
      i,
      (2 * height) / 3 + bvals[i] / 3,
      i,
      (2 * height) / 3 + yvals[i - 1] / 3
    );
  }
}
