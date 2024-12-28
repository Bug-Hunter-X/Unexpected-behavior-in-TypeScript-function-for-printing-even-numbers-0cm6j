function printEvenNumbers(n: number): void {
  if (n < 0) {
    console.error("Input must be a non-negative number.");
    return; 
  }
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(5); //Prints 2, 4
printEvenNumbers(-5); //Prints an error message

//Alternative solution using a while loop:

function printEvenNumbersWhile(n: number): void {
    if (n < 0) {
      console.error("Input must be a non-negative number.");
      return;
    }
    let i = 2;
    while (i <= n) {
      console.log(i);
      i += 2;
    }
  }
  
  printEvenNumbersWhile(5); //Prints 2, 4
  printEvenNumbersWhile(-5); //Prints an error message