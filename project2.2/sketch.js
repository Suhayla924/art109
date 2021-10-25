//making an arry of germs
var germs = [];
let cnv;

function setup() {
  cnv = createCanvas(1050, 1350);
  cnv.parent("#canvasDiv");
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
  for (var i = germs.length - 1; i >= 0; i--) {
    if (germs[i].clicked(mouseX, mouseY)) {
      germs.push(germs[i].split());
      germs.push(germs[i].split());
      germs.splice(i, 0.2);
    }
  }
}

//to mimic the wiping away of germs
function mouseDragged() {
  console.log("drag");
  for (var i = 0; i < germs.length; i--) {
    if (germs[i].clicked(mouseX, mouseY)) {
      germs.splice(i, .5);
    }
  }
}

//spawn a new germ
function keyTyped() {
  if (key === 's') {
    germs.push(new Germ());
  }
}
