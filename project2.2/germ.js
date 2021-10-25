
function Germ(pos, r, c) {
  //vector object to store the germ objects postion
  //use random to generate the circles randomly
  if (pos){
      this.pos = pos.copy();
    } else {
    this.pos = createVector(random(width), random(height));
    }

  //generate a random radius size range
  this.r = r || random(190,15);
  this.c = c || color(random(15, 250), random(150, 250), 0);

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  };

//creates new germ when clicked
  this.split = function() {
    var germ = new Germ(this.pos, this.r / 1.5, this.c);
    return germ;
  };
  //circles can move around screen
  this.move = function() {
    //create a random vector position
    var vel = p5.Vector.random2D();
    //creates movement to the circle you can sub something else in the "velocity" area.
    this.pos.add(vel);

  };
  //shows up on screen
  this.show = function() {
    stroke(random(10, 125), random(50, 125), random(15, 25));
    strokeWeight(random(0.5,3));
    fill(this.c);
    //pos is the vector
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
    ellipse(this.pos.x, this.pos.y, this.r*.02, this.r);
    ellipse(this.pos.x, this.pos.y, this.r, this.r * .02);
    ellipse(this.pos.y, this.pos.x, 13, 15);
    strokeWeight(0.02);

  };
}
