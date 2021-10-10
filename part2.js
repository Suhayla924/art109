/*testing if the console log is responding*/
console.log("Part2!");

/* Simillair to the first part we will make a loop that print out the numbers*/
/* make a for statment to create the loop.
"i" equals zero. If "i" is greater then 100 then;
 means that 100 rows will print in the console log.
 With each row 1 is added to "i"*/
for (let i = 0; i < 100; i++) {
  /*if i is divsiable by 3 then it will print out Fizz.
  the same thing applies to the other conditions with "Buzz" and "FizzBuzz"*/
  if ((i % 3 == 0) && (i % 5 == 0)) {
    console.log('FizzBuzz');
  } else if (i % 5 == 0) {
    console.log('Buzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}
