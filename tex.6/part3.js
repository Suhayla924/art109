/*declaring variables*/
/* making the grid size be a variable so the size can be changed by just changing the value*/
var grid = 8;
let hash = '#';
var space = ' ';

/*testing if the console log is responding*/
console.log("Part3!")

/*making a 8x8 grid with a "for" statment and constraints*/
for (let i = 0; i <= grid; i++) {
  var line = '';

  for (let j = 1; j <= grid; j++) {
    if (i % 2 == 0) {
      if (j % 2 == 0) {
        line = line + space;
      } else {
        line = line + hash;
      }
    } else {
      if (j % 2 == 0) {
        line = line + hash;
      } else {
        line = line + space;
      }
    }
  }
  console.log(line);
}
