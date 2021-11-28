let s = 'The quick brown fox jumped over the lazy dog.';

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  fill(50);
  text(s, 10, 10, 70, 80); // Text wraps within text box
}
