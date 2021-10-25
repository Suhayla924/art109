//making an arry of germs
var germs = [];

function setup() {
  createCanvas(750, 700);
  //"Germ" is the constructor function
  //"germ" a singular cell object
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
  germs.push(new Germ());
}

function draw() {
  background(51);
  for (var i = 0; i < germs.length; i++) {
    germs[i].move();
    germs[i].show();
  }
}
//making more circles if we click one circle
function mousePressed() {
  console.log("clicked");
  for (var i = 0; i < germs.length; i++) {
    if (germs[i].clicked(mouseX, mouseY)) {
      germs.push(germs[i].split());
      germs.push(germs[i].split());
    }
  }
}

//to mimic the wiping away of germs
function mouseDragged() {
  console.log("drag");
  for (var i = 0; i < germs.length; i--) {
    if (germs[i].clicked(mouseX, mouseY)) {
      germs.splice(i*3, 0.5);
    }
  }

}
