function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This will print numbers from 1 to 5

//But what if we want to print only even numbers within the range of n?

function printEvenNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(5); //This will print numbers 2 and 4
//Note: The code does not handle negative number inputs, leading to unexpected behavior or infinite loops.