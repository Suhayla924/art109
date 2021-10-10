/*declare "c"*/
let c = '';

/*testing if the console log is responding*/
console.log("Hello World!");
console.log("Part1!");

/*create an array for the loop*/
/* make a for statment to create the loop.
"i" equals zero. If "i" is greater then 7 then;
 means that 7 rows will print in the console log.
 With each row 1 is added to "i"*/

for (let i = 0; i < 7; i++) {
  c = c + '#';
  console.log(c);
}

/*After we declare the condition we make the function.
We make "c" equal to "c" plus one hash.
And it will repeat based on the conditions we set before.*/
